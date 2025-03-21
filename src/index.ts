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

/**
 * Функция для создания конфигурации ESLint
 *
 * @param options - Параметры конфигурации
 * @returns Конфигурация ESLint
 */
export default function createESLintConfig(options?: ESLintConfigOptions) {
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
  const ESLintConfig: Linter.Config[] = [...ignore, ...base]

  /** Конфигурация плагинов */
  const pluginConfigs = {
    accessibility: accessibility,
    deMorgan: [deMorgan.configs.recommended],
    depend: depend,
    jsdoc: jsdoc,
    jsonc: jsonc,
    perfectionist: [perfectionist.configs["recommended-natural"]],
    prettier: [eslintConfigPrettier],
    sonar: sonar,
    tailwindcss: tailwindcss,
    unicorn: unicorn,
    vitest: vitest,
    vue: vue,
    yaml: yaml,
  }

  // Добавление включенных плагинов в конфигурацию
  for (const [plugin, config] of Object.entries(pluginConfigs)) {
    if (mergedOptions.plugins[plugin as keyof typeof mergedOptions.plugins]) {
      ESLintConfig.push(...config)
    }
  }

  return createConfigForNuxt(
    { features: { tooling: { unicorn: false } } },
    ESLintConfig,
  )
}
