import type { Linter } from "eslint"
import { globalIgnores } from "eslint/config"

import gitignore from "eslint-config-flat-gitignore"

export default [
  gitignore({ root: true }),

  globalIgnores(
    [
      "**/package-lock.json",
      "**/pnpm-lock.yaml",
      "**/yarn.lock",
      "**/bun.lock",

      "*/skills/",
    ],
    "general/ignore",
  ),
] as const satisfies Linter.Config[]
