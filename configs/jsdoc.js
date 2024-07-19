import jsdoc from "eslint-plugin-jsdoc"

/** @type {import('eslint').Linter.FlatConfig} */
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
]
