import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import vitest from "../../configs/vitest"

describe("Конфиг vitest", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(vitest))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { vitest: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(vitest))
  })

  test("Имеет все параметры", () => {
    expect(vitest).toMatchSnapshot()
  })
})
