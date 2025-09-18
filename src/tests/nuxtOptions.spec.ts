import { describe, expect, test } from "vitest"

import createNuxtOptions from "../nuxtOptions"

describe("Функция createNuxtOptions", () => {
  test("Возвращает параметры по умолчанию", () => {
    const nuxtOptions = createNuxtOptions()

    expect(nuxtOptions).toMatchInlineSnapshot(`
      {
        "features": {
          "tooling": {
            "jsdoc": false,
            "unicorn": false,
          },
        },
      }
    `)
  })

  test("Параметры по умолчанию можно переопределить", () => {
    const nuxtOptions = createNuxtOptions({
      features: { tooling: { unicorn: true } },
    })

    expect(nuxtOptions).toMatchInlineSnapshot(`
      {
        "features": {
          "tooling": {
            "jsdoc": false,
            "unicorn": true,
          },
        },
      }
    `)
  })

  test("Новые параметры добавляются", () => {
    const nuxtOptions = createNuxtOptions({
      features: { tooling: { regexp: false } },
    })

    expect(nuxtOptions).toMatchInlineSnapshot(`
      {
        "features": {
          "tooling": {
            "jsdoc": false,
            "regexp": false,
            "unicorn": false,
          },
        },
      }
    `)
  })
})
