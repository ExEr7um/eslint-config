import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import vue from "../../configs/vue"

describe("Конфиг vue", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(vue))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { vue: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(vue))
  })

  test("Имеет все параметры", () => {
    expect(vue).toMatchSnapshot()
  })
})
