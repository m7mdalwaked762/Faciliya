<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue"

const isScrolled = ref(false)
const mobileOpen = ref(false)
const mobileServicesOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobile = () => {
  mobileOpen.value = false
  mobileServicesOpen.value = false
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
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet" />
  </Head>

  <div class="relative min-h-screen overflow-x-hidden bg-[#3F2E83]">

    <!-- NAVBAR -->
    <header :class="[
      'fixed top-0 left-0 w-full z-[60] transition-all duration-300 ease-in-out',
      isScrolled
        ? 'bg-[#3A2D7F] shadow-lg backdrop-blur-md'
        : 'bg-transparent'
    ]">
      <div class="h-[72px] flex items-center px-4 md:px-8 lg:px-28 relative">

        <!-- MOBILE: Logo -->
        <NuxtLink to="/" class="lg:hidden" @click="closeMobile">
          <img src="/img/logo.png" alt="Logo" class="h-[50px]" />
        </NuxtLink>

        <!-- DESKTOP NAV -->
        <ul class="hidden lg:flex flex-1 justify-start items-center gap-5 text-[16px] text-white">

          <li>
            <NuxtLink to="/" class="relative group">
              Home
              <span
                class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" class="relative group">
              About
              <span
                class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>

          <!-- SERVICES DROPDOWN (DESKTOP HOVER) -->
          <li class="relative group hover:cursor-pointer ">
            <NuxtLink to="" class="relative flex items-center gap-1">
              Solutions
              <span
                class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full "></span>
            </NuxtLink>

            <!-- Dropdown -->
            <div
              class="absolute left-0 top-full mt-3 w-[220px] bg-white text-[#1a1a1a] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:cursor-pointer transition-all duration-300">

              <NuxtLink to="/Corporate_Asset_Governance" class="block px-5 py-3 hover:bg-gray-100 rounded-t-xl">
                Corporate Services
              </NuxtLink>

              <NuxtLink to="/Private_Services" class="block px-5 py-3 hover:bg-gray-100">
                Private Services
              </NuxtLink>

              <NuxtLink to="/Event_Services" class="block px-5 py-3 hover:bg-gray-100 rounded-b-xl">
                Event Operations
              </NuxtLink>

            </div>
          </li>

          <li>
            <NuxtLink to="/careers" class="relative group">
              Careers & Partnerships
              <span
                class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- DESKTOP LOGO CENTER -->
        <NuxtLink to="/" class="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10">
          <img src="/img/logo.png" alt="Logo" class="h-[64px]" />
        </NuxtLink>

        <!-- MOBILE MENU BUTTON -->
        <div class="ml-auto lg:hidden">
          <button @click="mobileOpen = !mobileOpen"
            class="inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition">
            <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- DESKTOP CONTACT -->
        <div class="hidden lg:flex flex-1 justify-end gap-4 items-center">

           <a href="/Faciliya.pdf" class="bg-[#fCD101] transition-transform duration-300 hover:scale-105
                   w-[130px] h-[40px] text-[#1a1a1a] font-medium cursor-pointer
                   flex justify-center items-center rounded-[10px]
                   text-[16px]"

                   download="" target="_blank"
                   >
                  Download Profile
          </a>
          <NuxtLink to="/contact" class="bg-white transition-transform duration-300 hover:scale-105
                   w-[110px] h-[40px] text-[#1a1a1a]
                   flex justify-center items-center rounded-[10px]
                   text-[16px]">
            Contact
          </NuxtLink>
          
        </div>
      </div>

      <!-- MOBILE MENU -->
      <div v-show="mobileOpen" class="lg:hidden bg-[#3A2D7F] border-t border-white/15">
        <nav class="px-4 md:px-8 py-4">
          <ul class="flex flex-col gap-5 text-white text-[16px]">

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

            <!-- MOBILE SERVICES CLICK DROPDOWN -->
            <li>
              <button @click="mobileServicesOpen = !mobileServicesOpen"
                class="w-full text-left py-2 px-2 rounded-lg hover:bg-white/10 flex justify-between items-center">
               Solutions
                <span>{{ mobileServicesOpen ? '-' : '+' }}</span>
              </button>

              <div v-show="mobileServicesOpen" class="pl-4 mt-2 flex flex-col gap-2 text-[15px]">

                <NuxtLink to="/Corporate_Asset_Governance" @click="closeMobile" class="py-1 hover:underline">
                  Corporate Services
                </NuxtLink>

                <NuxtLink to="/Private_Services" @click="closeMobile" class="py-1 hover:underline">
                  Private Services
                </NuxtLink>

                <NuxtLink to="/Event_Services" @click="closeMobile" class="py-1 hover:underline">
                  Event Operations
                </NuxtLink>

              </div>
            </li>

            <li>
              <NuxtLink to="/careers" class="block py-2 px-2 rounded-lg hover:bg-white/10" @click="closeMobile">
                Careers & Partnerships
              </NuxtLink>
            </li>

            <ul class="pt-2 gap-2 flex flex-col">
               <li class="pt-2">
              <a href="/Faciliya.pdf" class="block w-full text-center bg-white text-[#1a1a1a] font-medium
                       py-2 rounded-[10px] hover:bg-white/90 transition" @click="closeMobile" download="" target="_blank">
                Download Profile
              </a>
            </li>
              <NuxtLink to="/contact" class="block w-full text-center bg-white text-[#1a1a1a] font-medium
                       py-2 rounded-[10px] hover:bg-white/90 transition" @click="closeMobile">
                Contact
              </NuxtLink>
            </ul>
           
          </ul>
        </nav>
      </div>
    </header>

    <!-- PAGE CONTENT -->
    <main class="relative z-0 pt-[72px] font-[Roboto]">
      <slot />
    </main>



    <!-- FOOTER (UNCHANGED EXACTLY AS YOU REQUESTED) -->
    <!-- Your entire footer remains exactly as you provided -->
  </div>
  <footer class="bg-[#3F2E83] text-white">
  <div class="px-4 md:px-8 lg:px-28 py-14">

    <!-- GRID -->
    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

      <!-- COLUMN 1 — COMPANY -->
      <div class="space-y-6">

        <!-- LOGO -->
        <img src="/img/logo.png" alt="FACILIYA LLC" class="h-16 w-auto" />

        <!-- INFO -->
        <div class="space-y-2 text-[14px] leading-relaxed">
          <p class="font-medium">
            Integrated Facilities Management & Asset Governance
          </p>

          <p>Dallas, Texas</p>

          <p>
            <a href="mailto:info@faciliyallc.com" class="hover:underline">
              info@faciliyallc.com
            </a>
          </p>

          <p>
            <a href="mailto:ghaleb@faciliyallc.com" class="hover:underline">
              ghaleb@faciliyallc.com
            </a>
          </p>

          <p>
            <a href="tel:+19724825958" class="hover:underline">
              +1 (972) 482-5958
            </a>
          </p>
        </div>

        <!-- SOCIAL -->
        <div class="pt-2">
          <p class="text-[14px] font-medium mb-3">
            Follow Us
          </p>

          <div class="flex items-center gap-4">

            <!-- LinkedIn -->
            <a href="#" class="opacity-80 hover:opacity-100 transition">
              <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.3V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.8h-4V8z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/faciliyallc" class="opacity-80 hover:opacity-100 transition">
              <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.76 3.76 0 004 7.75v8.5A3.76 3.76 0 007.75 20h8.5A3.76 3.76 0 0020 16.25v-8.5A3.76 3.76 0 0016.25 4h-8.5zm9.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
              </svg>
            </a>

            
          

            <!-- Facebook -->
            <a href="https://www.facebook.com/people/Faciliyallc/61586871520828/" class="opacity-80 hover:opacity-100 transition">
              <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9v-3h2.6V9.4c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H17l-.4 3h-2.6v7A10 10 0 0022 12z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>


      <!-- COLUMN 2 — QUICK LINKS -->
      <div class="space-y-6">
        <h3 class="text-[15px] font-semibold tracking-wide">
          Quick Links
        </h3>

        <ul class="space-y-3 text-[14px]">
          <li>
            <a href="/Corporate_Asset_Governance" class="hover:underline">
              Corporate Governance
            </a>
          </li>

          <li>
            <a href="/Private_Services" class="hover:underline">
              Private Services
            </a>
          </li>

          <li>
            <a href="/Event_Services" class="hover:underline">
              Events
            </a>
          </li>

          <li>
            <a href="/careers" class="hover:underline">
              Careers
            </a>
          </li>
        </ul>
      </div>


      <!-- COLUMN 3 — MEMBERSHIP -->
      <div class="space-y-6">
        <h3 class="text-[15px] font-semibold">
          Member of
        </h3>

        <div class="flex flex-wrap items-center gap-6">
          <img src="/logos/boma.png" alt="BOMA"
            class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition" />

          <img src="/logos/ifma-dfw.png" alt="IFMA DFW"
            class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition" />

          <img src="/logos/usgbc.png" alt="USGBC"
            class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition" />

          <img src="/logos/leed-ga.png" alt="LEED GA"
            class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition" />

          <img src="/logos/osha.png" alt="OSHA"
            class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition" />
        </div>
      </div>

    </div>


    <!-- BOTTOM BAR -->
    <div class="mt-14 pt-6 border-t border-white/20 text-[13px] text-center opacity-80">
      © {{ new Date().getFullYear() }} FACILIYA LLC. All rights reserved.
    </div>

  </div>
</footer>

</template>
