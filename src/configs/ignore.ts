import gitignore from "eslint-config-flat-gitignore"
import type { Linter } from "eslint"

export default [
  gitignore({
    root: true,
  }),

  {
    ignores: ["package-lock.json", "pnpm-lock.yaml", "yarn.lock"],
    name: "general/ignore",
  },
] as const satisfies Linter.Config[]
