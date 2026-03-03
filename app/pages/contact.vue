<template>

<body class="bg-[#3F2E83]">
 <section class="bg-white">

    <!-- HERO (LEFT ALIGNED LIKE OTHER PAGES) -->
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
        <span class="font-medium">
        Contact Us
        </span>
      </div>
      </div>
    </section>



    <!-- CONTACT SECTION -->
    <div class="px-4 md:px-8 lg:px-28 py-24">

      <!-- Section Title -->
      <div class="text-center">
        <h2 class="text-[30px] md:text-[36px] font-semibold text-[#1a1a1a]">
          Direct Contact Information
        </h2>

        <p class="mt-4 text-[17px] text-[#1a1a1a]/70 max-w-xl mx-auto">
          Reach us directly for inquiries, partnership discussions,
          or consultation requests.
        </p>
      </div>


      <!-- Contact Cards -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">

        <!-- Phone Card -->
        <div class="bg-[#F8F9FB] p-10 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">
          
          <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
            <Phone class="w-8 h-8 text-[#FDC101]" />
          </div>

          <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">
            Phone
          </h3>

          <a
            href="tel:+19724825958"
            class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
          >
            +1 (972) 482-5958
          </a>
        </div>


        <!-- Email Card -->
        <div class="bg-[#F8F9FB] p-10 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">
          
          <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
            <Mail class="w-8 h-8 text-[#FDC101]" />
          </div>

          <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">
            Email
          </h3>

          <a
            href="mailto:info@faciliyallc.com"
            class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
          >
            info@faciliyallc.com
          </a>
        </div>

      </div>



      <!-- CTA BUTTON -->
      <div class="mt-20 text-center">
       <ConsultationForm />
         
      </div>

    </div>

  </section>



  

</body>
</template>

<script setup>
import { Phone, Mail, CalendarCheck } from "lucide-vue-next"

import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
  terms: false,
});

function onSubmit() {
  // hook this to your backend / email service
  console.log("submit", { ...form });
}

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
    "Get in touch with Faciliya regarding facilities management services."
})

useHead({
  link: [{ rel: "canonical", href: URL }]
})
</script>