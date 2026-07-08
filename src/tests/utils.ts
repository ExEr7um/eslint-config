import type { Linter } from "eslint"

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
