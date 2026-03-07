<template>
  <!-- ✅ NO <body> inside a Nuxt component -->
  <section class="bg-white">
    <!-- ✅ HERO (UNCHANGED) -->
    <section class="bg-[#3F2E83] text-white">
      <div class="py-24 px-4 md:px-8 lg:px-28">
        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase">
          Contact FACILIYA
        </p>

        <h1 class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl">
          Get in Touch With Our Team
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl">
          Connect with FACILIYA to discuss your operational needs and
          request a structured consultation aligned with your asset requirements.
        </p>

        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]">
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">
            Home
          </NuxtLink>
          <span class="mx-2">›</span>
          <span class="font-medium">Contact Us</span>
        </div>
      </div>
    </section>

    <!-- ✅ REST OF PAGE (same purple as hero + corner glows, no gradients, no borders) -->
    <section class="relative overflow-hidden bg-[#3F2E83] text-white">
      <!-- light depth only -->
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- corner glows -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full bg-white/12 blur-3xl"></div>
        <div class="absolute -right-48 -bottom-56 w-[680px] h-[680px] rounded-full bg-[#FDC101]/12 blur-3xl"></div>
        <div class="absolute -right-40 -top-48 w-[520px] h-[520px] rounded-full bg-white/8 blur-3xl"></div>

        <div class="absolute left-0 top-24 h-[2px] w-[320px] bg-[#FDC101]/75"></div>
      </div>

      <div class="relative overflow-x-hidden px-4 md:px-8 lg:px-28 py-24">
        <!-- Section Title -->
        <div class="text-center">
          <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
            Contact
          </p>

          <h2 class="mt-3 text-[30px] md:text-[36px] font-semibold text-white" data-aos="fade-up" data-aos-delay="120">
            Direct Contact Information
          </h2>

          <p class="mt-4 text-[17px] text-white/80 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="220">
            Reach us directly for inquiries, partnership discussions,
            or consultation requests.
          </p>
        </div>

        <!-- Contact Cards (✅ no borders) -->
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="320">
          <!-- Phone Card -->
          <div
            class="bg-white p-10 rounded-2xl text-center
                   shadow-xl shadow-black/20 transition
                   hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"
          >
            <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <Phone class="w-8 h-8 text-[#FDC101]" />
            </div>

            <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">Phone</h3>

            <a
              href="tel:+19724825958"
              class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
            >
              +1 (972) 482-5958
            </a>

            <div class="mt-6 h-[2px] w-12 bg-[#FDC101]/80 mx-auto"></div>
          </div>

          <!-- Email Card -->
          <div
            class="bg-white p-10 rounded-2xl text-center
                   shadow-xl shadow-black/20 transition
                   hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"
          >
            <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <Mail class="w-8 h-8 text-[#FDC101]" />
            </div>

            <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">Email</h3>

            <a
              href="mailto:info@faciliyallc.com"
              class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
            >
              info@faciliyallc.com
            </a>

            <div class="mt-6 h-[2px] w-12 bg-[#FDC101]/80 mx-auto"></div>
          </div>

          <!-- Location Card -->
          <div
            class="bg-white p-10 rounded-2xl text-center
                   shadow-xl shadow-black/20 transition
                   hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"
          >
            <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <MapPin class="w-8 h-8 text-[#FDC101]" />
            </div>

            <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">Location</h3>

            <a
              href="https://maps.google.com/?q=Dallas+Texas"
              target="_blank"
              class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
            >
              Dallas, Texas
            </a>

            <div class="mt-6 h-[2px] w-12 bg-[#FDC101]/80 mx-auto"></div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="420">
          <ConsultationForm />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { Phone, Mail, MapPin } from "lucide-vue-next"

const SITE = "https://faciliyallc.com"
const URL = `${SITE}/contact`

useSeoMeta({
  title: "Contact",
  description:
    "Contact Faciliya to discuss integrated facilities management for commercial, mixed-use, and multifamily environments. Request a proposal or speak with our team.",
  ogTitle: "Contact Faciliya",
  ogDescription:
    "Request a proposal or speak with Faciliya about structured IFM operations and performance oversight.",
  twitterCard: "summary",
  twitterTitle: "Contact Faciliya",
  twitterDescription:
    "Get in touch with Faciliya regarding facilities management services.",
})

useHead({
  link: [{ rel: "canonical", href: URL }],
})
</script>