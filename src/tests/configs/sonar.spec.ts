import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import sonar from "../../configs/sonar"
import { hasConfigNamed } from "../utils"

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
})
