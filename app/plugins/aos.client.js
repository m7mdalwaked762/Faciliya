import AOS from "aos"
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (prefersReduced) return

  AOS.init({
    duration: 750,
    easing: "ease-out-cubic",
    once: true,
    offset: 90,
    delay: 0,
  })

  // Important for Nuxt route changes
  nuxtApp.hook("page:finish", () => {
    AOS.refreshHard()
  })
})