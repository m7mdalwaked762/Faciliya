<script setup>
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Briefcase,
  FileCheck2,
  Award,
  Building2,
  Landmark,
  GraduationCap,
  Factory,
  Crown,
} from "lucide-vue-next"
import { ref } from "vue"

const openIndex = ref(-1)

const faqs = [
  {
    q: "What does FACILIYA provide?",
    a: "FACILIYA delivers integrated operational services structured under a governance-driven framework. Our model combines facilities oversight, performance control, sustainability alignment, private staffing, and event operations within the Dallas–Fort Worth Metroplex.",
  },
  {
    q: "What is the difference between your services and your governance packages?",
    a: "Services define the operational scope of engagement. Governance packages define the depth of oversight, performance monitoring, reporting intelligence, and control systems applied to that operational scope.",
  },
  {
    q: "What is Integrated Facilities Management (iFM) at FACILIYA?",
    a: "FACILIYA’s iFM model centralizes maintenance oversight, hygiene systems, vendor coordination, and sustainability tracking under structured operational governance. It replaces fragmented service models with controlled, accountable execution.",
  },
  {
    q: "How is Artificial Intelligence used within your operations?",
    a: "AI-assisted analytics are applied within advanced governance tiers to support anomaly detection, performance trend analysis, and predictive maintenance insights—enhancing operational foresight and data-driven oversight.",
  },
  {
    q: "How do green building principles fit into your model?",
    a: "Sustainability is embedded within our governance framework through LEED-informed practices, structured energy monitoring, water efficiency tracking, and disciplined environmental oversight integrated into daily operations.",
  },
  {
    q: "How do you ensure service consistency?",
    a: "Service consistency is maintained through structured internal capability calibration and continuous training programs that reinforce operational discipline, execution standards, and measurable performance expectations across all service levels.",
  },
  {
    q: "Do you provide services for individuals?",
    a: "Yes. FACILIYA offers structured monthly residential staffing solutions within the DFW area, including cleaning personnel, private drivers, and personal companions under defined service agreements.",
  },
  {
    q: "What role does FACILIYA play in events?",
    a: "FACILIYA provides disciplined staffing and operational coordination for private and corporate events. Our approach prioritizes structured execution, professional presence, and alignment with facility governance standards.",
  },
]

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

const SITE = "https://faciliyallc.com"
const URL = `${SITE}/about`

useSeoMeta({
  title: "About | FACILIYA",
  description:
    "Learn how Faciliya delivers structured Integrated Facilities Management built on disciplined workflows, accountable oversight, and measurable performance visibility.",
  ogTitle: "About Faciliya | Structured IFM Operations",
  ogDescription:
    "Faciliya delivers disciplined IFM operations with clear governance, supervision, and measurable performance.",
  twitterCard: "summary",
  twitterTitle: "About Faciliya",
  twitterDescription:
    "Structured IFM operations with clear governance and measurable performance.",
  robots: "index, follow",
})

useHead({
  link: [{ rel: "canonical", href: URL }],
})
</script>

<template>
  <!-- ONE unified page background (no section borders anywhere) -->
  <div class="relative min-h-screen overflow-hidden text-white">
    <!-- global gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#3A2D7F] via-[#2b215e] to-black/55"></div>

    <!-- global accents (no squares) -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -left-48 -top-48 w-[640px] h-[640px] rounded-full bg-white/10 blur-3xl"></div>
      <div class="absolute -right-64 bottom-[-420px] w-[860px] h-[860px] rounded-full bg-[#FDC101]/10 blur-3xl"></div>
      <div class="absolute left-0 top-24 h-[2px] w-[320px] bg-[#FDC101]/75"></div>
      <div class="absolute -right-24 top-[45%] w-[520px] h-[2px] -rotate-12 bg-white/10"></div>
    </div>

    <div class="relative">
      <!-- ✅ HERO (kept like your original) -->
      <section class="bg-[#3F2E83] text-white">
        <div class="py-24 px-4 md:px-8 lg:px-28">
          <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase" data-aos="fade-up" data-aos-delay="100">
            About FACILIYA
          </p>

          <h1
            class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Governance-Driven Operational Leadership
          </h1>

          <p
            class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            FACILIYA operates under a structured Integrated Facilities Management model designed to stabilize operations,
            protect asset value, and deliver disciplined service execution across Texas.
          </p>

          <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">Home</NuxtLink>
            <span class="mx-2">›</span>
            <span class="font-medium">About Us</span>
          </div>
        </div>
      </section>

      <!-- MISSION / VISION -->
      <section class="px-4 md:px-8 lg:px-28 py-24">
        <div class="grid gap-12 md:grid-cols-2">
          <div
            class="bg-white rounded-2xl p-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div class="flex items-center gap-4">
              <Target class="w-8 h-8 text-[#FDC101]" />
              <h2 class="text-[24px] font-semibold text-[#1a1a1a]">Mission</h2>
            </div>
            <div class="mt-6 h-[2px] w-14 bg-[#FDC101]"></div>
            <p class="mt-6 text-[17px] text-[#1a1a1a]/75 leading-relaxed">
              To deliver governance-driven, intelligence-enabled facilities management that stabilizes operations and
              protects long-term asset value.
            </p>
          </div>

          <div
            class="bg-white rounded-2xl p-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div class="flex items-center gap-4">
              <Eye class="w-8 h-8 text-[#FDC101]" />
              <h2 class="text-[24px] font-semibold text-[#1a1a1a]">Vision</h2>
            </div>
            <div class="mt-6 h-[2px] w-14 bg-[#FDC101]"></div>
            <p class="mt-6 text-[17px] text-[#1a1a1a]/75 leading-relaxed">
              To become a trusted operational partner across Texas through structured execution and disciplined service
              delivery.
            </p>
          </div>
        </div>
      </section>

      <!-- LEADERSHIP -->
      <section class="px-4 md:px-8 lg:px-28 py-24">
        <div class="max-w-4xl">
          <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
            Leadership
          </p>
          <h2 class="mt-3 text-[28px] md:text-[34px] font-semibold" data-aos="fade-up" data-aos-delay="120">
            Leadership & Operational Foundation
          </h2>
          <p class="mt-4 text-white/80 text-[16px] leading-relaxed max-w-3xl" data-aos="fade-up" data-aos-delay="220">
            Built on hands-on oversight, governance discipline, and execution control across complex assets.
          </p>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <div class="bg-white p-8 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition"
               data-aos="fade-up" data-aos-delay="0">
            <Users class="w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Direct Field Experience</h3>
            <p class="mt-4 text-[#1a1a1a]/70 text-[16px] leading-relaxed">
              Leadership grounded in hands-on operational oversight across complex DFW properties.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition"
               data-aos="fade-up" data-aos-delay="120">
            <Briefcase class="w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Structured Governance</h3>
            <p class="mt-4 text-[#1a1a1a]/70 text-[16px] leading-relaxed">
              Operational systems aligned with vendor control, reporting, supervision, and accountability.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition"
               data-aos="fade-up" data-aos-delay="240">
            <Award class="w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Execution Discipline</h3>
            <p class="mt-4 text-[#1a1a1a]/70 text-[16px] leading-relaxed">
              Structured oversight ensuring consistent service delivery across all operational tiers.
            </p>
          </div>
        </div>

        <div class="mt-14 flex justify-center" data-aos="fade-up" data-aos-delay="360">
          <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
        </div>
      </section>

      <!-- COMPLIANCE -->
      <section class="px-4 md:px-8 lg:px-28 py-24">
        <div class="max-w-4xl">
          <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
            Compliance
          </p>
          <h2 class="mt-3 text-[28px] md:text-[34px] font-semibold" data-aos="fade-up" data-aos-delay="120">
            Compliance & Risk Framework
          </h2>
        </div>

        <div class="mt-16 space-y-6">
          <div class="rounded-2xl bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)] px-7 py-6"
               data-aos="fade-up" data-aos-delay="0">
            <div class="flex gap-5">
              <ShieldCheck class="w-7 h-7 text-[#FDC101] mt-1" />
              <div>
                <h3 class="font-semibold text-[18px]">Liability Coverage</h3>
                <p class="mt-2 text-white/80 text-[16px] leading-relaxed">
                  General liability coverage maintained across all service engagements.
                </p>
              </div>
            </div>
            <div class="mt-5 h-[2px] w-14 bg-[#FDC101]/70"></div>
          </div>

          <div class="rounded-2xl bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)] px-7 py-6"
               data-aos="fade-up" data-aos-delay="120">
            <div class="flex gap-5">
              <FileCheck2 class="w-7 h-7 text-[#FDC101] mt-1" />
              <div>
                <h3 class="font-semibold text-[18px]">Regulatory Alignment</h3>
                <p class="mt-2 text-white/80 text-[16px] leading-relaxed">
                  Adherence to Texas regulatory, safety, and compliance standards.
                </p>
              </div>
            </div>
            <div class="mt-5 h-[2px] w-14 bg-[#FDC101]/70"></div>
          </div>

          <div class="rounded-2xl bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)] px-7 py-6"
               data-aos="fade-up" data-aos-delay="240">
            <div class="flex gap-5">
              <Crown class="w-7 h-7 text-[#FDC101] mt-1" />
              <div>
                <h3 class="font-semibold text-[18px]">Risk Control</h3>
                <p class="mt-2 text-white/80 text-[16px] leading-relaxed">
                  Structured oversight minimizing exposure and protecting stakeholders.
                </p>
              </div>
            </div>
            <div class="mt-5 h-[2px] w-14 bg-[#FDC101]/70"></div>
          </div>
        </div>
      </section>

      <!-- INDUSTRIES -->
      <section class="px-4 md:px-8 lg:px-28 py-24">
        <div class="max-w-4xl">
          <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
            Coverage
          </p>
          <h2 class="mt-3 text-[28px] md:text-[34px] font-semibold" data-aos="fade-up" data-aos-delay="120">
            Industries Served
          </h2>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="180">
          <div class="bg-white rounded-2xl p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <Building2 class="mx-auto w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">High-Rise Residential</h3>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <Landmark class="mx-auto w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Mixed-Use Towers</h3>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <Crown class="mx-auto w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Hospitality</h3>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <Building2 class="mx-auto w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Commercial Offices</h3>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <GraduationCap class="mx-auto w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Education Facilities</h3>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <Factory class="mx-auto w-7 h-7 text-[#FDC101]" />
            <h3 class="mt-6 font-semibold text-[#1a1a1a]">Industrial Facilities</h3>
          </div>
        </div>

        <div class="mt-14 flex justify-center" data-aos="fade-up" data-aos-delay="260">
          <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
        </div>
      </section>

      <!-- CERTIFICATIONS (logos keep true colors, no borders) -->
      <section class="px-4 md:px-8 lg:px-28 py-24">
        <div class="text-center max-w-3xl mx-auto">
          <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
            Certifications
          </p>
          <h2 class="mt-3 font-semibold text-[22px] sm:text-[26px] lg:text-[32px]" data-aos="fade-up" data-aos-delay="120">
            Certifications &amp; Industry Alignment
          </h2>
        </div>

        <div
          class="mt-10 rounded-2xl bg-white px-6 py-8 sm:px-10 sm:py-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
          data-aos="fade-up"
          data-aos-delay="220"
        >
          <div class="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-row lg:justify-between">
            <img src="/logos/boma.png" alt="BOMA" class="h-14 lg:h-16 w-auto object-contain" loading="lazy" />
            <img src="/logos/usgbc.png" alt="USGBC" class="h-16 lg:h-20 w-auto object-contain" loading="lazy" />
            <img src="/logos/leed-ga.png" alt="LEED Green Associate" class="h-16 lg:h-20 w-auto object-contain" loading="lazy" />
            <img src="/logos/osha.png" alt="OSHA" class="h-14 lg:h-16 w-auto object-contain" loading="lazy" />
            <img src="/logos/ifma-dfw.png" alt="IFMA Dallas/Fort Worth Chapter" class="h-14 lg:h-16 w-auto object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- FAQ (no borders) -->
      <section class="px-4 md:px-8 lg:px-28 py-24">
        <div class="text-center max-w-[720px] mx-auto" data-aos="fade-up" data-aos-delay="0">
          <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold">FAQ</p>
          <h2 class="mt-3 font-semibold text-[26px] sm:text-[32px] lg:text-[38px]">Frequently asked questions</h2>
          <p class="mt-4 text-white/80 text-[13px] sm:text-[14px] leading-relaxed">
            Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
            to action, they may still have questions (doubts) that can be answered.
          </p>
        </div>

        <div class="mt-12 max-w-[680px] mx-auto space-y-4" data-aos="fade-up" data-aos-delay="140">
          <div
            v-for="(item, i) in faqs"
            :key="i"
            class="rounded-[14px] bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)] overflow-hidden"
          >
            <button
              type="button"
              class="w-full flex items-start justify-between gap-6 px-5 py-4 text-left"
              @click="toggle(i)"
              :aria-expanded="openIndex === i"
            >
              <span class="text-white font-semibold text-[13px] sm:text-[14px]">{{ item.q }}</span>
              <span class="shrink-0 text-[#FDC101] text-[18px] leading-none mt-[1px]" aria-hidden="true">×</span>
            </button>

            <div class="px-5 pb-4" v-show="openIndex === i">
              <p class="text-white/80 text-[11px] sm:text-[12px] leading-relaxed">{{ item.a }}</p>
            </div>
          </div>

          <div class="pt-6 flex justify-center">
            <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
          </div>
        </div>
      </section>

      <!-- WORK WITH US -->
      <section class="px-4 md:px-8 lg:px-28 py-24 text-center">
        <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
          Careers
        </p>

        <h2 class="mt-3 font-semibold text-[34px] sm:text-[44px] lg:text-[56px]" data-aos="fade-up" data-aos-delay="120">
          Work with us
        </h2>

        <p
          class="mt-6 text-white/80 text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed max-w-[900px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="220"
        >
          Build your career with Faciliya. We offer opportunities to grow within a structured,
          performance-driven facilities management environment.
        </p>

        <NuxtLink
          to="/careers"
          class="mt-10 inline-flex items-center justify-center rounded-[12px] bg-[#FDC101] px-10 py-4
                 text-[16px] font-semibold text-[#3A2D7F] hover:brightness-95 active:brightness-90 transition"
          data-aos="fade-up"
          data-aos-delay="320"
        >
          Join our team
        </NuxtLink>

        <div class="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="420">
          <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
        </div>
      </section>
    </div>
  </div>
</template>