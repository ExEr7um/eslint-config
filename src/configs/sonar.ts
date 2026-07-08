import type { ConfigWithExtendsArray } from "@eslint/config-helpers"

import { configs as sonarConfigs } from "eslint-plugin-sonarjs"

export default [
  {
    extends: [sonarConfigs.recommended],
    name: "sonar/base",
    rules: {
      "sonarjs/fixme-tag": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/todo-tag": "off",
    },
  },
] as const satisfies ConfigWithExtendsArray
