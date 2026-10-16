import {
  defineCheckConfig,
  defineFmtConfig,
  definePackConfig,
  defineStagedConfig,
} from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig(),
  pack: definePackConfig(),
  staged: defineStagedConfig({}, { eslint: "*.{js,mjs,ts,json,yml,yaml}" }),
})
