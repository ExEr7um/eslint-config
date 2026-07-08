import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import vitest from "../../configs/vitest"
import { hasConfigNamed } from "../utils"

/** Имя конфига vitest */
const [{ name }] = vitest

describe("Конфиг vitest", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(hasConfigNamed(config, name)).toBeTruthy()
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { vitest: false } })

    expect(hasConfigNamed(config, name)).toBeFalsy()
  })
})
