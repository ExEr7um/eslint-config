import { describe, expect, test } from "vitest"

import createESLintConfig from "../.."
import tailwindcss from "../../configs/tailwindcss"

describe("Конфиг tailwindcss", () => {
  test("Включен по умолчанию", async () => {
    const config = await createESLintConfig()

    expect(config).toStrictEqual(expect.arrayContaining(tailwindcss))
  })

  test("Отключается через параметры", async () => {
    const config = await createESLintConfig({ plugins: { tailwindcss: false } })

    expect(config).not.toStrictEqual(expect.arrayContaining(tailwindcss))
  })

  test("Имеет все параметры", () => {
    expect(tailwindcss).toMatchSnapshot()
  })
})
