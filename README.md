# Конфигурация ESLint

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/exer7um/eslint-config?color=%232563EB&label=%D0%A0%D0%B5%D0%BB%D0%B8%D0%B7)

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
