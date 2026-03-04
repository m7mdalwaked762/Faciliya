<script setup>
import { Users, LayoutGrid, Truck, Crown } from "lucide-vue-next"

useSeoMeta({
  title: "Event Services | FACILIYA",
  description:
    "FACILIYA provides structured operational support for private and corporate events including event staffing, vendor coordination, venue supervision, and VIP guest management.",
  ogTitle: "Event Services | FACILIYA",
  ogDescription:
    "Operational support for private and corporate events including event staffing, venue supervision, vendor coordination, and VIP guest management.",
  twitterTitle: "Event Services | FACILIYA",
  twitterDescription: "Structured operational support for private and corporate events.",
  robots: "index, follow",
})

const iconCircle =
  "w-[60px] h-[60px] min-w-[60px] shrink-0 aspect-square flex items-center justify-center rounded-full bg-[#FDC101]/15"

const cardBase =
  "bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 hover:shadow-xl transition"

const cardLayout =
  "flex flex-col items-center text-center gap-5 sm:flex-row sm:items-start sm:text-left sm:gap-6"
</script>

<template>
  <section class="bg-white">
    <!-- HERO -->
    <section class="bg-[#3F2E83] text-white">
      <div class="py-24 px-4 md:px-8 lg:px-28">
        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase">
          Events & Occasion Services
        </p>

        <h1
          class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl"
        >
          Structured Operational Support for Private & Corporate Events
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl">
          FACILIYA provides disciplined staffing and operational coordination for
          events requiring professional presence, structured oversight, and
          controlled execution.
        </p>

        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]">
          <NuxtLink
            to="/"
            class="opacity-80 hover:opacity-100 transition cursor-pointer"
          >
            Home
          </NuxtLink>
          <span class="mx-2">›</span>
          <span class="opacity-80 hover:opacity-100 transition cursor-pointer">
            Solutions
          </span>
          <span class="mx-2">›</span>
          <span class="font-medium">Event Services</span>
        </div>
      </div>
    </section>

    <!-- EXECUTIVE OVERVIEW -->
    <div class="px-4 md:px-8 lg:px-28 py-24">
      <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
        Service Overview
      </h2>

      <div
        class="mt-8 space-y-6 text-[17px] text-[#1a1a1a]/80 leading-relaxed max-w-4xl"
      >
        <p>
          FACILIYA structures event operations under defined coordination
          frameworks — aligning staffing, vendor execution, and on-site
          supervision into one disciplined operational model.
        </p>

        <p class="font-medium text-[#1a1a1a]">
          We bring operational structure to hospitality-driven environments.
        </p>
      </div>
    </div>

    <!-- SERVICES -->
    <div class="bg-[#F8F9FB]">
      <div class="px-4 md:px-8 lg:px-28 py-24">
        <h2 class="text-[28px] md:text-[34px] font-semibold text-[#1a1a1a]">
          Operational Capabilities
        </h2>

        <div class="mt-16 grid gap-8 md:grid-cols-2">
          <div :class="`${cardBase} ${cardLayout}`">
            <div :class="iconCircle">
              <Users class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Event Staffing
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Hosts · Attendants · Guest Support
              </p>
            </div>
          </div>

          <div :class="`${cardBase} ${cardLayout}`">
            <div :class="iconCircle">
              <LayoutGrid class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Venue Operational Supervision
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Setup Oversight · Timeline Control · On-Site Coordination
              </p>
            </div>
          </div>

          <div :class="`${cardBase} ${cardLayout}`">
            <div :class="iconCircle">
              <Truck class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                Vendor Coordination
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Catering · Technical Crew · Event Suppliers
              </p>
            </div>
          </div>

          <div :class="`${cardBase} ${cardLayout}`">
            <div :class="iconCircle">
              <Crown class="w-7 h-7 text-[#FDC101]" />
            </div>
            <div>
              <h3 class="text-[20px] font-semibold text-[#1a1a1a]">
                VIP & Guest Management
              </h3>
              <p class="mt-3 text-[#1a1a1a]/70">
                Guest Flow Control · Hospitality Oversight · Access Coordination
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>