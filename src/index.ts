// @ts-expect-error - нет типизации
import eslintConfigPrettier from "eslint-config-prettier"
import perfectionist from "eslint-plugin-perfectionist"

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

import type { Linter } from "eslint"

export default [
  // Игнорируемые файлы
  ...ignore,

  // JSDoc
  ...jsdoc,

  // JSONC
  ...jsonc,

  // YAML
  ...yaml,

  // Perfectionist
  perfectionist.configs["recommended-natural"],

  // Base
  ...base,

  // Vue
  ...vue,

  // Depend
  ...depend,

  // Tailwind CSS
  ...tailwindcss,

  // Accessibility
  ...accessibility,

  // Sonar
  ...sonar,

  // Unicorn
  ...unicorn,

  // Vitest
  ...vitest,

  // Prettier
  eslintConfigPrettier,
] as const satisfies Linter.Config[]
