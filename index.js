import eslintConfigPrettier from "eslint-config-prettier"
import perfectionist from "eslint-plugin-perfectionist"

import accessibility from "./configs/accessibility.js"
import base from "./configs/base.js"
import depend from "./configs/depend.js"
import ignore from "./configs/ignore.js"
import jsdoc from "./configs/jsdoc.js"
import jsonc from "./configs/jsonc.js"
import sonar from "./configs/sonar.js"
import tailwindcss from "./configs/tailwindcss.js"
import unicorn from "./configs/unicorn.js"
import vue from "./configs/vue.js"
import yaml from "./configs/yaml.js"

/** @type {import('eslint').Linter.FlatConfig} */
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

  // Prettier
  eslintConfigPrettier,
]
