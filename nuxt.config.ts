// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      supabaseUrl: "https://ytjvxiqpoyhggucqvawk.supabase.co",
      supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0anZ4aXFwb3loZ2d1Y3F2YXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NjIyMjcsImV4cCI6MjA4NzIzODIyN30.Hm0IQHILxXIXCgmaEUdzfffkjkCI6_fpJL55x2FFETQ"
    }
  },
app: {
    head: {
       link: [
       {
        rel: "icon",
        type: "image/png",
        href: "/Group 38(2).png",
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

