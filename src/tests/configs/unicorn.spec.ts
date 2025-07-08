import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import unicorn from "../../configs/unicorn"

describe("Конфиг unicorn", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(unicorn))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { unicorn: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(unicorn))
  })

  test("Имеет все параметры", () => {
    expect(unicorn).toMatchSnapshot()
  })
})
