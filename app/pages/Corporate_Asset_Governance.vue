<script setup>
import {
  Building2,
  Users,
  Wrench,
  BarChart3,
  ShieldCheck,
  Leaf,
  LayoutDashboard,
  Settings,
  Activity,
  Sparkles,
  Crown,
} from "lucide-vue-next"

useSeoMeta({
  title: "Corporate & Asset Governance | FACILIYA",
  description:
    "FACILIYA delivers governance-driven integrated facilities management for high-rise residential, mixed-use, hospitality, and commercial assets.",
  ogTitle: "Corporate & Asset Governance | FACILIYA",
  ogDescription:
    "Structured facilities management including maintenance oversight, vendor control, operational governance, and sustainability tracking.",
  twitterTitle: "Corporate & Asset Governance | FACILIYA",
  twitterDescription:
    "Governance-driven facilities management and operational oversight for complex commercial assets.",
  robots: "index, follow",
})

/* no borders, no gradients */
const pill = "text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold"
const h2 = "mt-3 text-[28px] md:text-[34px] font-semibold text-white"
const p = "mt-4 text-white/80 text-[16px] leading-relaxed"

const whiteCard =
  "rounded-2xl bg-white shadow-xl shadow-black/20 p-8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"
const iconCircle = "w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"
const divider = "mt-12 h-[2px] w-16 bg-[#FDC101]/80 mx-auto"
</script>

<template>
  <section class="bg-white">
    <!-- ✅ HERO (unchanged) -->
    <section class="bg-[#3F2E83] text-white">
      <div class="py-24 px-4 md:px-8 lg:px-28">
        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase" data-aos="fade-up" data-aos-delay="100">
          Corporate & Asset Governance
        </p>

        <h1
          class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Intelligence-Enabled Integrated Facilities Management
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          FACILIYA LLC delivers governance-driven iFM for high-rise, mixed-use,
          hospitality, and commercial assets across Texas.
        </p>

        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]" data-aos="fade-up" data-aos-delay="250">
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">Home</NuxtLink>
          <span class="mx-2">›</span>
          <span class="opacity-80 hover:opacity-100 transition cursor-pointer">Solutions</span>
          <span class="mx-2">›</span>
          <span class="font-medium">Corporate & Asset Governance</span>
        </div>
      </div>
    </section>

    <!-- ✅ SAME FEEL AS HERO (solid hero purple) + CORNER GLOWS -->
    <div class="relative overflow-hidden bg-[#3F2E83] text-white">
      <!-- very light depth so it matches hero -->
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- ✅ corner glows (like your other sections) -->
      <div class="pointer-events-none absolute inset-0">
        <!-- top-left white glow -->
        <div class="absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full bg-white/12 blur-3xl"></div>
        <!-- bottom-right yellow glow -->
        <div class="absolute -right-48 -bottom-56 w-[680px] h-[680px] rounded-full bg-[#FDC101]/12 blur-3xl"></div>
        <!-- optional tiny top-right soft glow -->
        <div class="absolute -right-40 -top-48 w-[520px] h-[520px] rounded-full bg-white/8 blur-3xl"></div>

        <!-- accent line -->
        <div class="absolute left-0 top-24 h-[2px] w-[320px] bg-[#FDC101]/75"></div>
      </div>

      <div class="relative">
        <!-- OVERVIEW -->
        <section class="px-4 md:px-8 lg:px-28 py-20">
          <p :class="pill" data-aos="fade-up" data-aos-delay="0">Overview</p>
          <h2 :class="h2" data-aos="fade-up" data-aos-delay="120">Executive Overview</h2>

          <p class="mt-6 max-w-4xl text-white/80 text-[16px] leading-relaxed" data-aos="fade-up" data-aos-delay="220">
            We unify operations under structured governance—integrating maintenance, hygiene systems,
            vendor coordination, sustainability alignment, and executive reporting into one accountable structure.
          </p>

          <p class="mt-4 max-w-4xl text-white font-medium" data-aos="fade-up" data-aos-delay="320">
            Facilities are not serviced. They are governed.
          </p>

          <div class="mt-10 h-[2px] w-16 bg-[#FDC101]/80" data-aos="fade-up" data-aos-delay="420"></div>
        </section>

        <!-- SERVICES -->
        <section class="px-4 md:px-8 lg:px-28 py-20">
          <p :class="pill" data-aos="fade-up" data-aos-delay="0">Delivery</p>
          <h2 :class="h2" data-aos="fade-up" data-aos-delay="120">Services We Deliver</h2>
          <p :class="p" data-aos="fade-up" data-aos-delay="220">
            Core operational service lines governed under one performance system.
          </p>

          <div class="mt-12 grid gap-8 md:grid-cols-2" data-aos="fade-up" data-aos-delay="320">
            <div :class="whiteCard">
              <div class="flex gap-5 items-start">
                <div :class="iconCircle"><Users class="w-6 h-6 text-[#FDC101]" /></div>
                <div class="min-w-0">
                  <h3 class="text-[18px] font-semibold text-[#1a1a1a]">Front-of-House Operations</h3>
                  <p class="mt-2 text-[#1a1a1a]/70 text-[14px] leading-relaxed">
                    Concierge · Valet · Resident Services · Guest Relations · Lobby Oversight
                  </p>
                </div>
              </div>
            </div>

            <div :class="whiteCard">
              <div class="flex gap-5 items-start">
                <div :class="iconCircle"><Building2 class="w-6 h-6 text-[#FDC101]" /></div>
                <div class="min-w-0">
                  <h3 class="text-[18px] font-semibold text-[#1a1a1a]">Asset Care & Hygiene Systems</h3>
                  <p class="mt-2 text-[#1a1a1a]/70 text-[14px] leading-relaxed">
                    Structured Cleaning · QA · Waste Coordination · Environmental Control
                  </p>
                </div>
              </div>
            </div>

            <div :class="whiteCard">
              <div class="flex gap-5 items-start">
                <div :class="iconCircle"><Wrench class="w-6 h-6 text-[#FDC101]" /></div>
                <div class="min-w-0">
                  <h3 class="text-[18px] font-semibold text-[#1a1a1a]">Technical Maintenance Oversight</h3>
                  <p class="mt-2 text-[#1a1a1a]/70 text-[14px] leading-relaxed">
                    Preventive Maintenance · Engineering Supervision · CMMS Integration
                  </p>
                </div>
              </div>
            </div>

            <div :class="whiteCard">
              <div class="flex gap-5 items-start">
                <div :class="iconCircle"><BarChart3 class="w-6 h-6 text-[#FDC101]" /></div>
                <div class="min-w-0">
                  <h3 class="text-[18px] font-semibold text-[#1a1a1a]">Vendor Performance Control</h3>
                  <p class="mt-2 text-[#1a1a1a]/70 text-[14px] leading-relaxed">
                    Service Alignment · Scorecards · Escalation Handling
                  </p>
                </div>
              </div>
            </div>

            <div :class="whiteCard">
              <div class="flex gap-5 items-start">
                <div :class="iconCircle"><ShieldCheck class="w-6 h-6 text-[#FDC101]" /></div>
                <div class="min-w-0">
                  <h3 class="text-[18px] font-semibold text-[#1a1a1a]">Security & Operational Risk Support</h3>
                  <p class="mt-2 text-[#1a1a1a]/70 text-[14px] leading-relaxed">
                    Access Oversight · Compliance Monitoring · Risk Mitigation
                  </p>
                </div>
              </div>
            </div>

            <div :class="whiteCard">
              <div class="flex gap-5 items-start">
                <div :class="iconCircle"><Leaf class="w-6 h-6 text-[#FDC101]" /></div>
                <div class="min-w-0">
                  <h3 class="text-[18px] font-semibold text-[#1a1a1a]">Sustainability & Performance Tracking</h3>
                  <p class="mt-2 text-[#1a1a1a]/70 text-[14px] leading-relaxed">
                    Energy · Water · Waste Diversion · LEED Alignment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div :class="divider" data-aos="fade-up" data-aos-delay="420"></div>
        </section>

        <!-- PACKAGES -->
        <!-- PACKAGES (✅ WHITE CARDS, NO BORDERS) -->
<section class="px-4 md:px-8 lg:px-28 py-20">
  <p :class="pill" data-aos="fade-up" data-aos-delay="0">Packages</p>
  <h2 :class="h2" data-aos="fade-up" data-aos-delay="120">Governance Packages</h2>
  <p :class="p" data-aos="fade-up" data-aos-delay="220">Engage at the level your operation requires.</p>

  <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5" data-aos="fade-up" data-aos-delay="320">
    <!-- Card base: WHITE (no border) -->
    <div class="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 transition">
      <div class="mx-auto w-14 h-14 rounded-full bg-[#FDC101]/15 flex items-center justify-center">
        <LayoutDashboard class="w-6 h-6 text-[#FDC101]" />
      </div>
      <h3 class="mt-5 font-semibold text-[#1a1a1a]">DESIGN</h3>
      <p class="mt-2 text-[#1a1a1a]/60 text-[13px]">Governance configuration.</p>
    </div>

    <div class="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 transition">
      <div class="mx-auto w-14 h-14 rounded-full bg-[#FDC101]/15 flex items-center justify-center">
        <Settings class="w-6 h-6 text-[#FDC101]" />
      </div>
      <h3 class="mt-5 font-semibold text-[#1a1a1a]">OPERATE</h3>
      <p class="mt-2 text-[#1a1a1a]/60 text-[13px]">Operational coordination.</p>
    </div>

    <div class="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 transition">
      <div class="mx-auto w-14 h-14 rounded-full bg-[#FDC101]/15 flex items-center justify-center">
        <Activity class="w-6 h-6 text-[#FDC101]" />
      </div>
      <h3 class="mt-5 font-semibold text-[#1a1a1a]">MANAGE</h3>
      <p class="mt-2 text-[#1a1a1a]/60 text-[13px]">Performance monitoring.</p>
    </div>

    <div class="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 transition">
      <div class="mx-auto w-14 h-14 rounded-full bg-[#FDC101]/15 flex items-center justify-center">
        <Sparkles class="w-6 h-6 text-[#FDC101]" />
      </div>
      <h3 class="mt-5 font-semibold text-[#1a1a1a]">ELEVATE</h3>
      <p class="mt-2 text-[#1a1a1a]/60 text-[13px]">AI-assisted insights.</p>
    </div>

    <div class="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 transition">
      <div class="mx-auto w-14 h-14 rounded-full bg-[#FDC101]/15 flex items-center justify-center">
        <Crown class="w-6 h-6 text-[#FDC101]" />
      </div>
      <h3 class="mt-5 font-semibold text-[#1a1a1a]">ELITE</h3>
      <p class="mt-2 text-[#1a1a1a]/60 text-[13px]">Strategic optimization.</p>
    </div>
  </div>

  <div :class="divider" data-aos="fade-up" data-aos-delay="420"></div>
</section>

        <!-- TRAINING -->
        <section class="px-4 md:px-8 lg:px-28 py-20">
          <p :class="pill" data-aos="fade-up" data-aos-delay="0">Training</p>
          <h2 :class="h2" data-aos="fade-up" data-aos-delay="120">Continuous Internal Training</h2>

          <div class="mt-10 rounded-2xl bg-white/12 backdrop-blur-sm px-8 py-10 shadow-xl shadow-black/20" data-aos="fade-up" data-aos-delay="220">
            <p class="max-w-4xl text-white/85 text-[16px] leading-relaxed">
              FACILIYA maintains structured internal capability calibration to ensure consistent execution across all
              service tiers—service etiquette, reporting accuracy, operational discipline, and sustainability alignment.
            </p>
            <div class="mt-8 h-[2px] w-16 bg-[#FDC101]/80"></div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>