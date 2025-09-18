import type { NuxtESLintConfigOptions } from "@nuxt/eslint-config"

import { defu } from "defu"

/**
 * Функция для создания параметров для `@nuxt/eslint-config`
 *
 * @param options - Параметры для `@nuxt/eslint-config`
 * @returns Параметры для `@nuxt/eslint-config`
 */
export default function createNuxtOptions(options?: NuxtESLintConfigOptions) {
  /** Параметры по умолчанию для `@nuxt/eslint-config` */
  const nuxtDefaultOptions = {
    features: { tooling: { jsdoc: false, unicorn: false } },
  } as const satisfies NuxtESLintConfigOptions

  return defu(options, nuxtDefaultOptions)
}
