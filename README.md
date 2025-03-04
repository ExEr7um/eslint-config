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

Для использования нужно создать файл `eslint.config.mjs` или `eslint.config.ts` с содержимым:

```ts
export { default } from "@exer7um/eslint-config"
```

Добавить в файл `.vscode/settings.json`:

```json
{ "eslint.validate": ["javascript", "json", "vue", "typescript", "yaml"] }
```

Добавить команды для запуска в `package.json`:

```json
{
  "eslint": "eslint --max-warnings=0",
  "eslint:fix": "eslint --max-warnings=0 --fix"
}
```
