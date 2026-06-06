import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import react from "../../configs/react"

describe("Конфиг react", () => {
  test("Отключен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).not.toStrictEqual(expect.arrayContaining(react))
  })

  test("Включается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { react: true } })

    expect(config).toStrictEqual(expect.arrayContaining(react))
  })
})
