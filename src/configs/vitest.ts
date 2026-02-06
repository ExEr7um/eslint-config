import type { Linter } from "eslint"

import vitest from "@vitest/eslint-plugin"

export default [
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}"],
    name: "vitest/base",
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/consistent-test-filename": [
        "error",
        { pattern: String.raw`.*\.spec\.ts` },
      ],
      "vitest/consistent-test-it": ["error", { fn: "test" }],
      "vitest/no-alias-methods": "error",
      "vitest/no-conditional-expect": "error",
      "vitest/no-conditional-in-test": "error",
      "vitest/no-conditional-tests": "error",
      "vitest/no-disabled-tests": "error",
      "vitest/no-focused-tests": ["error", { fixable: false }],
      "vitest/no-interpolation-in-snapshots": "error",
      "vitest/prefer-comparison-matcher": "error",
      "vitest/prefer-each": "error",
      "vitest/prefer-equality-matcher": "error",
      "vitest/prefer-hooks-in-order": "error",
      "vitest/prefer-hooks-on-top": "error",
      "vitest/prefer-strict-equal": "error",
      "vitest/prefer-to-be": "error",
      "vitest/prefer-to-be-falsy": "error",
      "vitest/prefer-to-be-object": "error",
      "vitest/prefer-to-be-truthy": "error",
      "vitest/prefer-to-contain": "error",
      "vitest/prefer-to-have-length": "error",
      "vitest/require-top-level-describe": "error",
    },
  },
] as const satisfies Linter.Config[]
