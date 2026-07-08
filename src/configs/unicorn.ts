import type { ConfigWithExtendsArray } from "@eslint/config-helpers"

import eslintPluginUnicorn from "eslint-plugin-unicorn"

export default [
  {
    extends: [eslintPluginUnicorn.configs.recommended],
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue}"],
    name: "unicorn/base",
    rules: {
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": "off",
      "unicorn/name-replacements": "off",
      "unicorn/no-anonymous-default-export": "off",
      "unicorn/switch-case-braces": ["error", "avoid"],
    },
  },
] as const satisfies ConfigWithExtendsArray
