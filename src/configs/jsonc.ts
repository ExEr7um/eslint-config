import type { Linter } from "eslint"

import { configs as jsoncConfigs } from "eslint-plugin-jsonc"

export default [
  ...jsoncConfigs["recommended-with-json"],
  ...jsoncConfigs.prettier,

  {
    ignores: ["**/package.json"],
    name: "json/sort-keys",
    rules: { "jsonc/sort-keys": ["error", "asc"] },
  },
] as const satisfies Linter.Config[]
