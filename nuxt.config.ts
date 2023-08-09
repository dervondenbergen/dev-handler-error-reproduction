import { defineEventHandler, getRequestPath, getRouterParams } from "h3"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    devHandlers: [
      {
        route: "/devRoute1/defined",
        handler: defineEventHandler(event => {
          const path = getRequestPath(event)
          const params = getRouterParams(event)
          return {
              file: "nuxt.config.ts → nitro → devHandlers → first",
              path,
              params,
          }
        })
      },
      {
        route: "/devRoute2/[singlepart]",
        handler: defineEventHandler(event => {
          const path = getRequestPath(event)
          const params = getRouterParams(event)
          return {
            file: "nuxt.config.ts → nitro → devHandlers → second",
              path,
              params,
          }
        })
      },
      {
        route: "/devRoute3/:singlepart", // Vue Router Dynamic Route style
        handler: defineEventHandler(event => {
          const path = getRequestPath(event)
          const params = getRouterParams(event)
          return {
            file: "nuxt.config.ts → nitro → devHandlers → third",
              path,
              params,
          }
        })
      },
      {
        route: "/devRoute4/[...parts]",
        handler: defineEventHandler(event => {
          const path = getRequestPath(event)
          const params = getRouterParams(event)
          return {
            file: "nuxt.config.ts → nitro → devHandlers → forth",
              path,
              params,
          }
        })
      },
      {
        route: "/devRoute5/:parts(.*)*", // Vue Router Catch All style
        handler: defineEventHandler(event => {
          const path = getRequestPath(event)
          const params = getRouterParams(event)
          return {
            file: "nuxt.config.ts → nitro → devHandlers → third",
              path,
              params,
          }
        })
      },
    ]
  }
})
