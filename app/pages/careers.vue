<template>

  <div class="bg-[#3F2E83] h-full w-full">
    

 <section class="bg-[#3F2E83] text-white">
    <div class="py-20 px-4 md:px-8 lg:px-28" >

      <h1 class="font-semibold
                    text-[38px] sm:text-[48px] lg:text-[64px]">
            Careers
      </h1>

      <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]">
        <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">
          Home
        </NuxtLink>
        <span class="mx-2">›</span>
        <span class="font-medium">
        Careers
        </span>
      </div>

    </div>

    <!-- Bottom white divider bar -->
    <div class="h-[10px] bg-white"></div>


     
  </section>
<section class="bg-white">
    <div class="py-20 px-4 md:px-8 lg:px-28" >
      <!-- Header -->
      <div class="max-w-[820px]">
        <h2 class="text-[#1a1a1a] font-semibold text-[28px] sm:text-[34px] lg:text-[40px]">
          Job Openings
        </h2>
        <p class="mt-3 text-[#1a1a1a]/70 text-[14px] sm:text-[15px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>

      <!-- Departments -->
      <div class="mt-10 space-y-6">
        <div
          v-for="(dept, dIndex) in departments"
          :key="dIndex"
          class="border-y border-[#1a1a1a]/15"
        >
          <!-- Department header -->
          <button
            class="w-full flex items-center justify-between gap-6 py-5"
            type="button"
            @click="toggleDept(dIndex)"
            :aria-expanded="openDept === dIndex"
          >
            <span class="text-[#1a1a1a] font-semibold text-[15px] sm:text-[16px]">
              {{ dept.name }}
            </span>

            <!-- Chevron -->
            <span
              class="text-[#1a1a1a]/70 text-[18px] leading-none transition-transform duration-200"
              :class="openDept === dIndex ? 'rotate-180' : ''"
              aria-hidden="true"
            >
              ˅
            </span>
          </button>

          <!-- Jobs list -->
          <div v-show="openDept === dIndex" class="pb-6">
            <div
              v-for="(job, jIndex) in dept.jobs"
              :key="jIndex"
              class="py-6 border-t border-[#1a1a1a]/12"
            >
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <!-- Left text -->
                <div class="md:pr-10">
                  <p class="text-[#1a1a1a] font-semibold text-[14px] sm:text-[15px]">
                    {{ job.title }}
                  </p>
                  <p class="mt-3 text-[#1a1a1a]/70 text-[13px] sm:text-[14px] leading-relaxed max-w-[820px]">
                    {{ job.desc }}
                  </p>
                </div>

                <!-- Apply button -->
                <div class="md:pt-1">
                  <a
                    :href="job.href"
                    class="inline-flex items-center justify-center
                           h-[34px] px-4 rounded-[8px]
                           border border-[#1a1a1a]/20 bg-white
                           text-[#1a1a1a] text-[12px] font-medium
                           hover:bg-[#f7f7f7] transition"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom divider (like screenshot extra spacing) -->
        <div class="border-b border-[#1a1a1a]/15"></div>
      </div>
    </div>
  </section>
  </div>


</template>
<script setup>
const openDept = ref(0); // first one open like screenshot

const departments = [
  {
    name: "Job Department",
    jobs: [
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
    ],
  },
  {
    name: "Job Department",
    jobs: [
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
    ],
  },
  {
    name: "Job Department",
    jobs: [
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
      {
        title: "Job Title",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        href: "#",
      },
    ],
  },
];

function toggleDept(i) {
  openDept.value = openDept.value === i ? -1 : i;
}



const SITE = "https://faciliyallc.com"
const URL = `${SITE}/careers`

useSeoMeta({
  title: "Careers",
  description:
    "Work with Faciliya in a structured, performance-driven facilities management environment focused on accountability, operational excellence, and long-term growth.",
  ogTitle: "Careers at Faciliya",
  ogDescription:
    "Join a performance-driven facilities management organization built on accountability and operational excellence.",
  twitterCard: "summary",
  twitterTitle: "Careers at Faciliya",
  twitterDescription:
    "Explore opportunities in structured facilities management operations."
})

useHead({
  link: [{ rel: "canonical", href: URL }]
})


</script>