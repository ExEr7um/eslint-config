import type { Linter } from "eslint"

import eslintReact from "@eslint-react/eslint-plugin"

export default [
  eslintReact.configs["strict-typescript"],
] as const satisfies Linter.Config[]
