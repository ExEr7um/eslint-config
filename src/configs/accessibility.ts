import pluginVueA11y from "eslint-plugin-vuejs-accessibility"
import type { Linter } from "eslint"

export default [
  ...pluginVueA11y.configs["flat/recommended"],

  {
    name: "accessibility/base",
    rules: {
      "vuejs-accessibility/alt-text": [
        "error",
        {
          img: ["NuxtImg", "LazyNuxtImg"],
        },
      ],
      "vuejs-accessibility/anchor-has-content": [
        "error",
        {
          components: ["NuxtLink", "LazyNuxtLink"],
        },
      ],
      "vuejs-accessibility/label-has-for": [
        "error",
        {
          required: "id",
        },
      ],
      "vuejs-accessibility/media-has-caption": "off",
    },
  },
] as const satisfies Linter.Config[]
