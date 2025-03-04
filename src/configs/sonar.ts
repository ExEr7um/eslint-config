import type { Linter } from "eslint"

import { configs as sonarConfigs } from "eslint-plugin-sonarjs"

export default [
  sonarConfigs.recommended,

  {
    name: "sonar/base",
    rules: {
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/todo-tag": "off",
      "sonarjs/fixme-tag": "off",
    },
  },
] as const satisfies Linter.Config[]
