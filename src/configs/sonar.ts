import { configs as sonarConfigs } from "eslint-plugin-sonarjs"
import type { Linter } from "eslint"

export default [
  sonarConfigs.recommended,

  {
    name: "sonar/base",
    rules: {
      "sonarjs/no-duplicate-string": "off",
    },
  },
] as const satisfies Linter.Config[]
