<template>

<body class="bg-[#3F2E83]">
    <section class="bg-[#3F2E83] text-white" >
    <div class="py-20 px-4 md:px-8 lg:px-28">

      <h1 class="font-semibold
                    text-[38px] sm:text-[48px] lg:text-[64px]">
            Contact Us
      </h1>

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

    <!-- Bottom white divider bar -->
    <div class="h-[10px] bg-white"></div>


     
  </section>
<section class="bg-white">
  <div class="py-20 px-4 md:px-8 lg:px-28" >

    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16">

      <!-- LEFT -->
      <div class="lg:w-[48%]">

        <h2 class="text-[#FDC101] font-semibold
                   text-[32px] sm:text-[38px] lg:text-[48px]">
          Contact us
        </h2>

        <p class="mt-5 text-[#1a1a1a]/70
                  text-[16px] sm:text-[17px] leading-relaxed">
          Have a question or want to discuss your facility’s operational needs?
          Contact Faciliya to learn how our structured approach can bring clarity,
          consistency, and reliable performance to your property.
        </p>

        <form class="mt-10 space-y-6" @submit.prevent="onSubmit">

          <!-- Name -->
          <div>
            <label class="text-[13px] font-medium text-[#1a1a1a]">
              Name
            </label>
            <input
              v-model="form.name"
              type="text"
              class="mt-2 w-full h-[46px] rounded-[8px]
                     border border-[#1a1a1a]/30 px-4 text-[15px]
                     outline-none focus:border-[#1a1a1a]/60"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="text-[13px] font-medium text-[#1a1a1a]">
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              class="mt-2 w-full h-[46px] rounded-[8px]
                     border border-[#1a1a1a]/30 px-4 text-[15px]
                     outline-none focus:border-[#1a1a1a]/60"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="text-[13px] font-medium text-[#1a1a1a]">
              Message
            </label>
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Type your message..."
              class="mt-2 w-full rounded-[8px]
                     border border-[#1a1a1a]/30 px-4 py-3 text-[15px]
                     outline-none resize-none focus:border-[#1a1a1a]/60"
            />
          </div>

          <!-- Terms -->
          <label class="flex items-center gap-2 text-[13px] text-[#1a1a1a]/70">
            <input
              v-model="form.terms"
              type="checkbox"
              class="h-[16px] w-[16px] accent-[#FDC101]"
            />
            I accept the Terms
          </label>

          <!-- Submit -->
          <button
            type="submit"
            class="mt-2 rounded-[10px] bg-[#FDC101]
                   px-8 py-3 text-[15px] font-semibold text-[#1a1a1a]
                   hover:brightness-95 transition"
          >
            Submit
          </button>

        </form>
      </div>

      <!-- RIGHT -->
      <div class="lg:w-[44%] lg:pt-10">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">

          <!-- Email -->
          <div class="flex gap-5">
            




            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#fdc101" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg>

              <p class="font-semibold text-[18px] text-[#1a1a1a]">Email</p>
              
              <a href="mailto:info@faciliyallc.com" class="mt-3 inline-block text-[14px] ">
              info@faciliyallc.com
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex gap-5">
            
            <div>



  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#fdc101" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg>



              <p class="font-semibold text-[18px] text-[#1a1a1a]">Phone</p>
             
              <a href="tel:+12015466248" class="mt-3 text-[14px] text-[#1a1a1a]">
               +1 (201) 546-6248
            </a>
            </div>
          </div>

          <!-- Office -->
          

        </div>

      </div>

    </div>
  </div>
</section>

</body>
</template>

<script setup>

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