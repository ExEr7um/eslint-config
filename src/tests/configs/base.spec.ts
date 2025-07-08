import { describe, expect, test } from "vitest"

import base from "../../configs/base"
import createESLintConfig from "../../index"

describe("Конфиг base", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(base))
  })
})
