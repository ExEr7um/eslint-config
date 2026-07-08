import type { NuxtESLintConfigOptions } from "@nuxt/eslint-config"
import type { Linter } from "eslint"

import e18e from "@e18e/eslint-plugin"
import { createConfigForNuxt } from "@nuxt/eslint-config"
import { defu } from "defu"
import eslintConfigPrettier from "eslint-config-prettier"
import deMorgan from "eslint-plugin-de-morgan"
import perfectionist from "eslint-plugin-perfectionist"
import { globalIgnores } from "eslint/config"

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
): Promise<Linter.Config[]> {
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
      react: false,
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
    accessibility: () => import("./configs/accessibility.ts"),
    deMorgan: [deMorgan.configs.recommended],
    e18e: [e18e.configs.recommended],
    jsdoc: () => import("./configs/jsdoc.ts"),
    jsonc: () => import("./configs/jsonc.ts"),
    perfectionist: [perfectionist.configs["recommended-natural"]],
    prettier: [eslintConfigPrettier],
    react: () => import("./configs/react.ts"),
    sonar: () => import("./configs/sonar.ts"),
    unicorn: () => import("./configs/unicorn.ts"),
    vitest: () => import("./configs/vitest.ts"),
    vue: () => import("./configs/vue.ts"),
    yaml: () => import("./configs/yaml.ts"),
  } as const satisfies Record<
    keyof typeof mergedOptions.plugins,
    (() => Promise<{ default: unknown }>) | Linter.Config<Linter.RulesRecord>[]
  >

  // Динамический импорт локальных плагинов
  for (const [plugin, config] of Object.entries(plugins)) {
    // eslint-disable-next-line unicorn/no-computed-property-existence-check -- проверяем значение флага плагина, а не наличие свойства
    if (mergedOptions.plugins[plugin as keyof typeof plugins]) {
      if (typeof config === "function") {
        // Если плагин является функцией, то он импортируется локально
        const module = await config()
        eslintConfig.push(...(module.default as Linter.Config[]))
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

  // Добавление дополнительных игнорируемых путей
  if (mergedOptions.ignores?.length) {
    eslintConfig.push(
      globalIgnores(mergedOptions.ignores, "general/user-ignore"),
    )
  }

  return createConfigForNuxt(createNuxtOptions(nuxtOptions), eslintConfig)
}
