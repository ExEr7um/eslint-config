import * as depend from "eslint-plugin-depend"
import type { Linter } from "eslint"

export default [
  depend.configs["flat/recommended"],

  {
    files: ["package.json"],
    name: "depend/package-json",
    rules: {
      "depend/ban-dependencies": "error",
    },
  },
] as const satisfies Linter.Config[]
