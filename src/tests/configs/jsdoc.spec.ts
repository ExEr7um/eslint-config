import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import jsdoc from "../../configs/jsdoc"

describe("Конфиг jsdoc", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(jsdoc))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { jsdoc: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(jsdoc))
  })
})
