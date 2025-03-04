import type { Linter } from "eslint"

// @ts-expect-error - нет типизации
import tailwind from "eslint-plugin-tailwindcss"

export default [
  ...tailwind.configs["flat/recommended"],

  {
    name: "tailwindcss/base",
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
] as const satisfies Linter.Config[]
