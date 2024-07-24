import { configs as tailwindConfigs } from "eslint-plugin-tailwindcss"

export default [
  ...tailwindConfigs["flat/recommended"],

  {
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
    },
  },
]
