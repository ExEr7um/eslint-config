import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import sonar from "../../configs/sonar"

describe("Конфиг sonar", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(sonar))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { sonar: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(sonar))
  })
})
