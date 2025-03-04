import type { Linter } from "eslint"

export default [
  {
    name: "unicorn/base",
    rules: {
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-anonymous-default-export": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/switch-case-braces": ["error", "avoid"],
    },
  },
] as const satisfies Linter.Config[]
