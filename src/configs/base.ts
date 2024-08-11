import type { Linter } from "eslint"

export default [
  {
    name: "general/base",
    settings: {
      "vue-i18n": {
        localeDir: "./assets/lang/*.json",
        messageSyntaxVersion: "^9.0.0",
      },
    },
  },
] as const satisfies Linter.Config[]
