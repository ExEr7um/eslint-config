import jsdoc from "eslint-plugin-jsdoc"
import type { Linter } from "eslint"

export default [
  jsdoc.configs["flat/recommended"],

  {
    name: "jsdoc/base",
    rules: {
      "jsdoc/check-indentation": "warn",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/sort-tags": "warn",
      "jsdoc/tag-lines": [
        "warn",
        "any",
        {
          startLines: 1,
        },
      ],
    },
  },
] as const satisfies Linter.Config[]
