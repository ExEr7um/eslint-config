import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import yaml from "../../configs/yaml"

describe("Конфиг yaml", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(yaml))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { yaml: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(yaml))
  })
})
