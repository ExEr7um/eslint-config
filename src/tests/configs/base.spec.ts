import { describe, expect, test } from "vitest"

import base from "../../configs/base"
import createESLintConfig from "../../index"
import { hasConfigNamed } from "../utils"

/** Имя конфига base */
const [{ name }] = base

describe("Конфиг base", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(hasConfigNamed(config, name)).toBeTruthy()
  })
})
