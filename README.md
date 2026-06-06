# Конфигурация ESLint

[![Open on npmx.dev](https://npmx.dev/api/registry/badge/version/@exer7um/eslint-config)](https://npmx.dev/package/@exer7um/eslint-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/downloads/@exer7um/eslint-config)](https://npmx.dev/package/@exer7um/eslint-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/license/@exer7um/eslint-config)](https://npmx.dev/package/@exer7um/eslint-config)

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
import createESLintConfig from "@exer7um/eslint-config"

export default createESLintConfig()
```

Добавить в файл `.vscode/settings.json`:

```json
{
  "eslint.validate": [
    "javascript",
    "json",
    "vue",
    "typescript",
    "yaml",
    "github-actions-workflow"
  ]
}
```

Добавить команды для запуска в `package.json`:

```json
{
  "eslint": "eslint --max-warnings=0",
  "eslint:fix": "eslint --max-warnings=0 --fix"
}
```

## Конфигурация

В функцию `createESLintConfig` можно передавать параметры для включения/отключения плагинов, а также для управления правилами.

### Плагины

```ts
import createESLintConfig from "@exer7um/eslint-config"

export default createESLintConfig({ plugins: { vitest: false } })
```

### Правила

```ts
import createESLintConfig from "@exer7um/eslint-config"

export default createESLintConfig({ rules: { "no-console": "off" } })
```

### React

При использовании React необходимо явно включить соответствующий плагин в конфигурации:

```ts
import createESLintConfig from "@exer7um/eslint-config"

export default createESLintConfig({ plugins: { react: true } })
```
