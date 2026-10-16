import { defineCheckConfig, defineFmtConfig, defineStagedConfig } from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig(),
  staged: defineStagedConfig({}, { eslint: "*.{js,mjs,ts,json,yml,yaml}" }),
})
