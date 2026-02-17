<template >  
<body class="bg-[#3F2E83]">
    

      <section class="bg-[#3F2E83] text-white">
    <div class="py-20 px-4 md:px-8 lg:px-28" data-aos="fade-up">

      <h1 class="font-semibold
                    text-[38px] sm:text-[48px] lg:text-[64px]">
            About Us
      </h1>

      <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]">
        <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">
          Home
        </NuxtLink>
        <span class="mx-2">›</span>
        <span class="font-medium">
          About Us
        </span>
      </div>

    </div>

    <!-- Bottom white divider bar -->
    <div class="h-[10px] bg-white"></div>
  </section>



  <section class="bg-white">
    <div class="py-44 px-4 md:px-8 lg:px-28" data-aos="fade-right">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        <!-- LEFT -->
        <div>
          <h2
            class="text-[#1a1a1a] font-semibold leading-tight
                   text-[28px] sm:text-[34px] lg:text-[40px]"
          >
            Moving Beyond Reactive Maintenance
          </h2>
        </div>

        <!-- RIGHT -->
        <div>
          <p class="text-[#1a1a1a]/70 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
            Faciliya operates facilities with structure, not reaction. We replace uncoordinated vendors and improvised
            decision-making. We deliver that consistent performance is built through disciplined systems, not
            interruption.
          </p>

          <p class="mt-4 text-[#1a1a1a]/70 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
            As a long-term operating partner, we act as the operational hub for your property: aligning scope,
            scheduling, and quality control across all service lines. Our approach reduces risk and gives ownership a
            system, not a scramble.
          </p>
        </div>

      </div>

      <!-- IMAGE -->
      <div class="mt-12">
        <div class="overflow-hidden rounded-[18px]">
          <!-- Replace src with your image -->
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Team reviewing plans"
            class="h-[240px] sm:h-[320px] lg:h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>


  <section class="bg-white">
    <div class="py-44 px-4 md:px-8 lg:px-28" data-aos="fade-left">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <!-- LEFT CONTENT -->
        <div>

          <!-- Paragraph -->
          <p class="text-[#1a1a1a]/70 text-[16px] sm:text-[18px] leading-relaxed max-w-[640px]">
            Faciliya delivers structured facilities management designed to bring clarity,
            consistency, and control to daily operations. Our integrated approach replaces
            fragmented service delivery with disciplined workflows, preventive execution,
            and measurable performance—helping properties operate reliably while protecting
            long-term asset value.
          </p>

          <!-- Stats -->
          <div class="mt-12 grid grid-cols-2 gap-x-16 gap-y-12">

            <div>
              <p class="text-[#FDC101] font-semibold text-[36px] sm:text-[42px]">
                250+
              </p>
              <p class="mt-2 text-[#1a1a1a]/70 text-[15px]">
                Properties Supported
              </p>
            </div>

            <div>
              <p class="text-[#FDC101] font-semibold text-[36px] sm:text-[42px]">
                100%
              </p>
              <p class="mt-2 text-[#1a1a1a]/70 text-[15px]">
                Integrated Operating Model
              </p>
            </div>

            <div>
              <p class="text-[#FDC101] font-semibold text-[36px] sm:text-[42px]">
                95%+
              </p>
              <p class="mt-2 text-[#1a1a1a]/70 text-[15px]">
                Client Retention Rate
              </p>
            </div>

            <div>
              <p class="text-[#FDC101] font-semibold text-[36px] sm:text-[42px]">
                10+ Years
              </p>
              <p class="mt-2 text-[#1a1a1a]/70 text-[15px]">
                Operational Experience
              </p>
            </div>

          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div>
          <div class="overflow-hidden rounded-[24px]">
            <!-- Replace src with your actual image -->
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
              alt="Modern office workspace"
              class="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>

    </div>
  </section>




  <section class="bg-gray-50">
  <div class="mx-auto py-44 px-4 md:px-8 lg:px-28" data-aos="fade-up">
    
    <!-- Heading -->
    <h2
      class="text-center font-semibold text-gray-900
             text-[22px] sm:text-[26px] lg:text-[32px]"
    >
      Certifications &amp; Industry Alignment
    </h2>

    <!-- Logos -->
    <div
      class="mt-8 flex flex-col items-center gap-8
             sm:flex-row sm:flex-wrap sm:justify-center
             lg:flex-row lg:justify-between"
    >
      <!-- BOMA -->
      <img
        src="/logos/boma.png"
        alt="BOMA"
        class="h-14 lg:h-16 w-auto object-contain"
        loading="lazy"
      />

      <!-- USGBC (Bigger) -->
      <img
        src="/logos/usgbc.png"
        alt="USGBC"
        class="h-16 lg:h-20 w-auto object-contain"
        loading="lazy"
      />

      <!-- LEED Green (Bigger) -->
      <img
        src="/logos/leed-ga.png"
        alt="LEED Green Associate"
        class="h-16 lg:h-20 w-auto object-contain"
        loading="lazy"
      />

      <!-- OSHA -->
      <img
        src="/logos/osha.png"
        alt="OSHA"
        class="h-14 lg:h-16 w-auto object-contain"
        loading="lazy"
      />

      <!-- IFMA -->
      <img
        src="/logos/ifma-dfw.png"
        alt="IFMA Dallas/Fort Worth Chapter"
        class="h-14 lg:h-16 w-auto object-contain"
        loading="lazy"
      />
    </div>

  </div>
</section>








<section class="bg-white">
    <div class="mx-auto py-44 px-4 md:px-8 lg:px-28" data-aos="fade-right">
      <div class="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-20">

        <!-- LEFT -->
        <div class="lg:w-[40%]">
          <h2 class="text-[#1a1a1a] font-semibold leading-[1.08]
                     text-[34px] sm:text-[44px] lg:text-[56px]">
            Structured<br />
            Facilities<br />
            Management<br />
            That Delivers<br />
            Results
          </h2>

          <p class="mt-6 text-[#1a1a1a]/70 leading-relaxed
                    text-[16px] sm:text-[18px] lg:text-[19px] max-w-[520px]">
            Faciliya operates facilities through a disciplined, integrated system designed to eliminate guesswork and
            reduce risk. Our approach brings clarity to daily operations, ensures consistent service delivery, and
            provides full visibility into performance.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-5">
            <button
              class="rounded-[10px] border border-[#FDC101]
                     px-6 py-3.5 text-[15px] font-semibold text-[#1a1a1a]
                     hover:bg-[#FDC101]/10 transition"
              type="button"
            >
              Learn More
            </button>

            <button
              class="inline-flex items-center gap-2 text-[15px] font-medium text-[#1a1a1a]
                     hover:opacity-70 transition"
              type="button"
            >
              Contact Us
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="lg:w-[60%]">
          <!-- On mobile: stack. On md+: 2 columns like screenshot -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-20">

            <!-- Feature 1 -->
            <div class="max-w-[360px]">
              <!-- ICON SLOT (you replace) -->
             

  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"  class="mb-5" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#fdc101" d="M6 23q-1.25 0-2.125-.875T3 20t.875-2.125T6 17q.35 0 .65.075t.575.2L8.65 15.5q-.7-.775-.975-1.75T7.55 11.8l-2.025-.675q-.425.625-1.075 1T3 12.5q-1.25 0-2.125-.875T0 9.5t.875-2.125T3 6.5t2.125.875T6 9.5v.2l2.025.7q.5-.9 1.338-1.525t1.887-.8V5.9q-.975-.275-1.612-1.063T9 3q0-1.25.875-2.125T12 0t2.125.875T15 3q0 1.05-.65 1.838T12.75 5.9v2.175q1.05.175 1.888.8t1.337 1.525L18 9.7v-.2q0-1.25.875-2.125T21 6.5t2.125.875T24 9.5t-.875 2.125T21 12.5q-.8 0-1.463-.375t-1.062-1l-2.025.675q.15.975-.125 1.938T15.35 15.5l1.425 1.75q.275-.125.575-.187T18 17q1.25 0 2.125.875T21 20t-.875 2.125T18 23t-2.125-.875T15 20q0-.5.163-.962t.437-.838l-1.425-1.775Q13.15 17 11.988 17T9.8 16.425L8.4 18.2q.275.375.438.838T9 20q0 1.25-.875 2.125T6 23M3 10.5q.425 0 .713-.288T4 9.5t-.288-.712T3 8.5t-.712.288T2 9.5t.288.713T3 10.5M6 21q.425 0 .713-.288T7 20t-.288-.712T6 19t-.712.288T5 20t.288.713T6 21m6-17q.425 0 .713-.288T13 3t-.288-.712T12 2t-.712.288T11 3t.288.713T12 4m0 11q1.05 0 1.775-.725T14.5 12.5t-.725-1.775T12 10t-1.775.725T9.5 12.5t.725 1.775T12 15m6 6q.425 0 .713-.288T19 20t-.288-.712T18 19t-.712.288T17 20t.288.713T18 21m3-10.5q.425 0 .713-.288T22 9.5t-.288-.712T21 8.5t-.712.288T20 9.5t.288.713t.712.287M18 20" /></svg>




              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Single Point of Control
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                A centralized operational lead manages all service lines, communication, and escalation—eliminating
                confusion and fragmented responsibility.
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="max-w-[360px]">
            

  <svg xmlns="http://www.w3.org/2000/svg" class="h-[44px] w-[44px] mb-5" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#fdc101" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4" /></svg>


              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Maintenance Focus
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                Planned inspections and maintenance routines reduce system failures, downtime, and costly reactive
                repairs.
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="max-w-[360px]">
           
              
             

  <svg xmlns="http://www.w3.org/2000/svg" class="h-[44px] w-[44px] mb-5" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#fdc101" d="M2 21v-2h20v2zm1-3v-7h3v7zm5 0V6h3v12zm5 0V9h3v9zm5 0V3h3v15z" /></svg>




              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Reporting &amp; Visibility
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                Clear reporting provides insight into trends, risks, and priorities—supporting informed decisions and
                long-term operational improvement.
              </p>
            </div>

            <!-- Feature 4 -->
            <div class="max-w-[360px]">
              

  <svg xmlns="http://www.w3.org/2000/svg" class="h-[44px] w-[44px] mb-5" viewBox="0 0 24 24"><!-- Icon from Gridicons by Automattic - https://github.com/Automattic/gridicons/blob/trunk/LICENSE.md --><path fill="#fdc101" d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5M6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5m5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2M6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3" /></svg>




              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Vendor Coordination
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                Licensed and insured partners are managed under one coordinated system with defined scopes, performance
                tracking, and accountability.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>


  <section class="bg-white">
    <div class="mx-auto py-44 px-4 md:px-8 lg:px-28" data-aos="fade-right">
      <!-- Heading -->
      <div class="text-center max-w-[720px] mx-auto">
        <h2 class="text-[#1a1a1a] font-semibold text-[26px] sm:text-[32px] lg:text-[38px]">
          Frequently asked questions
        </h2>
        <p class="mt-3 text-[#1a1a1a]/70 text-[13px] sm:text-[14px] leading-relaxed">
          Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
          to action, they may still have questions (doubts) that can be answered.
        </p>
      </div>

      <!-- FAQ list -->
      <div class="mt-10 max-w-[680px] mx-auto space-y-4">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="rounded-[8px] border border-[#1a1a1a]/25 bg-white overflow-hidden"
        >
          <!-- Header -->
          <button
            type="button"
            class="w-full flex items-start justify-between gap-6 px-5 py-4 text-left"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span class="text-[#1a1a1a] font-semibold text-[13px] sm:text-[14px]">
              {{ item.q }}
            </span>

            <!-- X icon (matches screenshot) -->
            <span
              class="shrink-0 text-[#1a1a1a] text-[16px] leading-none mt-[1px]"
              aria-hidden="true"
            >
              ×
            </span>
          </button>

          <!-- Body -->
          <div
            class="px-5 pb-4"
            v-show="openIndex === i"
          >
            <p class="text-[#1a1a1a]/70 text-[11px] sm:text-[12px] leading-relaxed">
              {{ item.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>





   <section class="bg-gray-50">
    <div class="py-44 px-4 md:px-8 lg:px-28 text-center" data-aos="fade-left">

      <h2 class="text-[#1a1a1a] font-semibold
                 text-[34px] sm:text-[44px] lg:text-[56px]">
        Work with us
      </h2>

      <p class="mt-6 text-[#1a1a1a]/70
                text-[16px] sm:text-[18px] lg:text-[19px]
                leading-relaxed max-w-[900px] mx-auto">
        Build your career with Faciliya. We offer opportunities to grow within a structured,
        performance-driven facilities management environment.
      </p>

      <button
        class="mt-10 inline-flex items-center justify-center
               rounded-[12px] bg-[#FDC101]
               px-10 py-4
               text-[16px] font-semibold text-[#1a1a1a]
               hover:brightness-95 active:brightness-90
               transition"
        type="button"
      >
        Join our team
      </button>

    </div>
  </section>
 </body>
</template>

<script setup>

import { ref } from "vue";
const openIndex = ref(0); // first open like screenshot

const faqs = [
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i;
}
const SITE = "https://faciliyallc.com"
const URL = `${SITE}/about`

useSeoMeta({
  title: "About",
  description:
    "Learn how Faciliya delivers structured Integrated Facilities Management built on disciplined workflows, accountable oversight, and measurable performance visibility.",
  ogTitle: "About Faciliya | Structured IFM Operations",
  ogDescription:
    "Faciliya delivers disciplined IFM operations with clear governance, supervision, and measurable performance.",
  twitterCard: "summary",
  twitterTitle: "About Faciliya",
  twitterDescription:
    "Structured IFM operations with clear governance and measurable performance."
})

useHead({
  link: [{ rel: "canonical", href: URL }]
})
</script>