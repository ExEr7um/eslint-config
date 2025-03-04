import type { Linter } from "eslint"

export default [
  {
    files: ["**/*.vue"],
    name: "vue/base",
    rules: {
      "perfectionist/sort-vue-attributes": "off",
      "vue/attributes-order": ["error", { alphabetical: true }],
      "vue/block-lang": ["error", { script: { lang: "ts" } }],
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/block-tag-newline": "error",
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/define-emits-declaration": "error",
      "vue/define-macros-order": [
        "error",
        {
          defineExposeLast: true,
          order: ["defineProps", "defineEmits", "defineModel"],
        },
      ],
      "vue/define-props-declaration": "error",
      "vue/html-button-has-type": "error",
      "vue/html-comment-content-newline": "error",
      "vue/html-comment-content-spacing": "error",
      "vue/html-comment-indent": "error",
      "vue/multi-word-component-names": "off",
      "vue/no-empty-component-block": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-setup-props-reactivity-loss": "error",
      "vue/no-unused-refs": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/prefer-use-template-ref": "error",
      "vue/require-prop-comment": ["error", { type: "JSDoc" }],
      "vue/require-typed-ref": "error",
      "vue/v-bind-style": [
        "error",
        "shorthand",
        { sameNameShorthand: "always" },
      ],
      "vue/v-for-delimiter-style": "error",
    },
  },
] as const satisfies Linter.Config[]
