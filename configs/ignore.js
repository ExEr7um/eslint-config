import gitignore from "eslint-config-flat-gitignore"

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  gitignore({
    root: true,
  }),

  {
    ignores: ["pnpm-lock.yaml"],
    name: "general/ignore",
  },
]
