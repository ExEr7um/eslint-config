import type { NuxtESLintConfigOptions } from "@nuxt/eslint-config"
import type { Linter } from "eslint"

import { createConfigForNuxt } from "@nuxt/eslint-config"
import { defu } from "defu"
import eslintConfigPrettier from "eslint-config-prettier"
import deMorgan from "eslint-plugin-de-morgan"
import perfectionist from "eslint-plugin-perfectionist"

import type { ESLintConfigOptions } from "./types"

import accessibility from "./configs/accessibility"
import base from "./configs/base"
import depend from "./configs/depend"
import ignore from "./configs/ignore"
import jsdoc from "./configs/jsdoc"
import jsonc from "./configs/jsonc"
import sonar from "./configs/sonar"
import tailwindcss from "./configs/tailwindcss"
import unicorn from "./configs/unicorn"
import vitest from "./configs/vitest"
import vue from "./configs/vue"
import yaml from "./configs/yaml"
import createNuxtOptions from "./nuxtOptions"

/**
 * Функция для создания конфигурации ESLint
 *
 * @param options - Параметры конфигурации
 * @param nuxtOptions - Параметры конфигурации для `@nuxt/eslint-config`
 * @returns Конфигурация ESLint
 */
export default async function createESLintConfig(
  options?: ESLintConfigOptions,
  nuxtOptions?: NuxtESLintConfigOptions,
) {
  /** Конфигурация по умолчанию */
  const defaultOptions = {
    plugins: {
      accessibility: true,
      deMorgan: true,
      depend: true,
      jsdoc: true,
      jsonc: true,
      perfectionist: true,
      prettier: true,
      sonar: true,
      tailwindcss: true,
      unicorn: true,
      vitest: true,
      vue: true,
      yaml: true,
    },
  } as const satisfies ESLintConfigOptions

  /** Объединение конфигураций */
  const mergedOptions = defu(options, defaultOptions)

  /** Конфигурация ESLint */
  const eslintConfig: Linter.Config[] = [...ignore, ...base]

  /** Список плагинов */
  const plugins = {
    accessibility,
    deMorgan: [deMorgan.configs.recommended],
    depend,
    jsdoc,
    jsonc,
    perfectionist: [perfectionist.configs["recommended-natural"]],
    prettier: [eslintConfigPrettier],
    sonar,
    tailwindcss,
    unicorn,
    // @ts-expect-error Несовпадение типов в библиотеке
    vitest,
    vue,
    yaml,
  } as const satisfies Record<
    keyof typeof mergedOptions.plugins,
    Linter.Config<Linter.RulesRecord>[] | string
  >

  // Динамический импорт локальных плагинов
  for (const [plugin, config] of Object.entries(plugins)) {
    // Если плагин включен в конфигурации
    if (mergedOptions.plugins[plugin as keyof typeof plugins]) {
      // Добавляем конфигурацию плагина в конфигурацию ESLint
      eslintConfig.push(...config)
    }
  }

  // Переопределение правил ESLint
  if (mergedOptions.rules) {
    eslintConfig.push({ rules: mergedOptions.rules })
  }

  return createConfigForNuxt(createNuxtOptions(nuxtOptions), eslintConfig)
}
