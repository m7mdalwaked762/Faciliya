<script setup>
import {
  Users,
  Clock,
  ShieldCheck,
  Award,
  ClipboardCheck,
  Handshake,
  FileCheck2,
} from "lucide-vue-next"

useSeoMeta({
  title: "Careers & Partnerships | FACILIYA",
  description:
    "FACILIYA collaborates with disciplined professionals and qualified service providers who align with our structured operational standards. Employment and vendor engagements operate under performance accountability, compliance standards, and service discipline.",
  ogTitle: "Careers & Partnerships | FACILIYA",
  ogDescription:
    "Employment opportunities and vendor partnerships under structured governance and operational accountability.",
  twitterTitle: "Careers & Partnerships | FACILIYA",
  twitterDescription:
    "Join FACILIYA as an employee or vendor partner in our governance-driven operations network.",
  robots: "index, follow",
})
</script>

<template>
  <div class="bg-white">
    <!-- HERO (UNCHANGED) -->
    <section class="relative overflow-hidden bg-[#3F2E83] text-white">
      <div class="absolute inset-0 opacity-30" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
          alt="Corporate skyline"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-br from-[#3F2E83] via-[#3F2E83]/90 to-[#1a1a1a]/80"></div>

      <div class="relative py-24 px-4 md:px-8 lg:px-28">
        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase" data-aos="fade-up" data-aos-delay="0">
          Careers & Partnerships
        </p>

        <h1
          class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          Build With FACILIYA
        </h1>

        <p
          class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="240"
        >
          FACILIYA collaborates with disciplined professionals and qualified service providers
          who align with our structured operational standards. Whether you are seeking employment
          or vendor partnership, all engagements operate under performance accountability,
          compliance standards, and service discipline.
        </p>

        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]" data-aos="fade-up" data-aos-delay="320">
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">Home</NuxtLink>
          <span class="mx-2">›</span>
          <span class="font-medium">Careers & Partnerships</span>
        </div>
      </div>
    </section>

    <!-- REST OF PAGE (same hero purple, NO gradients, corner glows, no borders) -->
    <section class="relative overflow-hidden bg-[#3F2E83] text-white">
      <!-- light depth only -->
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- corner glows -->
      <div class="pointer-events-none absolute inset-0">
        <!-- top-left white glow -->
        <div class="absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full bg-white/12 blur-3xl"></div>
        <!-- bottom-right yellow glow -->
        <div class="absolute -right-48 -bottom-56 w-[680px] h-[680px] rounded-full bg-[#FDC101]/12 blur-3xl"></div>
        <!-- small top-right soft glow -->
        <div class="absolute -right-40 -top-48 w-[520px] h-[520px] rounded-full bg-white/8 blur-3xl"></div>

        <!-- accent line -->
      </div>

      <!-- prevent horizontal scroll from animations -->
      <div class="relative overflow-x-hidden">
        <!-- EMPLOYMENT -->
        <section class="px-4 md:px-8 lg:px-28 py-24">
          <div class="grid gap-12 lg:grid-cols-12 items-start">
            <!-- LEFT -->
            <div class="lg:col-span-5">
              <div
                class="overflow-hidden rounded-2xl bg-white/10 shadow-xl shadow-black/20"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80"
                  alt="Employment interview handshake"
                  class="w-full h-[220px] sm:h-[260px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>

              <div class="mt-8">
                <h2 class="text-[28px] md:text-[32px] font-semibold text-white" data-aos="fade-up" data-aos-delay="120">
                  Employment Opportunities
                </h2>

                <p
                  class="mt-5 text-[16px] leading-relaxed text-white/80 max-w-[56ch]"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  FACILIYA continuously develops a team of professionals committed to operational precision,
                  accountability, and disciplined service delivery.
                </p>

                <div class="mt-8 flex justify-center sm:justify-start" data-aos="fade-up" data-aos-delay="320">
                  <EmploymentApplicationModal />
                </div>
              </div>
            </div>

            <!-- RIGHT -->
            <div class="lg:col-span-7">
              <div class="rounded-2xl bg-white/10 backdrop-blur-sm p-7 sm:p-10 shadow-xl shadow-black/20">
                <p class="text-white/70 text-[13px] tracking-[2px] uppercase">
                  Team Standards
                </p>

                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <!-- Card 1 -->
                  <div class="rounded-2xl bg-white p-6 shadow-lg shadow-black/15" data-aos="fade-up" data-aos-delay="0">
                    <div class="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div class="w-12 h-12 rounded-full bg-[#FDC101]/15 flex items-center justify-center shrink-0">
                        <Users class="w-6 h-6 text-[#FDC101]" />
                      </div>
                      <div class="min-w-0">
                        <h3 class="font-semibold text-[#1a1a1a] text-[16px] leading-snug">
                          Professional Conduct
                        </h3>
                        <p class="mt-2 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
                          Employees represent FACILIYA through professionalism, discipline, and service awareness.
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Card 2 -->
                  <div class="rounded-2xl bg-white p-6 shadow-lg shadow-black/15" data-aos="fade-up" data-aos-delay="120">
                    <div class="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div class="w-12 h-12 rounded-full bg-[#FDC101]/15 flex items-center justify-center shrink-0">
                        <Clock class="w-6 h-6 text-[#FDC101]" />
                      </div>
                      <div class="min-w-0">
                        <h3 class="font-semibold text-[#1a1a1a] text-[16px] leading-snug">
                          Reliability
                        </h3>
                        <p class="mt-2 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
                          Consistent punctuality and reliability across operational responsibilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Card 3 -->
                  <div class="rounded-2xl bg-white p-6 shadow-lg shadow-black/15" data-aos="fade-up" data-aos-delay="240">
                    <div class="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div class="w-12 h-12 rounded-full bg-[#FDC101]/15 flex items-center justify-center shrink-0">
                        <ShieldCheck class="w-6 h-6 text-[#FDC101]" />
                      </div>
                      <div class="min-w-0">
                        <h3 class="font-semibold text-[#1a1a1a] text-[16px] leading-snug">
                          Operational Discipline
                        </h3>
                        <p class="mt-2 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
                          Roles operate under structured procedures and defined service protocols.
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Card 4 -->
                  <div class="rounded-2xl bg-white p-6 shadow-lg shadow-black/15" data-aos="fade-up" data-aos-delay="360">
                    <div class="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div class="w-12 h-12 rounded-full bg-[#FDC101]/15 flex items-center justify-center shrink-0">
                        <Award class="w-6 h-6 text-[#FDC101]" />
                      </div>
                      <div class="min-w-0">
                        <h3 class="font-semibold text-[#1a1a1a] text-[16px] leading-snug">
                          Performance Standards
                        </h3>
                        <p class="mt-2 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
                          All team members align with measurable service performance expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-10 h-[2px] w-16 bg-[#FDC101]/80"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- VENDORS -->
        <section class="px-4 md:px-8 lg:px-28 pb-24">
          <div class="max-w-3xl" data-aos="fade-up" data-aos-delay="0">
            <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold">
              Partnerships
            </p>

            <h2 class="mt-3 text-[28px] md:text-[32px] font-semibold text-white">
              Vendor Partnerships
            </h2>

            <p class="mt-5 text-[16px] leading-relaxed text-white/80">
              FACILIYA partners with qualified vendors and service providers across
              facilities management, residential operations, and event services.
              All vendor relationships operate under structured governance,
              compliance review, and operational accountability.
            </p>
          </div>

          <!-- simple panel (no borders, no divide classes) -->
          <div class="mt-12 rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl shadow-black/20 p-7 sm:p-10">
            <!-- item 1 -->
            <div class="py-2">
              <div class="flex items-center gap-3 min-w-0">
                <FileCheck2 class="w-5 h-5 text-[#FDC101] shrink-0" />
                <h3 class="font-semibold text-white min-w-0">Compliance Review</h3>
              </div>
              <p class="mt-3 text-[14px] text-white/80 leading-relaxed break-words">
                Vendors undergo structured compliance and documentation review
                before approval.
              </p>
            </div>

            <div class="my-7 h-px bg-white/12"></div>

            <!-- item 2 -->
            <div class="py-2">
              <div class="flex items-center gap-3 min-w-0">
                <Handshake class="w-5 h-5 text-[#FDC101] shrink-0" />
                <h3 class="font-semibold text-white min-w-0">Operational Alignment</h3>
              </div>
              <p class="mt-3 text-[14px] text-white/80 leading-relaxed break-words">
                Vendor services must align with FACILIYA operational standards and
                service discipline.
              </p>
            </div>

            <div class="my-7 h-px bg-white/12"></div>

            <!-- item 3 -->
            <div class="py-2">
              <div class="flex items-center gap-3 min-w-0">
                <ClipboardCheck class="w-5 h-5 text-[#FDC101] shrink-0" />
                <h3 class="font-semibold text-white min-w-0">Performance Monitoring</h3>
              </div>
              <p class="mt-3 text-[14px] text-white/80 leading-relaxed break-words">
                Approved vendors operate under structured scope expectations and
                performance oversight.
              </p>
            </div>

            <div class="mt-10 h-[2px] w-16 bg-[#FDC101]/80"></div>

            <div class="mt-10 flex justify-center sm:justify-start">
              <VendorRegistrationForm />
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>