import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import jsonc from "../../configs/jsonc"

describe("Конфиг jsonc", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(jsonc))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { jsonc: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(jsonc))
  })

  test("Имеет все параметры", () => {
    expect(jsonc).toMatchSnapshot()
  })
})
