/** @type {import('eslint').Linter.FlatConfig} */
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
]
