import type { Linter } from "eslint"

import gitignore from "eslint-config-flat-gitignore"
import { globalIgnores } from "eslint/config"

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
