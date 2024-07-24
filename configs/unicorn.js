import { configs as unicornConfigs } from "eslint-plugin-unicorn"

export default [
  unicornConfigs["flat/recommended"],

  {
    name: "unicorn/base",
    rules: {
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-anonymous-default-export": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/switch-case-braces": ["error", "avoid"],
    },
  },
]
