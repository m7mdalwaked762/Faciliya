<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue"

const isScrolled = ref(false)
const menuOpen = ref(false)
const servicesOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const openMenu = () => {
  menuOpen.value = true
}

const closeMenu = () => {
  menuOpen.value = false
  servicesOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === "Escape") closeMenu()
}

watch(menuOpen, (open) => {
  if (process.client) {
    document.body.style.overflow = open ? "hidden" : ""
  }

  if (!open) {
    servicesOpen.value = false
  }
})

onMounted(() => {
  handleScroll()
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("keydown", handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  window.removeEventListener("keydown", handleKeydown)

  if (process.client) {
    document.body.style.overflow = ""
  }
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
})
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
        'fixed top-0 left-0 w-full z-[60] transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-[#3A2D7F] shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      ]"
    >
      <div class="relative h-[72px] flex items-center px-4 md:px-8 lg:px-28">
        <!-- DESKTOP MENU ICON (LEFT) -->
        <button
          type="button"
          @click="openMenu"
          aria-label="Open menu"
          class="hidden lg:inline-flex z-10 items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- MOBILE LOGO (LEFT) -->
        <NuxtLink to="/" class="lg:hidden z-10" @click="closeMenu">
          <img src="/img/logo.png" alt="FACILIYA LLC" class="h-[50px] w-auto" />
        </NuxtLink>

        <!-- DESKTOP CENTER LOGO -->
        <NuxtLink
          to="/"
          class="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10"
          @click="closeMenu"
        >
          <img src="/img/logo.png" alt="FACILIYA LLC" class="h-[64px] w-auto" />
        </NuxtLink>

        <!-- MOBILE MENU ICON (RIGHT) -->
        <div class="ml-auto lg:hidden z-10">
          <button
            type="button"
            @click="openMenu"
            aria-label="Open menu"
            class="inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- DESKTOP RIGHT ACTIONS -->
        <div class="hidden lg:flex ml-auto items-center gap-4 z-10">
          <a
            href="https://heyzine.com/flip-book/b2d8f53efd.html"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#FCD101] transition-transform duration-300 hover:scale-105
                   w-[140px] h-[40px] text-[#1a1a1a] font-medium
                   flex justify-center items-center rounded-[10px]
                   text-[16px]"
          >
            Digital Brochure
          </a>

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
    </header>

    <!-- SIDEBAR / OVERLAY -->
    <div
      :class="[
        'fixed inset-0 z-[80] transition-all duration-300',
        menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      ]"
    >
      <!-- OVERLAY -->
      <button
        type="button"
        aria-label="Close menu overlay"
        @click="closeMenu"
        :class="[
          'absolute inset-0 bg-black/45 backdrop-blur-[3px] transition-opacity duration-300',
          menuOpen ? 'opacity-100' : 'opacity-0'
        ]"
      ></button>

      <!-- SIDEBAR -->
      <aside
        :class="[
          'absolute top-0 h-full w-[88vw] max-w-[360px] bg-[#2F2468] text-white shadow-2xl transition-transform duration-300 ease-in-out',
          'right-0 lg:right-auto lg:left-0',
          menuOpen ? 'translate-x-0' : 'translate-x-full lg:-translate-x-full'
        ]"
      >
        <div class="flex h-full flex-col px-5 md:px-6 py-5">
          <!-- TOP -->
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <img src="/img/logo.png" alt="FACILIYA LLC" class="h-[48px] w-auto" />

            <button
              type="button"
              @click="closeMenu"
              aria-label="Close menu"
              class="inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- NAV LINKS -->
          <nav class="pt-6">
            <ul class="flex flex-col gap-2 text-[16px]">
              <li>
                <NuxtLink
                  to="/"
                  class="block rounded-[12px] px-3 py-3 hover:bg-white/10 transition"
                  @click="closeMenu"
                >
                  Home
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/about"
                  class="block rounded-[12px] px-3 py-3 hover:bg-white/10 transition"
                  @click="closeMenu"
                >
                  About
                </NuxtLink>
              </li>

              <li>
                <button
                  type="button"
                  @click="servicesOpen = !servicesOpen"
                  class="w-full rounded-[12px] px-3 py-3 hover:bg-white/10 transition flex items-center justify-between text-left"
                >
                  <span>Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 transition-transform duration-300"
                    :class="servicesOpen ? 'rotate-180' : ''"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  v-show="servicesOpen"
                  class="mt-2 ml-3 flex flex-col gap-2 border-l border-white/15 pl-4 text-[15px]"
                >
                  <NuxtLink
                    to="/Corporate_Asset_Governance"
                    class="py-2 hover:text-[#FCD101] transition"
                    @click="closeMenu"
                  >
                    Corporate Services
                  </NuxtLink>

                  <NuxtLink
                    to="/Private_Services"
                    class="py-2 hover:text-[#FCD101] transition"
                    @click="closeMenu"
                  >
                    Private Services
                  </NuxtLink>

                  <NuxtLink
                    to="/Event_Services"
                    class="py-2 hover:text-[#FCD101] transition"
                    @click="closeMenu"
                  >
                    Event Operations
                  </NuxtLink>
                </div>
              </li>

              <li>
                <NuxtLink
                  to="/careers"
                  class="block rounded-[12px] px-3 py-3 hover:bg-white/10 transition"
                  @click="closeMenu"
                >
                  Careers & Partnerships
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- ACTION BUTTONS -->
          <div class="mt-8 flex flex-col gap-3">
            <a
              href="https://heyzine.com/flip-book/b2d8f53efd.html"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-[46px] w-full items-center justify-center rounded-[12px] bg-[#FCD101] text-[15px] font-medium text-[#1a1a1a] transition hover:scale-[1.02]"
              @click="closeMenu"
            >
              Digital Brochure
            </a>

            <NuxtLink
              to="/contact"
              class="flex h-[46px] w-full items-center justify-center rounded-[12px] bg-white text-[15px] font-medium text-[#1a1a1a] transition hover:scale-[1.02]"
              @click="closeMenu"
            >
              Contact
            </NuxtLink>
          </div>

          <!-- SOCIAL -->
          <div class="mt-auto pt-8">
            <p class="mb-4 text-[14px] font-medium text-white/80">Follow Us</p>

            <div class="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/faciliya-llc-7883783b6/"
                aria-label="LinkedIn"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-90 transition hover:bg-white/20 hover:opacity-100"
              >
                <svg class="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.3V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.8h-4V8z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/faciliyallc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-90 transition hover:bg-white/20 hover:opacity-100"
              >
                <svg class="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.76 3.76 0 004 7.75v8.5A3.76 3.76 0 007.75 20h8.5A3.76 3.76 0 0020 16.25v-8.5A3.76 3.76 0 0016.25 4h-8.5zm9.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/people/Faciliyallc/61586871520828/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-90 transition hover:bg-white/20 hover:opacity-100"
              >
                <svg class="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9v-3h2.6V9.4c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H17l-.4 3h-2.6v7A10 10 0 0022 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- PAGE CONTENT -->
    <main class="relative z-0 pt-[72px] font-[Roboto]">
      <slot />
    </main>
  </div>

  <!-- FOOTER -->
  <footer class="bg-[#3F2E83] text-white">
    <div class="px-4 md:px-8 lg:px-28 py-14">
      <!-- GRID -->
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- COLUMN 1 — CONTACT -->
        <div class="space-y-6">
          <h3 class="text-[15px] font-semibold tracking-wide">
            Contact
          </h3>

          <div class="space-y-2 text-[14px] leading-relaxed">
            <p>Dallas, Texas</p>

            <p>
              <a href="mailto:info@faciliyallc.com" class="hover:underline">
                info@faciliyallc.com
              </a>
            </p>

            <p>
              <a href="tel:+19724825958" class="hover:underline">
                +1 (972) 482-5958
              </a>
            </p>
          </div>

          <div class="pt-2">
            <p class="text-[14px] font-medium mb-3">
              Follow Us
            </p>

            <div class="flex items-center gap-4">
              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/faciliya-llc-7883783b6/" class="opacity-80 hover:opacity-100 transition" aria-label="LinkedIn">
                <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.3V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.8h-4V8z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://www.instagram.com/faciliyallc"
                target="_blank"
                rel="noopener noreferrer"
                class="opacity-80 hover:opacity-100 transition"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.76 3.76 0 004 7.75v8.5A3.76 3.76 0 007.75 20h8.5A3.76 3.76 0 0020 16.25v-8.5A3.76 3.76 0 0016.25 4h-8.5zm9.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </a>

              <!-- Facebook -->
              <a
                href="https://www.facebook.com/people/Faciliyallc/61586871520828/"
                target="_blank"
                rel="noopener noreferrer"
                class="opacity-80 hover:opacity-100 transition"
                aria-label="Facebook"
              >
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
              <NuxtLink to="/" class="hover:underline">
                Home
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/about" class="hover:underline">
                About
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/Corporate_Asset_Governance" class="hover:underline">
                Corporate Governance
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/Private_Services" class="hover:underline">
                Private Services
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/Event_Services" class="hover:underline">
                Events
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/careers" class="hover:underline">
                Careers & Partnerships
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- COLUMN 3 — MEMBERSHIP -->
        <div class="space-y-6">
          <h3 class="text-[15px] font-semibold">
            Member of
          </h3>

          <div class="flex flex-wrap items-center gap-6">
            <img
              src="/logos/boma.png"
              alt="BOMA"
              class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />

            <img
              src="/logos/ifma-dfw.png"
              alt="IFMA DFW"
              class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />

            <img
              src="/logos/usgbc.png"
              alt="USGBC"
              class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />

            <img
              src="/logos/leed-ga.png"
              alt="LEED GA"
              class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />

            <img
              src="/logos/osha.png"
              alt="OSHA"
              class="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="mt-14 pt-8 border-t border-white/20">
        <div class="flex flex-col items-center justify-center text-center gap-3">
          <img src="/img/logo.png" alt="FACILIYA LLC" class="h-14 w-auto" />

          <p class="text-[13px] opacity-90">
            Integrated Facilities Management & Asset Governance
          </p>

          <p class="text-[13px] opacity-80">
            © 2026 FACILIYA LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>