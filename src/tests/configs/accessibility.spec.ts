import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import accessibility from "../../configs/accessibility"

describe("Конфиг accessibility", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(accessibility))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({
      plugins: { accessibility: false },
    })

    expect(config).not.toStrictEqual(expect.arrayContaining(accessibility))
  })

  test("Имеет все параметры", () => {
    expect(accessibility).toMatchSnapshot()
  })
})
