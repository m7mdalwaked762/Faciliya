// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
app: {
    head: {
       link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/ico.ico"
      }
    ],
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "robots", content: "index,follow" },
        { name: "theme-color", content: "#3F2E83" },
        { property: "og:site_name", content: "Faciliya" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    },
  },
})

