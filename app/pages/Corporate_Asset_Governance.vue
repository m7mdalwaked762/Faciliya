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
   X,ArrowRight
} from "lucide-vue-next"
import { ref, watch, onBeforeUnmount } from "vue"


const selectedPackage = ref(null)

const governancePackages = [
  {
    key: "design",
    title: "DESIGN",
    subtitle: "Configuration & Governance Architecture",
    short: "Governance configuration.",
    icon: LayoutDashboard,
    description:
      "The DESIGN package focuses on building the governance foundation before execution begins. It defines the structure, scope, escalation logic, and sustainability alignment needed to operate with control from day one.",
    bullets: [
      "Asset & operational assessment",
      "Risk mapping & scope alignment",
      "Escalation structure setup",
      "Sustainability integration planning",
      "Operational intelligence layer configuration",
    ],
  },
  {
    key: "operate",
    title: "OPERATE",
    subtitle: "Structured Service Coordination",
    short: "Operational coordination.",
    icon: Settings,
    description:
      "The OPERATE package activates day-to-day service coordination through a structured command model. It is built for controlled execution, centralized accountability, and organized delivery across services.",
    bullets: [
      "Coordinated hard & soft services",
      "CMMS-based work order management",
      "Preventive maintenance scheduling",
      "Centralized accountability",
    ],
  },
  {
    key: "manage",
    title: "MANAGE",
    subtitle: "Performance Governance & Oversight",
    short: "Performance monitoring.",
    icon: Activity,
    description:
      "The MANAGE package adds active governance and measurable oversight. It is designed for operations that require visible performance tracking, recurring issue control, and structured reporting discipline.",
    bullets: [
      "KPI & SLA monitoring",
      "Vendor scorecards",
      "Recurring-issue tracking",
      "Structured reporting cadence",
      "Dashboard-based performance visibility",
    ],
  },
  {
    key: "elevate",
    title: "ELEVATE",
    subtitle: "Integrated Operational Intelligence",
    short: "AI-assisted insights.",
    icon: Sparkles,
    description:
      "The ELEVATE package brings intelligence-enabled oversight into the operating model. It supports predictive visibility, anomaly detection, risk awareness, and sustainability performance tracking.",
    bullets: [
      "AI-assisted trend analysis",
      "Predictive maintenance modeling",
      "Executive dashboards with anomaly detection",
      "Risk exposure monitoring",
      "Sustainability performance tracking",
    ],
  },
  {
    key: "elite",
    title: "ELITE",
    subtitle: "Strategic Asset Governance & Predictive Optimization",
    short: "Strategic optimization.",
    icon: Crown,
    description:
      "The ELITE package is the highest governance tier. It is designed for advanced asset leadership, predictive optimization, executive insight, and long-range operational resilience planning.",
    bullets: [
      "Lifecycle forecasting & capital planning insight",
      "Intelligent escalation routing",
      "AI-generated executive reporting summaries",
      "Operational resilience modeling",
      "Advanced sustainability & energy analytics",
    ],
  },
]

const openPackage = (pkg) => {
  selectedPackage.value = pkg
}

const closePackage = () => {
  selectedPackage.value = null
}

const handleEscape = (e) => {
  if (e.key === "Escape") closePackage()
}

watch(selectedPackage, (value) => {
  if (!import.meta.client) return

  if (value) {
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleEscape)
  } else {
    document.body.style.overflow = ""
    document.removeEventListener("keydown", handleEscape)
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.body.style.overflow = ""
  document.removeEventListener("keydown", handleEscape)
})
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
    <p :class="p" data-aos="fade-up" data-aos-delay="220">
      Engage at the level your operation requires.
    </p>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      <div
        v-for="pkg in governancePackages"
        :key="pkg.key"
        class="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"
        data-aos="fade-up"
        data-aos-delay="320"
      >
        <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FDC101]/15">
          <component :is="pkg.icon" class="h-6 w-6 text-[#FDC101]" />
        </div>

        <h3 class="mt-5 font-semibold text-[#1a1a1a]">{{ pkg.title }}</h3>
        <p class="mt-2 text-[13px] text-[#1a1a1a]/60">{{ pkg.short }}</p>

        <button
          type="button"
          class="group mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#FDC101] px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition hover:scale-[1.02] hover:bg-[#e7b100]"
          @click="openPackage(pkg)"
        >
          <span>Learn More</span>
          <ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>

    <div :class="divider" data-aos="fade-up" data-aos-delay="420"></div>

    <teleport to="body">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedPackage"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          @click.self="closePackage"
        >
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-2"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-2"
          >
            <div
              v-if="selectedPackage"
              class="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl md:p-8"
            >
              <button
                type="button"
                class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a] transition hover:bg-[#1a1a1a]/10"
                @click="closePackage"
                aria-label="Close popup"
              >
                <X class="h-5 w-5" />
              </button>

              <div class="pr-12">
                <div class="flex items-center gap-4">
                  <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[#FDC101]/15">
                    <component :is="selectedPackage.icon" class="h-6 w-6 text-[#FDC101]" />
                  </div>

                  <div>
                    <p class="text-[12px] font-semibold uppercase tracking-[2px] text-[#FDC101]">
                      Governance Package
                    </p>
                    <h3 class="mt-1 text-[28px] font-semibold leading-none text-[#1a1a1a]">
                      {{ selectedPackage.title }}
                    </h3>
                  </div>
                </div>

                <p class="mt-6 text-[17px] font-semibold text-[#3F2E83]">
                  {{ selectedPackage.subtitle }}
                </p>

                <p class="mt-4 text-[15px] leading-7 text-[#1a1a1a]/75">
                  {{ selectedPackage.description }}
                </p>

                <div class="mt-6 rounded-2xl bg-[#F8F6FF] p-5">
                  <p class="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#1a1a1a]">
                    What this package includes
                  </p>

                  <ul class="mt-4 space-y-3">
                    <li
                      v-for="item in selectedPackage.bullets"
                      :key="item"
                      class="flex items-start gap-3 text-[14px] leading-6 text-[#1a1a1a]/80"
                    >
                      <span class="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#FDC101]"></span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div class="mt-6 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-full border border-[#1a1a1a]/10 px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition hover:bg-[#1a1a1a]/5"
                    @click="closePackage"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
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