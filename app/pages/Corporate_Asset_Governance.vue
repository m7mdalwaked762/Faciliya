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
  Crown
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
  robots: "index, follow"
})
</script>

<template>
  <section class="bg-white">

    <!-- HERO -->
    <section class="bg-[#3F2E83] text-white">
      <div class="py-24 px-4 md:px-8 lg:px-28">

        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase">
          Corporate & Asset Governance 
        </p>

        <h1 class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl">
          Intelligence-Enabled Integrated Facilities Management
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl">
          FACILIYA LLC delivers governance-driven iFM for high-rise, mixed-use,
          hospitality, and commercial assets across Texas.
        </p>
        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]">
        <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">
          Home
        </NuxtLink>
        <span class="mx-2">›</span>
        <span class="opacity-80 hover:opacity-100 transition cursor-pointer">
      
        Solutions
        </span>
        <span class="mx-2">›</span>
        <span class="font-medium">
          Corporate & Asset Governance
        </span>
      </div>
      </div>
      
    </section>



    <!-- EXECUTIVE OVERVIEW -->
    <div class="px-4 md:px-8 lg:px-28 py-24">

      <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
        Executive Overview
      </h2>

      <div class="mt-8 space-y-6 text-[17px] text-[#1a1a1a]/80 leading-relaxed max-w-4xl">
        <p>
          We unify operations under structured governance architecture —
          integrating maintenance, hygiene systems, vendor coordination,
          sustainability alignment, and executive reporting into one accountable structure.
        </p>

        <p class="font-medium text-[#1a1a1a]">
          Facilities are not serviced. They are governed.
        </p>
      </div>

    </div>



    <!-- SERVICES -->
    <div class="bg-[#F8F9FB]">
      <div class="px-4 md:px-8 lg:px-28 py-24">

        <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
          Services We Deliver
        </h2>

        <div class="mt-16 grid gap-8 md:grid-cols-2">

          <!-- Service Card -->
          <div class="flex gap-6 bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <Users class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Front-of-House Operations
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Concierge · Valet · Resident Services · Guest Relations · Lobby Oversight
              </p>
            </div>
          </div>

          <div class="flex gap-6 bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <Building2 class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Asset Care & Hygiene Systems
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Structured Cleaning · QA · Waste Coordination · Environmental Control
              </p>
            </div>
          </div>

          <div class="flex gap-6 bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <Wrench class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Technical Maintenance Oversight
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Preventive Maintenance · Engineering Supervision · CMMS Integration
              </p>
            </div>
          </div>

          <div class="flex gap-6 bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <BarChart3 class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Vendor Performance Control
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Service Alignment · Scorecards · Escalation Handling
              </p>
            </div>
          </div>

          <div class="flex gap-6 bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <ShieldCheck class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Security & Operational Risk Support
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Access Oversight · Compliance Monitoring · Risk Mitigation
              </p>
            </div>
          </div>

          <div class="flex gap-6 bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
              <Leaf class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Sustainability & Performance Tracking
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Energy · Water · Waste Diversion · LEED Alignment
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>



    <!-- GOVERNANCE PACKAGES -->
    <div class="px-4 md:px-8 lg:px-28 py-24 bg-white">

      <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
        Governance Packages
      </h2>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

        <div class="bg-[#F8F9FB] rounded-2xl p-8 text-center border border-[#1a1a1a]/10 hover:shadow-xl transition">
          <LayoutDashboard class="mx-auto w-7 h-7 text-[#FDC101]" />
          <h3 class="mt-6 font-semibold text-[#1a1a1a]">DESIGN</h3>
          <p class="mt-3 text-sm text-[#1a1a1a]/60">
            Foundational governance configuration.
          </p>
        </div>

        <div class="bg-[#F8F9FB] rounded-2xl p-8 text-center border border-[#1a1a1a]/10 hover:shadow-xl transition">
          <Settings class="mx-auto w-7 h-7 text-[#FDC101]" />
          <h3 class="mt-6 font-semibold text-[#1a1a1a]">OPERATE</h3>
          <p class="mt-3 text-sm text-[#1a1a1a]/60">
            Structured operational coordination.
          </p>
        </div>

        <div class="bg-[#F8F9FB] rounded-2xl p-8 text-center border border-[#1a1a1a]/10 hover:shadow-xl transition">
          <Activity class="mx-auto w-7 h-7 text-[#FDC101]" />
          <h3 class="mt-6 font-semibold text-[#1a1a1a]">MANAGE</h3>
          <p class="mt-3 text-sm text-[#1a1a1a]/60">
            Performance monitoring & vendor control.
          </p>
        </div>

        <div class="bg-[#F8F9FB] rounded-2xl p-8 text-center border border-[#1a1a1a]/10 hover:shadow-xl transition">
          <Sparkles class="mx-auto w-7 h-7 text-[#FDC101]" />
          <h3 class="mt-6 font-semibold text-[#1a1a1a]">ELEVATE</h3>
          <p class="mt-3 text-sm text-[#1a1a1a]/60">
            AI-assisted intelligence integration.
          </p>
        </div>

        <div class="bg-[#F8F9FB] rounded-2xl p-8 text-center border border-[#1a1a1a]/10 hover:shadow-xl transition">
          <Crown class="mx-auto w-7 h-7 text-[#FDC101]" />
          <h3 class="mt-6 font-semibold text-[#1a1a1a]">ELITE</h3>
          <p class="mt-3 text-sm text-[#1a1a1a]/60">
            Strategic asset optimization & predictive modeling.
          </p>
        </div>

      </div>
    </div>
 <div class="px-4 md:px-8 lg:px-28 py-24">

      <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
        Continuous Internal Training
      </h2>

      <div class="mt-8 space-y-6 text-[17px] text-[#1a1a1a]/80 leading-relaxed max-w-4xl">
        <p>
          FACILIYA maintains structured internal capability calibration programs to ensure consistent
execution across all service tiers.
Training includes service etiquette, operational discipline, reporting accuracy, and
sustainability alignment.
        </p>

       
      </div>

    </div>
  </section>
</template>