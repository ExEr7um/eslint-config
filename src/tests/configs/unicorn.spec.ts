import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import unicorn from "../../configs/unicorn"
import { hasConfigNamed } from "../utils"

/** Имя конфига unicorn */
const [{ name }] = unicorn

describe("Конфиг unicorn", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(hasConfigNamed(config, name)).toBeTruthy()
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { unicorn: false } })

    expect(hasConfigNamed(config, name)).toBeFalsy()
  })
})
