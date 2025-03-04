import type { Linter } from "eslint"

import { configs as sonarConfigs } from "eslint-plugin-sonarjs"

export default [
  // @ts-expect-error - неправильная типизация
  sonarConfigs.recommended,

  { name: "sonar/base", rules: { "sonarjs/no-duplicate-string": "off" } },
] as const satisfies Linter.Config[]
