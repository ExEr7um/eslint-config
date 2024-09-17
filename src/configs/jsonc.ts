import { configs as jsoncConfigs } from "eslint-plugin-jsonc"
import type { Linter } from "eslint"

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
      "**/package.json",
    ],
    name: "json/sort-keys",
    rules: {
      "jsonc/sort-keys": ["error", "asc"],
    },
  },
] as const satisfies Linter.Config[]
