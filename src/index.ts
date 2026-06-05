import type { NuxtESLintConfigOptions } from "@nuxt/eslint-config"
import type { Linter } from "eslint"

import e18e from "@e18e/eslint-plugin"
import { createConfigForNuxt } from "@nuxt/eslint-config"
import { defu } from "defu"
import eslintConfigPrettier from "eslint-config-prettier"
import deMorgan from "eslint-plugin-de-morgan"
import perfectionist from "eslint-plugin-perfectionist"

import type { ESLintConfigOptions } from "./types"

import base from "./configs/base"
import ignore from "./configs/ignore"
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
      e18e: true,
      jsdoc: true,
      jsonc: true,
      perfectionist: true,
      prettier: true,
      sonar: true,
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
    accessibility: "accessibility",
    deMorgan: [deMorgan.configs.recommended],
    e18e: [e18e.configs.recommended],
    jsdoc: "jsdoc",
    jsonc: "jsonc",
    perfectionist: [perfectionist.configs["recommended-natural"]],
    prettier: [eslintConfigPrettier],
    sonar: "sonar",
    unicorn: "unicorn",
    vitest: "vitest",
    vue: "vue",
    yaml: "yaml",
  } as const satisfies Record<
    keyof typeof mergedOptions.plugins,
    Linter.Config<Linter.RulesRecord>[] | string
  >

  // Динамический импорт локальных плагинов
  for (const [plugin, config] of Object.entries(plugins)) {
    if (mergedOptions.plugins[plugin as keyof typeof plugins]) {
      if (typeof config === "string") {
        // Если плагин является строкой, то он импортируется локально
        const module = await import(`./configs/${config}.ts`)
        eslintConfig.push(...module.default)
      } else {
        // Если плагин является массивом, то он импортируется из внешней зависимости
        eslintConfig.push(...config)
      }
    }
  }

  // Переопределение правил ESLint
  if (mergedOptions.rules) {
    eslintConfig.push({ rules: mergedOptions.rules })
  }

  return createConfigForNuxt(createNuxtOptions(nuxtOptions), eslintConfig)
}
