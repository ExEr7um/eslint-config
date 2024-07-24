import { configs as sonarConfigs } from "eslint-plugin-sonarjs"

export default [
  sonarConfigs.recommended,

  {
    name: "sonar/base",
    rules: {
      "sonarjs/no-duplicate-string": "off",
    },
  },
]
