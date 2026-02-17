<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue"

const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobile = () => {
  mobileOpen.value = false
}

// lock body scroll when menu is open (mobile)
watch(mobileOpen, (open) => {
  if (process.client) document.body.style.overflow = open ? "hidden" : ""
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  if (process.client) document.body.style.overflow = ""
})


import AOS from "aos"
import "aos/dist/aos.css"

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true, // animate only once
    easing: "ease-out-cubic",
  })
})


useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FACILIYA",
          url: "https://faciliyallc.com",
          email: "info@faciliyallc.com",
          description:
            "Integrated Facilities Management (IFM) partner delivering structured operations, disciplined oversight, and sustainability-minded performance practices for commercial, mixed-use, and multifamily environments.",
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "FACILIYA",
          url: "https://faciliyallc.com", 
        },
      ]),
    },
  ],
});
</script>

<template>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </Head>

  <div class="relative min-h-screen overflow-x-hidden bg-[#3F2E83]">

    <!-- NAVBAR -->
    <header
      :class="[
        'fixed top-0 left-0 w-full z-[60] transition-all duration-300',
        isScrolled ? 'bg-[#3A2D7F] shadow-md' : 'bg-transparent'
      ]"
    >
      <div class="h-[72px] flex items-center px-4 md:px-8 lg:px-28 relative">
        <!-- MOBILE: Logo Left -->
        <NuxtLink to="/" class="lg:hidden" @click="closeMobile">
          <img src="/img/logo.png" alt="Logo" class="h-[50px]" />
        </NuxtLink>

        <!-- DESKTOP: Left Navigation -->
        <ul class="hidden lg:flex flex-1 justify-start items-center gap-5 text-[16px] text-white">
          <li>
            <NuxtLink to="/" class="relative group">
              Home
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="relative group">
              About
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" class="relative group">
              Services
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/careers" class="relative group">
              Careers
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- DESKTOP: Center Logo -->
        <NuxtLink
          to="/"
          class="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10"
          @click="closeMobile"
        >
          <img src="/img/logo.png" alt="Logo" class="h-[64px]" />
        </NuxtLink>

        <!-- MOBILE: Hamburger Right -->
        <div class="ml-auto lg:hidden">
          <button
            @click="mobileOpen = !mobileOpen"
            class="inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition"
            :aria-expanded="mobileOpen ? 'true' : 'false'"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!mobileOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- DESKTOP: Contact Button Right -->
        <div class="hidden lg:flex flex-1 justify-end items-center">
          <NuxtLink
            to="/contact"
            class="bg-white transition-transform duration-300 hover:scale-105
                   w-[110px] h-[40px] text-[#1a1a1a]
                   flex justify-center items-center rounded-[10px]
                   text-[16px]"
          >
            Contact
          </NuxtLink>
        </div>
      </div>

      <!-- MOBILE MENU DROPDOWN -->
      <div
        v-show="mobileOpen"
        class="lg:hidden bg-[#3A2D7F] border-t border-white/15"
      >
        <nav class="px-4 md:px-8 py-4">
          <ul class="flex flex-col gap-3 text-white text-[16px]">
            <li>
              <NuxtLink to="/" class="block py-2 px-2 rounded-lg hover:bg-white/10" @click="closeMobile">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="block py-2 px-2 rounded-lg hover:bg-white/10" @click="closeMobile">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="block py-2 px-2 rounded-lg hover:bg-white/10" @click="closeMobile">
                Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers" class="block py-2 px-2 rounded-lg hover:bg-white/10" @click="closeMobile">
                Careers
              </NuxtLink>
            </li>

            <!-- Mobile Contact -->
            <li class="pt-2">
              <NuxtLink
                to="/contact"
                class="block w-full text-center bg-white text-[#1a1a1a] font-medium
                       py-2 rounded-[10px] hover:bg-white/90 transition"
                @click="closeMobile"
              >
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- PAGE CONTENT -->
    <main class="relative z-0 pt-[72px] font-[Roboto]">
      <slot />
    </main>

    <footer class="bg-[#3F2E83] text-white">
    <div class="py-14 px-4 md:px-8 lg:px-28">

      <!-- Top Row -->
      <div class="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-5 ">

        <!-- Logo -->
        <div class="text-[22px] font-semibold tracking-wide">
          <img src="/img/logo.png" alt="Logo" class="h-[44px]" />
        </div>

        <!-- Links -->
        <nav class="flex  justify-center items-center gap-4 text-[14px]">
          <NuxtLink to="/" class="hover:opacity-80 transition">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:opacity-80 transition">About</NuxtLink>
          <NuxtLink to="/services" class="hover:opacity-80 transition">Services</NuxtLink>
          <NuxtLink to="/careers" class="hover:opacity-80 transition">Careers</NuxtLink>
          <NuxtLink to="/contact" class="hover:opacity-80 transition">Contact</NuxtLink>
        </nav>

        <!-- Social Icons Placeholder -->
        <div class="flex items-center gap-5">
          
            

  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="white" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clipRule="evenodd" /></svg>



          
          
          

  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="white" /></svg>



        </div>

      </div>

      <!-- Divider -->
      <div class="mt-10 h-px w-full bg-white/20"></div>

      <!-- Bottom Row -->
      <div class="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-[12px] text-white/80">

        <p>
          © 2026 Faciliya. All rights reserved.
        </p>

        

      </div>

    </div>
  </footer>
  </div>
</template>
