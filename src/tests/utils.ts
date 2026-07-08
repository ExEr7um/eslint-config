import type { Linter } from "eslint"

import { ESLint } from "eslint"

/** Человекочитаемые названия уровней важности правил */
const SEVERITY_LABELS = ["off", "warn", "error"] as const

/**
 * Вычисляет итоговый набор правил, который ESLint применит к указанному файлу.
 *
 * Прогоняет конфигурацию через `calculateConfigForFile`, поэтому учитывает
 * порядок конфигов, совпадение по `files`/`ignores` и перезапись правил.
 * Отключённые правила (`off`) отбрасываются — в снапшот попадают только реально
 * применяемые (`warn`/`error`), поэтому пропавшее правило видно как удалённая
 * строка. Результат отсортирован по имени и удобен для снапшотов.
 *
 * @param config - Итоговая конфигурация ESLint
 * @param filePath - Путь к файлу, для которого вычисляются правила
 * @returns Отсортированный объект `имя правила → уровень или [уровень, ...опции]`
 */
export async function resolveRules(
  config: readonly Linter.Config[],
  filePath: string,
) {
  const eslint = new ESLint({
    overrideConfig: config as Linter.Config[],
    overrideConfigFile: true,
  })

  const resolved = await eslint.calculateConfigForFile(filePath)
  const rules = (resolved.rules ?? {}) as Record<string, Linter.RuleEntry>

  const result: Record<string, unknown> = {}

  for (const name of Object.keys(rules).sort()) {
    const entry = rules[name]!
    const [rawSeverity, ...options] = Array.isArray(entry) ? entry : [entry]
    const severity = SEVERITY_LABELS[rawSeverity as number] ?? rawSeverity

    // Отброс отключённых правил — в снапшоте только применяемые
    if (severity === "off") continue

    result[name] = options.length > 0 ? [severity, ...options] : severity
  }

  return result
}

/**
 * Проверяет наличие конфига с указанным именем в итоговой конфигурации.
 *
 * config-helpers может разворачивать `extends` в несколько объектов
 * (например, `unicorn/base` и `unicorn/base > unicorn/recommended`),
 * поэтому ищем по префиксу имени, а не по ссылке на объект.
 *
 * @param config - Итоговая конфигурация ESLint
 * @param name - Имя (или префикс имени) искомого конфига
 * @returns Содержит ли конфигурация конфиг с таким именем
 */
export function hasConfigNamed(config: readonly Linter.Config[], name: string) {
  return config.some((item) => item.name?.startsWith(name))
}
