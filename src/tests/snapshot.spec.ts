import { describe, expect, test } from "vitest"

import createESLintConfig from "../index"
import { resolveRules } from "./utils"

/**
 * Снапшоты итогового набора правил для репрезентативных типов файлов.
 *
 * Задача — зафиксировать, какие правила и с какими уровнями важности ESLint
 * реально применяет к файлу после разворачивания всех конфигов. При рефакторинге
 * пропавшее или отключённое правило будет видно в diff'е снапшота.
 *
 * Если правила изменились намеренно — обновите снапшоты: `vitest -u`.
 */
describe("Снапшот итоговых правил", () => {
  test.each([
    ["TypeScript", "src/example.ts"],
    ["Vue", "src/Example.vue"],
    ["JSON", "data.json"],
    ["YAML", "config.yaml"],
    ["Тесты Vitest", "src/example.test.ts"],
  ])("%s (%s)", async (_label, filePath) => {
    const config = await createESLintConfig()

    expect(await resolveRules(config, filePath)).toMatchSnapshot()
  })

  test("React (src/Example.tsx)", async () => {
    const config = await createESLintConfig({ plugins: { react: true } })

    expect(await resolveRules(config, "src/Example.tsx")).toMatchSnapshot()
  })
})
