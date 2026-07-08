import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import accessibility from "../../configs/accessibility"
import { hasConfigNamed } from "../utils"

/** Имя конфига accessibility */
const [{ name }] = accessibility

describe("Конфиг accessibility", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(hasConfigNamed(config, name)).toBeTruthy()
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({
      plugins: { accessibility: false },
    })

    expect(hasConfigNamed(config, name)).toBeFalsy()
  })
})
