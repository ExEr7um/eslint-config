/**
 * Конфигурация для ESLint
 */
export interface ESLintConfigOptions {
  /**
   * Конфигурация плагинов
   */
  plugins?: {
    /**
     * Включить плагин `eslint-plugin-accessibility`
     *
     * @default true
     */
    accessibility?: boolean
    /**
     * Включить плагин `eslint-plugin-deMorgan`
     *
     * @default true
     */
    deMorgan?: boolean
    /**
     * Включить плагин `eslint-plugin-depend`
     *
     * @default true
     */
    depend?: boolean
    /**
     * Включить плагин `eslint-plugin-jsdoc`
     *
     * @default true
     */
    jsdoc?: boolean
    /**
     * Включить плагин `eslint-plugin-jsonc`
     *
     * @default true
     */
    jsonc?: boolean
    /**
     * Включить плагин `eslint-plugin-perfectionist`
     *
     * @default true
     */
    perfectionist?: boolean
    /**
     * Включить плагин `eslint-plugin-prettier`
     *
     * @default true
     */
    prettier?: boolean
    /**
     * Включить плагин `eslint-plugin-sonar`
     *
     * @default true
     */
    sonar?: boolean
    /**
     * Включить плагин `eslint-plugin-tailwindcss`
     *
     * @default true
     */
    tailwindcss?: boolean
    /**
     * Включить плагин `eslint-plugin-unicorn`
     *
     * @default true
     */
    unicorn?: boolean
    /**
     * Включить плагин `eslint-plugin-vitest`
     *
     * @default true
     */
    vitest?: boolean
    /**
     * Включить плагин `eslint-plugin-vue`
     *
     * @default true
     */
    vue?: boolean
    /**
     * Включить плагин `eslint-plugin-yaml`
     *
     * @default true
     */
    yaml?: boolean
  }
}
