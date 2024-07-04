import gitignore from "eslint-config-flat-gitignore"
import eslintConfigPrettier from "eslint-config-prettier"
import jsdoc from "eslint-plugin-jsdoc"
import { configs as jsoncConfigs } from "eslint-plugin-jsonc"
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural"
import { configs as ymlConfigs } from "eslint-plugin-yml"

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  gitignore({
    root: true,
  }),
  {
    ignores: ["pnpm-lock.yaml"],
    name: "ignore/global",
  },

  // JSDoc
  jsdoc.configs["flat/recommended"],

  // JSONC
  ...jsoncConfigs["flat/recommended-with-json"],
  ...jsoncConfigs["flat/prettier"],
  {
    files: [
      "*.json",
      "**/*.json",
      "*.json5",
      "**/*.json5",
      "*.jsonc",
      "**/*.jsonc",
      "**/*.vue",
    ],
    ignores: [
      "**/.nuxt",
      "**/.output",
      "**/dist",
      "**/node_modules",
      "coverage/**",
      "package.json",
    ],
    name: "json/sort-keys",
    rules: {
      "jsonc/sort-keys": ["error", "asc"],
    },
  },

  // YAML
  ...ymlConfigs["flat/standard"],
  ...ymlConfigs["flat/prettier"],
  {
    files: ["*.yaml", "**/*.yaml", "*.yml", "**/*.yml", "**/*.vue"],
    ignores: [".github/**"],
    name: "yml/sort-keys",
    rules: {
      "yml/sort-keys": ["error", "asc"],
    },
  },

  // Perfectionist
  perfectionistNatural,

  // Base
  {
    name: "general/base",
    rules: {
      "jsdoc/check-indentation": "warn",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/sort-tags": "warn",
      "jsdoc/tag-lines": [
        "warn",
        "any",
        {
          startLines: 1,
        },
      ],
    },
    settings: {
      "vue-i18n": {
        localeDir: "./assets/lang/*.json",
        messageSyntaxVersion: "^9.0.0",
      },
    },
  },

  // Vue
  {
    files: ["**/*.vue"],
    name: "vue/base",
    rules: {
      "perfectionist/sort-vue-attributes": "off",
      "vue/attributes-order": [
        "error",
        {
          alphabetical: true,
        },
      ],
      "vue/block-lang": [
        "error",
        {
          script: {
            lang: "ts",
          },
        },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
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
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-setup-props-reactivity-loss": "error",
      "vue/no-unused-refs": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/require-prop-comment": [
        "error",
        {
          type: "JSDoc",
        },
      ],
      "vue/require-typed-ref": "error",
      "vue/v-bind-style": [
        "error",
        "shorthand",
        {
          sameNameShorthand: "always",
        },
      ],
      "vue/v-for-delimiter-style": "error",
    },
  },

  // Prettier
  eslintConfigPrettier,
]
