import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import vue from "../../configs/vue"
import { hasConfigNamed } from "../utils"

/** Имя конфига vue */
const [{ name }] = vue

describe("Конфиг vue", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(hasConfigNamed(config, name)).toBeTruthy()
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { vue: false } })

    expect(hasConfigNamed(config, name)).toBeFalsy()
  })
})
