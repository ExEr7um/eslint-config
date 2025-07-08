import type { NuxtESLintConfigOptions } from "@nuxt/eslint-config"

import createConfigForNuxt from "@nuxt/eslint-config"
import eslintConfigPrettier from "eslint-config-prettier"
import deMorgan from "eslint-plugin-de-morgan"
import perfectionist from "eslint-plugin-perfectionist"
import { describe, expect, test, vi } from "vitest"

import createESLintConfig from "../index"
import createNuxtOptions from "../nuxtOptions"

vi.mock("@nuxt/eslint-config", { spy: true })

describe("Функция createESLintConfig", () => {
  test("Параметры nuxtOptions передаются в createConfigForNuxt", async () => {
    const nuxtOptions = {
      features: { tooling: { regexp: false } },
    } as const satisfies NuxtESLintConfigOptions

    await createESLintConfig(undefined, nuxtOptions)

    expect(createConfigForNuxt).toHaveBeenCalled()
    expect(createConfigForNuxt).toHaveBeenCalledWith(
      createNuxtOptions(nuxtOptions),
      expect.anything(),
    )
  })

  describe("Обработка внешних плагинов", () => {
    test("Все плагины включены по умолчанию", async () => {
      const config = await createESLintConfig()

      expect(config).toStrictEqual(
        expect.arrayContaining([deMorgan.configs.recommended]),
      )
      expect(config).toStrictEqual(
        expect.arrayContaining([perfectionist.configs["recommended-natural"]]),
      )
      expect(config).toStrictEqual(
        expect.arrayContaining([eslintConfigPrettier]),
      )
    })

    test("Плагин deMorgan можно отключить", async () => {
      const config = await createESLintConfig({ plugins: { deMorgan: false } })

      expect(config).not.toStrictEqual(
        expect.arrayContaining([deMorgan.configs.recommended]),
      )
    })

    test("Плагин perfectionist можно отключить", async () => {
      const config = await createESLintConfig({
        plugins: { perfectionist: false },
      })

      expect(config).not.toStrictEqual(
        expect.arrayContaining([perfectionist.configs["recommended-natural"]]),
      )
    })

    test("Плагин prettier можно отключить", async () => {
      const config = await createESLintConfig({ plugins: { prettier: false } })

      expect(config).not.toStrictEqual(
        expect.arrayContaining([eslintConfigPrettier]),
      )
    })
  })
})
