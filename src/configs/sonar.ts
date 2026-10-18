import type { ConfigWithExtendsArray } from "@eslint/config-helpers"

import { configs as sonarConfigs } from "eslint-plugin-sonarjs"

/** Правила для инфраструктуры AWS CDK, которой нет во фронтенде, а проверка занимает до 20% времени линта */
const awsRules = Object.keys(sonarConfigs.recommended.rules ?? {}).filter((rule) =>
  rule.startsWith("sonarjs/aws-"),
)

export default [
  {
    extends: [sonarConfigs.recommended],
    name: "sonar/base",
    rules: {
      ...Object.fromEntries(awsRules.map((rule) => [rule, "off"])),
      "sonarjs/fixme-tag": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/todo-tag": "off",
    },
  },
] as const satisfies ConfigWithExtendsArray
