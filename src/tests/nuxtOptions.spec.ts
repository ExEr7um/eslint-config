import { describe, expect, test } from "vitest"

import createNuxtOptions from "../nuxtOptions"

describe("Функция createNuxtOptions", () => {
  test("Возвращает параметры по умолчанию", () => {
    const nuxtOptions = createNuxtOptions()

    expect(nuxtOptions).toMatchInlineSnapshot(`
      {
        "features": {
          "tooling": {
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
            "regexp": false,
            "unicorn": false,
          },
        },
      }
    `)
  })
})
