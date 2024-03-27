# Конфигурация ESLint

![NPM Version](https://img.shields.io/npm/v/%40exer7um%2Feslint-config?color=%232563EB)
![NPM Downloads](https://img.shields.io/npm/dt/%40exer7um%2Feslint-config?color=%232563EB)

## Установка

```bash
bun add -D @exer7um/eslint-config
```

```bash
pnpm i -D @exer7um/eslint-config
```

```bash
npm i -D @exer7um/eslint-config
```

```bash
yarn add -D @exer7um/eslint-config
```

## Использование

Для использования нужно создать файл `eslint.config.mjs` с содержимым:

```js
import exer7umConfig from "@exer7um/eslint-config"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(exer7umConfig)
```

Добавить в файл `nuxt.config.ts` модуль `@nuxt/eslint`:

```ts
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"]
})
```

Добавить в файл `.vscode/settings.json`:

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": ["javascript", "json", "vue", "typescript"]
}
```

Добавить команды для запуска в `package.json`:

```json
{
  "eslint": "eslint . --max-warnings=0",
  "eslint:fix": "eslint . --max-warnings=0 --fix"
}
```
