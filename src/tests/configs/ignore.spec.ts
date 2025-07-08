import { describe, expect, test } from "vitest"

import ignore from "../../configs/ignore"
import createESLintConfig from "../../index"

describe("Конфиг ignore", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(ignore))
  })

  test("Имеет все параметры", () => {
    expect(ignore).toMatchSnapshot()
  })
})
