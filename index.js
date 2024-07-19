import eslintConfigPrettier from "eslint-config-prettier"
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural"

import base from "./configs/base.js"
import ignore from "./configs/ignore.js"
import jsdoc from "./configs/jsdoc.js"
import jsonc from "./configs/jsonc.js"
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
  perfectionistNatural,

  // Base
  ...base,

  // Vue
  ...vue,

  // Prettier
  eslintConfigPrettier,
]
