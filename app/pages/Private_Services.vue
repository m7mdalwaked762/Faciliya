<script setup>
import { User, Car, HeartHandshake, ShieldCheck, CalendarCheck, Crown } from "lucide-vue-next"

useSeoMeta({
  title: "Private Client Staffing | FACILIYA",
  description:
    "FACILIYA provides structured monthly personal staffing services including residential cleaning staff, private drivers, and personal companions for private clients.",
  ogTitle: "Private Client Staffing | FACILIYA",
  ogDescription:
    "Reliable monthly staffing solutions for private residences including domestic staff, drivers, and personal support companions.",
  twitterTitle: "Private Client Staffing | FACILIYA",
  twitterDescription:
    "Structured monthly personal staffing services for private residential clients.",
  robots: "index, follow",
})
</script>

<template>
  <section class="bg-white">
    <!-- HERO -->
    <section class="bg-[#3F2E83] text-white">
      <div class="py-24 px-4 md:px-8 lg:px-28">
        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase">
          Private Client Staffing
        </p>

        <h1 class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl">
          Structured Monthly Personal Staffing Solutions
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl">
          FACILIYA provides reliable, discreet, and professionally managed
          monthly staffing services for private residential clients.
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
          <span class="font-medium">Private Services</span>
        </div>
      </div>
    </section>

    <!-- EXECUTIVE OVERVIEW -->
    <div class="px-4 md:px-8 lg:px-28 py-24">
      <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
        Service Overview
      </h2>

      <div class="mt-8 space-y-6 text-[17px] text-[#1a1a1a]/80 leading-relaxed max-w-4xl">
        <p>
          FACILIYA delivers structured personal staffing under disciplined
          monthly agreements. Each engagement is organized with defined
          schedules, role clarity, and performance oversight to ensure
          consistency and reliability.
        </p>

        <p class="font-medium text-[#1a1a1a]">
          Discretion. Reliability. Professional Conduct.
        </p>
      </div>
    </div>

    <!-- SERVICES -->
    <div class="bg-[#F8F9FB]">
      <div class="px-4 md:px-8 lg:px-28 py-24">
        <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
          Monthly-Based Personal Staffing Solutions
        </h2>

        <div class="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <!-- Card 1 -->
  <div
    class="w-full bg-white p-7 rounded-2xl border border-[#1a1a1a]/10
           hover:shadow-xl transition flex gap-5 items-start"
  >
    <div class="w-[60px] h-[60px] shrink-0 rounded-full flex items-center justify-center bg-[#FDC101]/15">
      <User class="w-7 h-7 text-[#FDC101]" />
    </div>
    <div class="flex-1">
      <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
        Residential Cleaning Staff
      </h3>
      <p class="mt-3 text-[15px] leading-relaxed text-[#1a1a1a]/70">
        Full-Time · Part-Time · Scheduled Weekly Presence
      </p>
    </div>
  </div>

  <!-- Card 2 -->
  <div
    class="w-full bg-white p-7 rounded-2xl border border-[#1a1a1a]/10
           hover:shadow-xl transition flex gap-5 items-start"
  >
    <div class="w-[60px] h-[60px] shrink-0 rounded-full flex items-center justify-center bg-[#FDC101]/15">
      <Car class="w-7 h-7 text-[#FDC101]" />
    </div>
    <div class="flex-1">
      <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
        Private Driver
      </h3>
      <p class="mt-3 text-[15px] leading-relaxed text-[#1a1a1a]/70">
        Family transport ·  Daily schedules · Appointment transport
      </p>
    </div>
  </div>

  <!-- Card 3 -->
  <div
    class="w-full bg-white p-7 rounded-2xl border border-[#1a1a1a]/10
           hover:shadow-xl transition flex gap-5 items-start"
  >
    <div class="w-[60px] h-[60px] shrink-0 rounded-full flex items-center justify-center bg-[#FDC101]/15">
      <HeartHandshake class="w-7 h-7 text-[#FDC101]" />
    </div>
    <div class="flex-1">
      <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
        Private Companion
      </h3>
      <p class="mt-3 text-[15px] leading-relaxed text-[#1a1a1a]/70">
        Elderly assistance · Daily accompaniment · Personal support
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  </section>
</template>