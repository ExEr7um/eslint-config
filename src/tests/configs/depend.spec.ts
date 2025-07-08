import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import depend from "../../configs/depend"

describe("Конфиг depend", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(depend))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { depend: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(depend))
  })

  test("Имеет все параметры", () => {
    expect(depend).toMatchSnapshot()
  })
})
