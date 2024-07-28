import gitignore from "eslint-config-flat-gitignore"

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  gitignore({
    root: true,
  }),

  {
    ignores: ["package-lock.json", "pnpm-lock.yaml", "yarn.lock"],
    name: "general/ignore",
  },
]
