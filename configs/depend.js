import * as depend from "eslint-plugin-depend"

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  depend.configs["flat/recommended"],

  {
    files: ["package.json"],
    name: "depend/package-json",
    rules: {
      "depend/ban-dependencies": "error",
    },
  },
]
