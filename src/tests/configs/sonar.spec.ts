import { describe, expect, test } from "vite-plus/test"

import createESLintConfig from "../.."
import sonar from "../../configs/sonar"
import { hasConfigNamed, resolveRules } from "../utils"

/** Имя конфига sonar */
const [{ name }] = sonar

describe("Конфиг sonar", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(hasConfigNamed(config, name)).toBeTruthy()
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { sonar: false } })

    expect(hasConfigNamed(config, name)).toBeFalsy()
  })

  test("Правила AWS отключены", async () => {
    const rules = await resolveRules(await createESLintConfig(), "index.ts")

    expect(Object.keys(rules).filter((rule) => rule.startsWith("sonarjs/aws-"))).toStrictEqual([])
  })
})
