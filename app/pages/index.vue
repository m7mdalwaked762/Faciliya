<template>
  <div class="flex flex-col">
    <!-- ✅ HERO (kept same structure; only fixed the missing overlay bg class) -->
    <div class="relative -mt-[72px] h-[100dvh] overflow-hidden text-white font-[Roboto]">
      <!-- BACKGROUND SWIPER -->
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="h-full w-full"
      >
        <SwiperSlide>
          <img
            src="/img/1-1.jpg"
            alt=""
            class="h-[100dvh] w-full object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/img/321.png" alt="" class="h-[100dvh] w-full object-cover object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/img/213.webp" alt="" class="h-[100dvh] w-full object-cover object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/img/1234.webp" alt="" class="h-[100dvh] w-full object-cover object-center" />
        </SwiperSlide>
      </Swiper>

      <!-- STRONG DARK OVERLAY (✅ fixed: add bg-gradient-to-b) -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b
               from-[#3A2D7F]/55 via-black/75 to-black/65"
      ></div>

      <!-- FIXED CONTENT -->
      <div class="absolute inset-0 z-10 flex items-center">
        <div class="w-full px-4 md:px-8 lg:px-28">
          <div class="max-w-[680px]">
            <h1
              class="text-[clamp(2rem,4vw,3.5rem)]
                     font-extrabold leading-tight
                     drop-shadow-[0_4px_25px_rgba(0,0,0,0.7)]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              FACILIYA LLC <br />
              Structured Operations. Intelligent Oversight. Reliable Execution.
            </h1>

            <p
              class="mt-5 text-white/95 leading-relaxed text-[16px] sm:text-[18px] drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Integrated Facilities Management, Private Staffing, and Event Support Services across Texas.
            </p>

            <div class="mt-8 flex flex-wrap gap-5" data-aos="fade-up" data-aos-delay="0">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ ONE UNIFIED BACKGROUND FOR THE REST OF THE PAGE -->
    <div class="relative overflow-hidden text-white">
      <div class="absolute inset-0 bg-gradient-to-b from-[#3A2D7F] via-[#2b215e] to-black/55"></div>

      <!-- accents (NO squares, NO borders) -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-48 -top-48 w-[680px] h-[680px] rounded-full bg-white/10 blur-3xl"></div>
        <div class="absolute -right-64 bottom-[-420px] w-[900px] h-[900px] rounded-full bg-[#FDC101]/10 blur-3xl"></div>
        <div class="absolute left-0 top-24 h-[2px] w-[320px] bg-[#FDC101]/75"></div>
        <div class="absolute -right-24 top-[45%] w-[520px] h-[2px] -rotate-12 bg-white/10"></div>
      </div>

      <div class="relative">
        <!-- OUR DIVISIONS (NO borders) -->
        <section class="px-4 md:px-8 lg:px-28 py-20">
          <div class="text-center max-w-3xl mx-auto">
            <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
              Divisions
            </p>

            <h2 class="mt-3 text-[32px] md:text-[40px] font-semibold text-white tracking-tight" data-aos="fade-up" data-aos-delay="120">
              Our Divisions
            </h2>

            <p class="mt-4 text-[16px] md:text-[18px] text-white/85 leading-relaxed" data-aos="fade-up" data-aos-delay="220">
              Structured operational delivery across corporate, private, and event environments.
            </p>
          </div>

          <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Card 1 -->
            <div
              class="group flex flex-col justify-between rounded-2xl p-10 min-h-[340px]
                     bg-white shadow-[0_18px_60px_rgba(0,0,0,0.22)]
                     transition-all duration-300
                     hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div>
                <div class="w-[80px] h-[80px] rounded-full bg-[#3A2D7F]/6 flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FDC101]" viewBox="0 0 24 24">
                    <g fill="none">
                      <path
                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018"
                      />
                      <path
                        fill="currentColor"
                        d="M21 7a1 1 0 1 1 0 2v10a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2V9a1 1 0 0 1 0-2zM7 11a1 1 0 0 0-1 1v7h2v-7a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v7h2v-7a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v7h2v-7a1 1 0 0 0-1-1m1-7a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z"
                      />
                    </g>
                  </svg>
                </div>

                <h3 class="text-[20px] font-semibold text-[#1a1a1a] tracking-wide">
                  Corporate &amp; Asset Governance
                </h3>

                <div class="mt-6 w-12 h-[2px] bg-[#FDC101] transition-all duration-300 group-hover:w-20"></div>

                <p class="mt-6 text-[15px] text-[#1a1a1a]/70 leading-relaxed">
                  Integrated Facilities Management powered by structured governance architecture and operational intelligence.
                </p>
              </div>

              <NuxtLink
                to="/Corporate_Asset_Governance"
                class="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-[#3A2D7F] hover:text-[#FDC101] transition"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </NuxtLink>
            </div>

            <!-- Card 2 -->
            <div
              class="group flex flex-col justify-between rounded-2xl p-10 min-h-[340px]
                     bg-white shadow-[0_18px_60px_rgba(0,0,0,0.22)]
                     transition-all duration-300
                     hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <div>
                <div class="w-[80px] h-[80px] rounded-full bg-[#3A2D7F]/6 flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FDC101]" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M17.55 12L14 8.45l1.425-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"
                    />
                  </svg>
                </div>

                <h3 class="text-[20px] font-semibold text-[#1a1a1a] tracking-wide">
                  Private Client Staffing
                </h3>

                <div class="mt-6 w-12 h-[2px] bg-[#FDC101] transition-all duration-300 group-hover:w-20"></div>

                <p class="mt-6 text-[15px] text-[#1a1a1a]/70 leading-relaxed">
                  Monthly-based residential staffing solutions delivered with discretion, reliability, and structured oversight.
                </p>
              </div>

              <NuxtLink
                to="/Private_Services"
                class="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-[#3A2D7F] hover:text-[#FDC101] transition"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </NuxtLink>
            </div>

            <!-- Card 3 -->
            <div
              class="group flex flex-col justify-between rounded-2xl p-10 min-h-[340px]
                     bg-white shadow-[0_18px_60px_rgba(0,0,0,0.22)]
                     transition-all duration-300
                     hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <div>
                <div class="w-[80px] h-[80px] rounded-full bg-[#3A2D7F]/6 flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FDC101]" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m10.95 15.45l3.475-3.475q.3-.3.725-.3t.725.3t.3.725t-.3.725L11.65 17.65q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
                    />
                  </svg>
                </div>

                <h3 class="text-[20px] font-semibold text-[#1a1a1a] tracking-wide">
                  Events &amp; Occasion Services
                </h3>

                <div class="mt-6 w-12 h-[2px] bg-[#FDC101] transition-all duration-300 group-hover:w-20"></div>

                <p class="mt-6 text-[15px] text-[#1a1a1a]/70 leading-relaxed">
                  Disciplined operational support for private and corporate events requiring professional execution.
                </p>
              </div>

              <NuxtLink
                to="/Event_Services"
                class="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-[#3A2D7F] hover:text-[#FDC101] transition"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-14 flex justify-center" data-aos="fade-up" data-aos-delay="360">
            <div class="h-[2px] w-16 bg-[#FDC101]/80"></div>
          </div>
        </section>

        <!-- CERTIFICATIONS (NO borders) -->
        <section class="px-4 md:px-8 lg:px-28 py-14">
          <div class="text-center max-w-3xl mx-auto">
            <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
              Certifications
            </p>

            <h2
              class="mt-3 text-center font-semibold text-white text-[22px] sm:text-[26px] lg:text-[32px]"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              Certifications &amp; Industry Alignment
            </h2>

            <p class="mt-4 text-[15px] sm:text-[16px] text-white/80 leading-relaxed" data-aos="fade-up" data-aos-delay="220">
              Standards-aligned operations supported by industry credentials and professional frameworks.
            </p>
          </div>

          <!-- clean band (no borders) -->
          <div
            class="mt-10 rounded-2xl bg-white/6 px-6 py-8 sm:px-10 sm:py-10
                   shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
            data-aos="fade-up"
            data-aos-delay="320"
          >
            <div
              class="flex flex-col items-center gap-8
                     sm:flex-row sm:flex-wrap sm:justify-center
                     lg:flex-row lg:justify-between"
            >
              <img src="/logos/boma.png" alt="BOMA" class="h-14 lg:h-16 w-auto object-contain" loading="lazy" />
              <img src="/logos/usgbc.png" alt="USGBC" class="h-16 lg:h-20 w-auto object-contain" loading="lazy" />
              <img src="/logos/leed-ga.png" alt="LEED Green Associate" class="h-16 lg:h-20 w-auto object-contain" loading="lazy" />
              <img src="/logos/osha.png" alt="OSHA" class="h-14 lg:h-16 w-auto object-contain" loading="lazy" />
              <img src="/logos/ifma-dfw.png" alt="IFMA Dallas/Fort Worth Chapter" class="h-14 lg:h-16 w-auto object-contain" loading="lazy" />
            </div>

            <p class="mt-8 text-center text-white/65 text-[13px] tracking-[1px]">
              Credential-backed execution • Compliance alignment • Performance discipline
            </p>
          </div>

          <!-- chips (no borders) -->
          <div class="mt-8 flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="420">
            <span class="px-4 py-2 rounded-full bg-white/10 text-white/80 text-[12px] backdrop-blur-sm">BOMA aligned</span>
            <span class="px-4 py-2 rounded-full bg-white/10 text-white/80 text-[12px] backdrop-blur-sm">LEED-informed</span>
            <span class="px-4 py-2 rounded-full bg-white/10 text-white/80 text-[12px] backdrop-blur-sm">OSHA-aware</span>
            <span class="px-4 py-2 rounded-full bg-white/10 text-white/80 text-[12px] backdrop-blur-sm">IFMA networked</span>
          </div>
        </section>

        <!-- FACILITIES GOVERNANCE (NO borders + NO square highlights) -->
        <section class="px-4 md:px-8 lg:px-28 py-24">
          <div class="grid gap-16 lg:grid-cols-12 items-start">
            <!-- LEFT -->
            <div class="lg:col-span-5">
              <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
                Facilities Governance
              </p>

              <h2
                class="mt-4 text-white font-semibold leading-[1.08]
                       text-[34px] sm:text-[44px] lg:text-[56px]"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                Structured<br />
                Facilities<br />
                Management<br />
                That Delivers<br />
                Results
              </h2>

              <div class="mt-8 h-[2px] w-16 bg-[#FDC101]/80" data-aos="fade-up" data-aos-delay="180"></div>

              <p
                class="mt-6 text-white/80 leading-relaxed
                       text-[16px] sm:text-[18px] lg:text-[19px] max-w-[520px]"
                data-aos="fade-up"
                data-aos-delay="220"
              >
                Faciliya operates facilities through a disciplined, integrated system designed to eliminate guesswork and
                reduce risk. Our approach brings clarity to daily operations, ensures consistent service delivery, and
                provides full visibility into performance.
              </p>

              <div class="mt-8 flex flex-wrap items-center gap-5" data-aos="fade-up" data-aos-delay="320">
                <NuxtLink
                  to="/about"
                  class="rounded-[10px] bg-[#FDC101]
                         px-6 py-3.5 text-[15px] font-semibold text-[#3A2D7F]
                         hover:opacity-90 transition"
                  type="button"
                >
                  Learn More
                </NuxtLink>

                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-2 text-[15px] font-medium text-white hover:text-[#FDC101] transition"
                  type="button"
                >
                  Contact Us <span aria-hidden="true">›</span>
                </NuxtLink>
              </div>
            </div>

            <!-- RIGHT -->
            <div class="lg:col-span-7">
              <div class="rounded-[28px] bg-white/8 px-6 sm:px-8 lg:px-10 py-10 sm:py-12 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-14 lg:gap-y-16">
                  <!-- Feature 1 -->
                  <div data-aos="fade-up" data-aos-delay="0">
                    <div class="mb-5 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                        <path fill="#fdc101" d="M6 23q-1.25 0-2.125-.875T3 20t.875-2.125T6 17q.35 0 .65.075t.575.2L8.65 15.5q-.7-.775-.975-1.75T7.55 11.8l-2.025-.675q-.425.625-1.075 1T3 12.5q-1.25 0-2.125-.875T0 9.5t.875-2.125T3 6.5t2.125.875T6 9.5v.2l2.025.7q.5-.9 1.338-1.525t1.887-.8V5.9q-.975-.275-1.612-1.063T9 3q0-1.25.875-2.125T12 0t2.125.875T15 3q0 1.05-.65 1.838T12.75 5.9v2.175q1.05.175 1.888.8t1.337 1.525L18 9.7v-.2q0-1.25.875-2.125T21 6.5t2.125.875T24 9.5t-.875 2.125T21 12.5q-.8 0-1.463-.375t-1.062-1l-2.025.675q.15.975-.125 1.938T15.35 15.5l1.425 1.75q.275-.125.575-.187T18 17q1.25 0 2.125.875T21 20t-.875 2.125T18 23t-2.125-.875T15 20q0-.5.163-.962t.437-.838l-1.425-1.775Q13.15 17 11.988 17T9.8 16.425L8.4 18.2q.275.375.438.838T9 20q0 1.25-.875 2.125T6 23" />
                      </svg>
                    </div>

                    <h3 class="text-white font-semibold text-[18px] lg:text-[20px]">Single Point of Control</h3>
                    <div class="mt-4 h-[2px] w-10 bg-[#FDC101]/80"></div>
                    <p class="mt-3 text-white/80 leading-relaxed text-[14px] lg:text-[15px]">
                      A centralized operational lead manages all service lines, communication, and escalation—eliminating
                      confusion and fragmented responsibility.
                    </p>
                  </div>

                  <!-- Feature 2 -->
                  <div data-aos="fade-up" data-aos-delay="120">
                    <div class="mb-5 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                        <path fill="#fdc101" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4" />
                      </svg>
                    </div>

                    <h3 class="text-white font-semibold text-[18px] lg:text-[20px]">Maintenance Focus</h3>
                    <div class="mt-4 h-[2px] w-10 bg-[#FDC101]/80"></div>
                    <p class="mt-3 text-white/80 leading-relaxed text-[14px] lg:text-[15px]">
                      Planned inspections and maintenance routines reduce system failures, downtime, and costly reactive repairs.
                    </p>
                  </div>

                  <!-- Feature 3 -->
                  <div data-aos="fade-up" data-aos-delay="240">
                    <div class="mb-5 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                        <path fill="#fdc101" d="M2 21v-2h20v2zm1-3v-7h3v7zm5 0V6h3v12zm5 0V9h3v9zm5 0V3h3v15z" />
                      </svg>
                    </div>

                    <h3 class="text-white font-semibold text-[18px] lg:text-[20px]">Reporting &amp; Visibility</h3>
                    <div class="mt-4 h-[2px] w-10 bg-[#FDC101]/80"></div>
                    <p class="mt-3 text-white/80 leading-relaxed text-[14px] lg:text-[15px]">
                      Clear reporting provides insight into trends, risks, and priorities—supporting informed decisions and
                      long-term operational improvement.
                    </p>
                  </div>

                  <!-- Feature 4 -->
                  <div data-aos="fade-up" data-aos-delay="360">
                    <div class="mb-5 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                        <path fill="#fdc101" d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5M6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5m5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2M6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3" />
                      </svg>
                    </div>

                    <h3 class="text-white font-semibold text-[18px] lg:text-[20px]">Vendor Coordination</h3>
                    <div class="mt-4 h-[2px] w-10 bg-[#FDC101]/80"></div>
                    <p class="mt-3 text-white/80 leading-relaxed text-[14px] lg:text-[15px]">
                      Licensed and insured partners are managed under one coordinated system with defined scopes, performance tracking, and accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- /RIGHT -->
          </div>
        </section>

        <!-- TESTIMONIALS (NO borders) -->
        <section class="px-4 md:px-8 lg:px-28 py-24">
          <div class="text-center max-w-[820px] mx-auto">
            <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold" data-aos="fade-up" data-aos-delay="0">
              Testimonials
            </p>

            <h2 class="mt-3 text-white font-semibold text-[28px] sm:text-[34px] lg:text-[40px]" data-aos="fade-up" data-aos-delay="120">
              What Our Clients Say
            </h2>

            <p class="mt-4 text-white/80 text-[14px] sm:text-[15px] leading-relaxed" data-aos="fade-up" data-aos-delay="220">
              Hear from property owners and managers who trust Faciliya to deliver consistent, reliable, and structured
              facilities management. Their experiences reflect our commitment to accountability, quality, and operational excellence.
            </p>
          </div>

          <div class="mt-12 relative" data-aos="fade-up" data-aos-delay="320">
            <button
              class="swiperPrev absolute left-0 top-1/2 -translate-y-1/2 z-10
                     h-[42px] w-[42px] rounded-full bg-white/10
                     flex items-center justify-center shadow-sm
                     hover:bg-white/15 transition text-white"
              type="button"
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            <button
              class="swiperNext absolute right-0 top-1/2 -translate-y-1/2 z-10
                     h-[42px] w-[42px] rounded-full bg-white/10
                     flex items-center justify-center shadow-sm
                     hover:bg-white/15 transition text-white"
              type="button"
              aria-label="Next testimonial"
            >
              ›
            </button>

            <Swiper
              :modules="modules"
              :loop="true"
              :spaceBetween="18"
              :pagination="{ clickable: true, el: '.customPagination' }"
              :navigation="{ prevEl: '.swiperPrev', nextEl: '.swiperNext' }"
              :breakpoints="breakpoints"
              class="px-12"
            >
              <SwiperSlide v-for="(t, i) in testimonials" :key="i">
                <div
                  class="h-[260px] flex flex-col rounded-[14px] bg-white
                         px-6 py-6
                         shadow-[0_14px_40px_rgba(0,0,0,0.25)]
                         transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.30)]"
                >
                  <div class="flex-1 overflow-hidden">
                    <div class="flex items-center gap-1">
                      <span v-for="s in 5" :key="s" class="text-[#FDC101] text-[13px] leading-none" aria-hidden="true">★</span>
                      <span class="sr-only">5 out of 5 stars</span>
                    </div>

                    <p class="mt-4 text-[#1a1a1a]/75 text-[13px] leading-relaxed text-left">
                      “{{ t.quote }}”
                    </p>
                  </div>

                  <div class="h-px w-full bg-[#3A2D7F]/12 my-4"></div>

                  <div class="text-left">
                    <p class="text-[#1a1a1a] font-semibold text-[12px]">{{ t.name }}</p>
                    <p class="text-[#1a1a1a]/60 text-[11px] mt-1">{{ t.role }}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div class="customPagination mt-8 flex justify-center"></div>

            <div class="mt-10 flex justify-center">
              <div class="h-[2px] w-16 bg-[#FDC101]/70"></div>
            </div>
          </div>
        </section>

        <!-- STATS (kept; already no borders) -->
        <section ref="sectionRef" class="px-4 md:px-8 lg:px-28 py-20">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div class="lg:col-span-6" data-aos="fade-up" data-aos-delay="0">
              <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold">Performance Snapshot</p>
              <h2 class="mt-4 font-extrabold leading-[1.12] text-[28px] sm:text-[36px] lg:text-[44px]">
                Reliable Operations. Measurable
                <br class="hidden sm:block" />
                Performance. Total Control.
              </h2>
            </div>

            <div class="lg:col-span-6" data-aos="fade-up" data-aos-delay="120">
              <p class="text-white/80 leading-[1.7] text-[14px] sm:text-[15px] lg:text-[16px] max-w-[560px] lg:ml-auto">
                Faciliya ensures your properties operate smoothly through structured workflows, disciplined oversight,
                and coordinated service management. From preventive maintenance and soft services to security and project
                coordination, we provide measurable results that protect asset value, improve efficiency, and enhance the
                experience of every occupant.
              </p>
            </div>
          </div>

          <div class="mt-12 sm:mt-14 lg:mt-16">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0">
              <div
                v-for="s in stats"
                :key="s.label"
                class="py-6 sm:py-8 flex flex-col items-start sm:items-center text-left sm:text-center"
                data-aos="fade-up"
                :data-aos-delay="s.value === 40 ? 0 : s.value === 35 ? 120 : 240"
              >
                <div class="relative" :style="{ width: size + 'px', height: size + 'px' }" data-stat :data-target="s.value">
                  <svg :width="size" :height="size" class="block">
                    <circle :cx="size / 2" :cy="size / 2" :r="r" fill="none" :stroke-width="stroke" stroke="rgba(255,255,255,0.16)" />
                    <circle
                      data-ring
                      :cx="size / 2"
                      :cy="size / 2"
                      :r="r"
                      fill="none"
                      :stroke-width="stroke"
                      stroke="#FDC101"
                      stroke-linecap="round"
                      :stroke-dasharray="circumference"
                      :stroke-dashoffset="circumference"
                      :transform="`rotate(-90 ${size / 2} ${size / 2})`"
                    />
                  </svg>

                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="font-extrabold leading-none text-[26px] sm:text-[28px] text-white">
                      +<span data-num>0</span>%
                    </div>
                  </div>
                </div>

                <div class="mt-6 font-semibold text-[13px] sm:text-[18px] text-white/90">{{ s.label }}</div>
                <div class="mt-3 h-[2px] w-10 bg-[#FDC101]/80 sm:mx-auto"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ (NO borders) -->
        <section class="px-4 md:px-8 lg:px-28 py-24">
          <div class="text-center max-w-[720px] mx-auto" data-aos="fade-up" data-aos-delay="0">
            <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold">FAQ</p>
            <h2 class="mt-3 font-semibold text-[26px] sm:text-[32px] lg:text-[38px] text-white">
              Frequently asked questions
            </h2>
            <p class="mt-4 text-white/80 text-[13px] sm:text-[14px] leading-relaxed">
              Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
              to action, they may still have questions (doubts) that can be answered.
            </p>
          </div>

          <div class="mt-12 max-w-[680px] mx-auto space-y-4" data-aos="fade-up" data-aos-delay="140">
            <div v-for="(item, i) in faqs" :key="i" class="rounded-[14px] bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)] overflow-hidden">
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

        <!-- CONTACT (NO borders) -->
        <section class="px-4 md:px-8 lg:px-28 py-24">
          <div class="text-center" data-aos="fade-up" data-aos-delay="0">
            <p class="text-[#FDC101] text-[13px] tracking-[2px] uppercase font-semibold">Contact</p>
            <h2 class="mt-3 text-[30px] md:text-[36px] font-semibold text-white">Direct Contact Information</h2>
            <p class="mt-4 text-[17px] text-white/80 max-w-xl mx-auto">
              Reach us directly for inquiries, partnership discussions, or consultation requests.
            </p>
          </div>

          <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="140">
            <div class="bg-white rounded-2xl text-center px-10 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition" data-aos="fade-up" data-aos-delay="0">
              <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
                <Phone class="w-8 h-8 text-[#FDC101]" />
              </div>
              <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">Phone</h3>
              <a href="tel:+19724825958" class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3A2D7F] transition">
                +1 (972) 482-5958
              </a>
              <div class="mt-6 h-[2px] w-12 bg-[#FDC101]/80 mx-auto"></div>
            </div>

            <div class="bg-white rounded-2xl text-center px-10 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition" data-aos="fade-up" data-aos-delay="120">
              <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
                <Mail class="w-8 h-8 text-[#FDC101]" />
              </div>
              <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">Email</h3>
              <a href="mailto:info@faciliyallc.com" class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3A2D7F] transition">
                info@faciliyallc.com
              </a>
              <div class="mt-6 h-[2px] w-12 bg-[#FDC101]/80 mx-auto"></div>
            </div>

            <div class="bg-white rounded-2xl text-center px-10 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition" data-aos="fade-up" data-aos-delay="240">
              <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
                <MapPin class="w-8 h-8 text-[#FDC101]" />
              </div>
              <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">Location</h3>
              <a href="https://maps.google.com/?q=Dallas+Texas" target="_blank" class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3A2D7F] transition">
                Dallas, Texas
              </a>
              <div class="mt-6 h-[2px] w-12 bg-[#FDC101]/80 mx-auto"></div>
            </div>
          </div>

          <div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="320">
            <ConsultationForm />
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
            class="mt-10 inline-flex items-center justify-center rounded-[12px] bg-[#FDC101]
                   px-10 py-4 text-[16px] font-semibold text-[#3A2D7F]
                   hover:brightness-95 active:brightness-90 transition"
            type="button"
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
  </div>
</template>

<script setup>
import { Phone, Mail, MapPin } from "lucide-vue-next"

import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { ref, onMounted, onBeforeUnmount } from "vue"

const modules = [Autoplay, Pagination, Navigation, A11y]

/* Testimonials */
const breakpoints = {
  0: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
}

const testimonials = [
  {
    quote:
      "Faciliya introduced operational structure where we previously had fragmentation. Vendor coordination, maintenance tracking, and reporting now operate within one disciplined framework. The improvement in oversight has been measurable.",
    name: "David R.",
    role: "Asset Manager, Commercial Portfolio",
  },
  {
    quote:
      "Their approach is methodical and controlled. Faciliya does not simply provide services—they operate the facility with accountability and documented performance standards.",
    name: "Melissa K.",
    role: "Director of Operations, Mixed-Use Property",
  },
  {
    quote:
      "We required consistency across multiple service lines. Faciliya implemented preventive maintenance protocols that significantly reduced recurring issues and improved response time.",
    name: "James L.",
    role: "Property Owner, High-Rise Residential",
  },
  {
    quote:
      "What distinguishes Faciliya is their structured oversight. Every task, vendor, and service cycle is monitored within a defined operational system.",
    name: "Sophia M.",
    role: "Operations Lead, Hospitality Environment",
  },
  {
    quote:
      "Faciliya stabilized our daily operations within the first quarter of engagement. Communication improved, performance metrics became transparent, and operational risk was reduced.",
    name: "Robert H.",
    role: "Portfolio Manager, Multifamily Communities",
  },
  {
    quote:
      "Their reporting cadence and governance structure provide clarity to ownership. Decisions are now based on data rather than reactive maintenance.",
    name: "Andrew T.",
    role: "Senior Property Executive",
  },
]

/* Stats circles animation */
const sectionRef = ref(null)

const stats = [
  { label: "Reduced Downtime", value: 40 },
  { label: "Increased Efficiency", value: 35 },
  { label: "Higher Occupant Satisfaction", value: 50 },
]

const size = 150
const stroke = 12
const r = (size - stroke) / 2
const circumference = 2 * Math.PI * r

let io = null
let rafIds = []

const clamp01 = (n) => Math.max(0, Math.min(1, n))
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

function animateStat(el, target, duration) {
  const ring = el.querySelector("[data-ring]")
  const num = el.querySelector("[data-num]")

  const start = performance.now()

  const tick = (now) => {
    const t = clamp01((now - start) / duration)
    const e = easeOutCubic(t)

    const value = Math.round(target * e)
    if (num) num.textContent = value
    if (ring) ring.style.strokeDashoffset = String(circumference * (1 - e))

    if (t < 1) rafIds.push(requestAnimationFrame(tick))
  }

  rafIds.push(requestAnimationFrame(tick))
}

function setFinal(el, target) {
  const ring = el.querySelector("[data-ring]")
  const num = el.querySelector("[data-num]")
  if (num) num.textContent = target
  if (ring) ring.style.strokeDashoffset = "0"
}

onMounted(() => {
  if (!sectionRef.value) return

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const statEls = Array.from(sectionRef.value.querySelectorAll("[data-stat]"))

  statEls.forEach((el) => {
    const ring = el.querySelector("[data-ring]")
    if (ring) {
      ring.style.strokeDasharray = String(circumference)
      ring.style.strokeDashoffset = String(circumference)
    }
  })

  if (prefersReduced) {
    statEls.forEach((el) => setFinal(el, Number(el.getAttribute("data-target") || 0)))
    return
  }

  let started = false

  io = new IntersectionObserver(
    (entries) => {
      if (started) return
      const entry = entries[0]
      if (!entry || !entry.isIntersecting) return

      started = true
      statEls.forEach((el) => {
        const target = Number(el.getAttribute("data-target") || 0)
        animateStat(el, target, 1400)
      })

      io && io.disconnect()
      io = null
    },
    { threshold: 0.35 }
  )

  io.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  if (io) io.disconnect()
  rafIds.forEach((id) => cancelAnimationFrame(id))
  rafIds = []
})

/* FAQ */
const openIndex = ref(0)

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

/* SEO */
const SITE = "https://faciliyallc.com"
const URL = `${SITE}/`

useSeoMeta({
  title: "Home - Faciliya | Integrated Facilities Management",
  description:
    "Faciliya is an Integrated Facilities Management (IFM) partner for commercial, mixed-use, and multifamily environments—stabilizing daily operations, protecting asset value, and aligning performance with sustainability-minded practices.",
  ogTitle: "Faciliya | Integrated Facilities Management",
  ogDescription:
    "Structured IFM operations that stabilize daily performance, reduce disruption, and protect long-term asset value.",
  twitterCard: "summary",
  twitterTitle: "Faciliya | Integrated Facilities Management",
  twitterDescription:
    "Structured IFM operations that stabilize daily performance and protect long-term asset value.",
})

useHead({
  link: [{ rel: "canonical", href: URL }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Faciliya",
        url: SITE,
        email: "info@faciliyallc.com",
        description:
          "Integrated Facilities Management partner delivering structured operations, disciplined oversight, and sustainability-minded performance practices.",
      }),
    },
  ],
})
</script>

<style scoped>
/* ✅ If you still use these service cards elsewhere on the page:
   border removed completely */
.service-card {
  width: 327px;
  height: 333px;
  padding: 28px 24px;
  border-radius: 16px;
  border: none;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: all 0.25s ease;
  gap: 16px;
}
.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}
</style>