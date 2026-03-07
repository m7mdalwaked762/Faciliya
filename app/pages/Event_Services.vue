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

/* ✅ no borders */
const cardBase =
  "bg-white p-8 rounded-2xl shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"

const cardLayout =
  "flex flex-col items-center text-center gap-5 sm:flex-row sm:items-start sm:text-left sm:gap-6"
</script>

<template>
  <section class="bg-white">
    <!-- ✅ HERO (UNCHANGED) -->
    <section class="bg-[#3F2E83] text-white">
      <div class="py-24 px-4 md:px-8 lg:px-28">
        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase" data-aos="fade-up" data-aos-delay="100">
          Events &amp; Occasion Services
        </p>

        <h1
          class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Structured Operational Support for Private &amp; Corporate Events
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          FACILIYA provides disciplined staffing and operational coordination for
          events requiring professional presence, structured oversight, and
          controlled execution.
        </p>

        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]" data-aos="fade-up" data-aos-delay="250">
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">Home</NuxtLink>
          <span class="mx-2">›</span>
          <span class="opacity-80 hover:opacity-100 transition cursor-pointer">Solutions</span>
          <span class="mx-2">›</span>
          <span class="font-medium">Event Services</span>
        </div>
      </div>
    </section>

    <!-- ✅ SAME FEEL AS HERO (solid purple) + CORNER GLOWS (no gradients) -->
    <div class="relative overflow-hidden bg-[#3F2E83] text-white">
      <!-- tiny depth (keeps it close to hero) -->
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- corner glows -->
      <div class="pointer-events-none absolute inset-0">
        <!-- top-left white glow -->
        <div class="absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full bg-white/12 blur-3xl"></div>
        <!-- bottom-right yellow glow -->
        <div class="absolute -right-48 -bottom-56 w-[680px] h-[680px] rounded-full bg-[#FDC101]/12 blur-3xl"></div>
        <!-- small top-right glow -->
        <div class="absolute -right-40 -top-48 w-[520px] h-[520px] rounded-full bg-white/8 blur-3xl"></div>

        <!-- accent line -->
        <div class="absolute left-0 top-24 h-[2px] w-[320px] bg-[#FDC101]/75"></div>
      </div>

      <!-- keep overflow-x hidden to avoid extra scrollbars from AOS -->
      <div class="relative overflow-x-hidden">
        <!-- EXECUTIVE OVERVIEW -->
        <div class="px-4 md:px-8 lg:px-28 py-24">
          <h2 class="text-[28px] md:text-[34px] font-semibold text-white" data-aos="fade-up" data-aos-delay="100">
            Service Overview
          </h2>

          <div
            class="mt-8 space-y-6 text-[17px] text-white/80 leading-relaxed max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p>
              FACILIYA structures event operations under defined coordination
              frameworks — aligning staffing, vendor execution, and on-site
              supervision into one disciplined operational model.
            </p>

            <p class="font-medium text-white">
              We bring operational structure to hospitality-driven environments.
            </p>

            <div class="pt-2">
              <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
            </div>
          </div>
        </div>

        <!-- SERVICES (no gray bg) -->
        <div class="px-4 md:px-8 lg:px-28 py-24">
          <h2 class="text-[28px] md:text-[34px] font-semibold text-white" data-aos="fade-up" data-aos-delay="100">
            Operational Capabilities
          </h2>

          <div class="mt-16 grid gap-8 md:grid-cols-2">
            <div :class="`${cardBase} ${cardLayout}`" data-aos="fade-up" data-aos-delay="0">
              <div :class="iconCircle">
                <Users class="w-7 h-7 text-[#FDC101]" />
              </div>
              <div>
                <h3 class="text-[20px] font-semibold text-[#1a1a1a]">Event Staffing</h3>
                <p class="mt-3 text-[#1a1a1a]/70">Hosts · Attendants · Guest Support</p>
              </div>
            </div>

            <div :class="`${cardBase} ${cardLayout}`" data-aos="fade-up" data-aos-delay="120">
              <div :class="iconCircle">
                <LayoutGrid class="w-7 h-7 text-[#FDC101]" />
              </div>
              <div>
                <h3 class="text-[20px] font-semibold text-[#1a1a1a]">Venue Operational Supervision</h3>
                <p class="mt-3 text-[#1a1a1a]/70">Setup Oversight · Timeline Control · On-Site Coordination</p>
              </div>
            </div>

            <div :class="`${cardBase} ${cardLayout}`" data-aos="fade-up" data-aos-delay="240">
              <div :class="iconCircle">
                <Truck class="w-7 h-7 text-[#FDC101]" />
              </div>
              <div>
                <h3 class="text-[20px] font-semibold text-[#1a1a1a]">Vendor Coordination</h3>
                <p class="mt-3 text-[#1a1a1a]/70">Catering · Technical Crew · Event Suppliers</p>
              </div>
            </div>

            <div :class="`${cardBase} ${cardLayout}`" data-aos="fade-up" data-aos-delay="360">
              <div :class="iconCircle">
                <Crown class="w-7 h-7 text-[#FDC101]" />
              </div>
              <div>
                <h3 class="text-[20px] font-semibold text-[#1a1a1a]">VIP &amp; Guest Management</h3>
                <p class="mt-3 text-[#1a1a1a]/70">
                  Guest Flow Control · Hospitality Oversight · Access Coordination
                </p>
              </div>
            </div>
          </div>

          <div class="mt-14 flex justify-center" >
            <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>