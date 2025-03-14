import type { Linter } from "eslint"

import { configs as ymlConfigs } from "eslint-plugin-yml"

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  ...ymlConfigs["flat/standard"],
  ...ymlConfigs["flat/prettier"],

  {
    files: ["*.yaml", "**/*.yaml", "*.yml", "**/*.yml", "**/*.vue"],
    ignores: [".github/**"],
    name: "yml/sort-keys",
    rules: { "yml/sort-keys": ["error", "asc"] },
  },
] as const satisfies Linter.Config[]
