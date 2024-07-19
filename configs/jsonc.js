import { configs as jsoncConfigs } from "eslint-plugin-jsonc"

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  ...jsoncConfigs["flat/recommended-with-json"],
  ...jsoncConfigs["flat/prettier"],

  {
    files: [
      "*.json",
      "**/*.json",
      "*.json5",
      "**/*.json5",
      "*.jsonc",
      "**/*.jsonc",
      "**/*.vue",
    ],
    ignores: [
      "**/.nuxt",
      "**/.output",
      "**/dist",
      "**/node_modules",
      "coverage/**",
      "package.json",
    ],
    name: "json/sort-keys",
    rules: {
      "jsonc/sort-keys": ["error", "asc"],
    },
  },
]
