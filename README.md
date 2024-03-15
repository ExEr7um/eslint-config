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

Для использования нужно создать файл `.eslintrc` с содержимым:

```json
{
  "extends": "@exer7um"
}
```

Добавить в файл `.vscode/settings.json`:

```json
{
  "eslint.validate": ["javascript", "json", "vue", "typescript"]
}
```

## Проект с i18n

Для использования плагина с `i18n` необходимо добавить в файл `.eslintrc`:

```json
{
  "rules": {
    "@intlify/vue-i18n/no-raw-text": "error",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        "enableFix": true
      }
    ]
  }
}
```
