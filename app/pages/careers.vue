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
  <div class="text-[#1a1a1a]">
    <!-- HERO -->
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

    <!-- EMPLOYMENT -->
    <section class="px-4 md:px-8 lg:px-28 py-24 bg-white">
      <div class="grid gap-12 lg:grid-cols-12 items-start">
        <!-- LEFT -->
        <div class="lg:col-span-5">
          <div
            class="overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-[#F8F9FB]"
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
            <h2 class="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a]" >
              Employment Opportunities
            </h2>

            <p
              class="mt-5 text-[16px] leading-relaxed text-[#1a1a1a]/80 max-w-[56ch]"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              FACILIYA continuously develops a team of professionals committed to operational precision,
              accountability, and disciplined service delivery.
            </p>

            <div class="mt-8 flex justify-center sm:justify-start" data-aos="fade-up" data-aos-delay="360">
              <EmploymentApplicationModal />
            </div>
          </div>
        </div>

        <!-- RIGHT: TEAM STANDARDS -->
        <div class="lg:col-span-7">
          <div class="rounded-2xl border border-[#1a1a1a]/10 bg-white p-7 sm:p-10" >
            <p class="text-[#1a1a1a]/60 text-[13px] tracking-[2px] uppercase" >
              Team Standards
            </p>

            <!-- IMPORTANT: grid is fine. The overflow fix is on the cards themselves -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" data-aos="fade-up" data-aos-delay="0">
              <!-- Card base classes repeated to keep it simple & reliable:
                   overflow-hidden + min-w-0 fixes the “extra scroll” issue -->
              <div
                class="rounded-xl border border-[#1a1a1a]/10 bg-[#F8F9FB] p-5 sm:p-6 overflow-hidden min-w-0" data-aos="fade-up" data-aos-delay="0"
                
              >
                <div class="flex flex-col sm:flex-row sm:items-start gap-4 min-w-0">
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

              <div
                class="rounded-xl border border-[#1a1a1a]/10 bg-[#F8F9FB] p-5 sm:p-6 overflow-hidden min-w-0"
                
              >
                <div class="flex flex-col sm:flex-row sm:items-start gap-4 min-w-0">
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

              <div
                class="rounded-xl border border-[#1a1a1a]/10 bg-[#F8F9FB] p-5 sm:p-6 overflow-hidden min-w-0"
                
              >
                <div class="flex flex-col sm:flex-row sm:items-start gap-4 min-w-0">
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

              <div
                class="rounded-xl border border-[#1a1a1a]/10 bg-[#F8F9FB] p-5 sm:p-6 overflow-hidden min-w-0"
               
              >
                <div class="flex flex-col sm:flex-row sm:items-start gap-4 min-w-0">
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
            <!-- /grid -->
          </div>
        </div>
      </div>
    </section>

    <!-- VENDORS -->
    <section class="px-4 md:px-8 lg:px-28 py-24 bg-[#F7F7FB]" >
      <div class="max-w-3xl" data-aos="fade-up" data-aos-delay="0">
        <h2 class="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a]" >
          Vendor Partnerships
        </h2>

        <p class="mt-5 text-[16px] leading-relaxed text-[#1a1a1a]/80" >
          FACILIYA partners with qualified vendors and service providers across
          facilities management, residential operations, and event services.
          All vendor relationships operate under structured governance,
          compliance review, and operational accountability.
        </p>
      </div>

      <div class="mt-12 divide-y divide-[#1a1a1a]/10" data-aos="fade-up" data-aos-delay="0">
        <div class="py-7" >
          <div class="flex items-center gap-3 min-w-0">
            <FileCheck2 class="w-5 h-5 text-[#FDC101] shrink-0" />
            <h3 class="font-semibold text-[#1a1a1a] min-w-0">Compliance Review</h3>
          </div>
          <p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
            Vendors undergo structured compliance and documentation review
            before approval.
          </p>
        </div>

        <div class="py-7" >
          <div class="flex items-center gap-3 min-w-0">
            <Handshake class="w-5 h-5 text-[#FDC101] shrink-0" />
            <h3 class="font-semibold text-[#1a1a1a] min-w-0">Operational Alignment</h3>
          </div>
          <p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
            Vendor services must align with FACILIYA operational standards and
            service discipline.
          </p>
        </div>

        <div class="py-7" >
          <div class="flex items-center gap-3 min-w-0">
            <ClipboardCheck class="w-5 h-5 text-[#FDC101] shrink-0" />
            <h3 class="font-semibold text-[#1a1a1a] min-w-0">Performance Monitoring</h3>
          </div>
          <p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed break-words">
            Approved vendors operate under structured scope expectations and
            performance oversight.
          </p>
        </div>
      </div>

      <div class="mt-10 flex justify-center sm:justify-start"  >
        <VendorRegistrationForm  />
      </div>
    </section>
  </div>
</template>