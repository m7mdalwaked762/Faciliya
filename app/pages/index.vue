<template>


<div class="flex flex-col  ">
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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/img/123.jpg"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/img/321.png"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/img/213.webp"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/img/1234.webp"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/img/12345.jpg"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/img/123456.jpg"
          alt=""
          class="h-[100dvh] w-full object-cover object-center"
        />
      </SwiperSlide>
    </Swiper>

    <!-- STRONGER DARK OVERLAY -->
    <div class="pointer-events-none absolute inset-0 
                 
                from-black/85 via-black/75 to-black/60">
    </div>

    <!-- FIXED CONTENT -->
    <div class="absolute inset-0 z-10 flex items-center "  >
      <div class="w-full px-4 md:px-8 lg:px-28">
        <div class="max-w-[680px]">

          <!-- Heading -->
          <h1 class="text-[clamp(2rem,4vw,3.5rem)]
                     font-extrabold
                     leading-tight
                     drop-shadow-[0_4px_25px_rgba(0,0,0,0.7)]">
            FACILIYA LLC <br>
            Structured Operations. Intelligent Oversight. Reliable Execution.
          </h1>

          <!-- Paragraph -->
          <p class="mt-5 text-white/95 leading-relaxed text-[16px] sm:text-[18px] drop-shadow-md">
            Integrated Facilities Management, Private Staffing, and Event Support Services across Texas.
          </p>

          <!-- Buttons -->
          <div class="mt-8 flex flex-wrap gap-5">

            
           
    <ConsultationForm />
          </div>

        </div>
      </div>
    </div>

  </div>
 
  <section class="bg-white">
  <div class="px-4 md:px-8 lg:px-28 py-20">

    <!-- SECTION HEADER -->
    <div class="text-center max-w-3xl mx-auto">
      <h2 class="text-[32px] md:text-[40px] font-semibold text-[#1a1a1a] tracking-tight">
        Our Divisions
      </h2>

      <p class="mt-4 text-[16px] md:text-[18px] text-[#1a1a1a]/70 leading-relaxed">
        Structured operational delivery across corporate, private, and event environments.
      </p>
    </div>

    <!-- GRID -->
    <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <!-- CARD 1 -->
      <div
        class="group flex flex-col justify-between
               bg-white border border-[#1a1a1a]/10
               rounded-2xl p-10 min-h-[340px]
               transition-all duration-300
               hover:-translate-y-2 hover:shadow-2xl"
      >

        <div>

          <!-- ICON -->
          <div
            class="w-[80px] h-[80px] flex items-center justify-center
                   rounded-full border border-[#FDC101]/60 mb-8"
          >

<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FDC101]" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018"/><path fill="currentColor" d="M21 7a1 1 0 1 1 0 2v10a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2V9a1 1 0 0 1 0-2zM7 11a1 1 0 0 0-1 1v7h2v-7a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v7h2v-7a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v7h2v-7a1 1 0 0 0-1-1m1-7a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z"/></g></svg>

          </div>

          <h3 class="text-[20px] font-semibold text-[#1a1a1a] tracking-wide">
            Corporate & Asset Governance
          </h3>

          <div class="mt-6 w-12 h-[2px] bg-[#FDC101] transition-all duration-300 group-hover:w-20"></div>

          <p class="mt-6 text-[15px] text-[#1a1a1a]/70 leading-relaxed">
            Integrated Facilities Management powered by structured governance architecture and operational intelligence.
          </p>

        </div>

        <!-- BUTTON -->
        <NuxtLink
          to="/Corporate_Asset_Governance"
          class="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-[#1a1a1a] hover:text-[#FDC101] transition"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16"/>
          </svg>
        </NuxtLink>

      </div>



      <!-- CARD 2 -->
      <div
        class="group flex flex-col justify-between
               bg-white border border-[#1a1a1a]/10
               rounded-2xl p-10 min-h-[340px]
               transition-all duration-300
               hover:-translate-y-2 hover:shadow-2xl"
      >

        <div>

          <div
            class="w-[80px] h-[80px] flex items-center justify-center
                   rounded-full border border-[#FDC101]/60 mb-8"
          >

<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FDC101]" viewBox="0 0 24 24"><path fill="currentColor" d="M17.55 12L14 8.45l1.425-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"/></svg>

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
          class="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-[#1a1a1a] hover:text-[#FDC101] transition"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16"/>
          </svg>
        </NuxtLink>

      </div>



      <!-- CARD 3 -->
      <div
        class="group flex flex-col justify-between
               bg-white border border-[#1a1a1a]/10
               rounded-2xl p-10 min-h-[340px]
               transition-all duration-300
               hover:-translate-y-2 hover:shadow-2xl"
      >

        <div>

          <div
            class="w-[80px] h-[80px] flex items-center justify-center
                   rounded-full border border-[#FDC101]/60 mb-8"
          >

<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FDC101]" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 15.45l3.475-3.475q.3-.3.725-.3t.725.3t.3.725t-.3.725L11.65 17.65q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></svg>

          </div>

          <h3 class="text-[20px] font-semibold text-[#1a1a1a] tracking-wide">
            Events & Occasion Services
          </h3>

          <div class="mt-6 w-12 h-[2px] bg-[#FDC101] transition-all duration-300 group-hover:w-20"></div>

          <p class="mt-6 text-[15px] text-[#1a1a1a]/70 leading-relaxed">
            Disciplined operational support for private and corporate events requiring professional execution.
          </p>

        </div>

        <NuxtLink
          to="/Event_Services"
          class="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-[#1a1a1a] hover:text-[#FDC101] transition"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16"/>
          </svg>
        </NuxtLink>

      </div>

    </div>

  </div>
</section>

<section class="bg-[#F8F9FB]">
  <div class="py-44 px-4 md:px-8 lg:px-28">

    <!-- Heading -->
    <div class="max-w-3xl">
      <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight">
        Why FACILIYA
      </h2>

      <p class="mt-6 text-[18px] text-gray-600 leading-relaxed max-w-2xl">
        Facilities operations fail when they become reactive and fragmented.
        FACILIYA replaces scattered decisions with a disciplined operational
        structure designed for stability, accountability, and long-term asset protection.
      </p>
    </div>

    <!-- Cards -->
    <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <!-- Card 1 -->
      <div class=" p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition">

        <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
          <LayoutDashboard class="w-6 h-6 text-[#FDC101]" />
        </div>

        <h3 class="mt-6 text-[20px] font-semibold text-gray-900">
          Structured Operations
        </h3>

        <p class="mt-4 text-[16px] text-gray-600 leading-relaxed">
          Facilities operations become unreliable when they are reactive and fragmented.
          Most properties suffer not from lack of effort, but from lack of structure.
          FACILIYA replaces scattered vendors and improvised decisions with a coordinated
          operating system that brings clarity, consistency, and accountability.
        </p>

      </div>

      <!-- Card 2 -->
      <div class=" p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition">

        <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
          <ShieldCheck class="w-6 h-6 text-[#FDC101]" />
        </div>

        <h3 class="mt-6 text-[20px] font-semibold text-gray-900">
          Preventive Oversight
        </h3>

        <p class="mt-4 text-[16px] text-gray-600 leading-relaxed">
          Our model is built around preventive thinking, disciplined oversight,
          and documented execution. Issues are identified early, managed correctly,
          and closed out with full operational visibility, reducing risk and
          protecting long-term asset value.
        </p>

      </div>

      <!-- Card 3 -->
      <div class=" p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition">

        <div class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#FDC101]/15">
          <Handshake class="w-6 h-6 text-[#FDC101]" />
        </div>

        <h3 class="mt-6 text-[20px] font-semibold text-gray-900">
          Long-Term Partnership
        </h3>

        <p class="mt-4 text-[16px] text-gray-600 leading-relaxed">
          FACILIYA operates as a long-term operational partner rather than a
          task-based service provider. We take responsibility for outcomes,
          not just activities, ensuring facilities remain stable, presentable,
          and predictable.
        </p>

      </div>

    </div>

  </div>
</section>



 <section class="bg-white" >
  <div class="mx-auto py-12 px-4 md:px-8 lg:px-28">
    
    <!-- Heading -->
    <h2
      class="text-center font-semibold text-gray-900
             text-[22px] sm:text-[26px] lg:text-[32px]"  
    >
      Certifications &amp; Industry Alignment
    </h2>

    <!-- Logos -->
    <div  
      class="mt-8 flex flex-col items-center gap-8
             sm:flex-row sm:flex-wrap sm:justify-center
             lg:flex-row lg:justify-between"
    >
      <!-- BOMA -->
      <img
        src="/logos/boma.png"
        alt="BOMA"
        class="h-14 lg:h-16 w-auto object-contain"
        loading="lazy"
      />

      <!-- USGBC (Bigger) -->
      <img
        src="/logos/usgbc.png"
        alt="USGBC"
        class="h-16 lg:h-20 w-auto object-contain"
        loading="lazy"
      />

      <!-- LEED Green (Bigger) -->
      <img
        src="/logos/leed-ga.png"
        alt="LEED Green Associate"
        class="h-16 lg:h-20 w-auto object-contain"
        loading="lazy"
      />

      <!-- OSHA -->
      <img
        src="/logos/osha.png"
        alt="OSHA"
        class="h-14 lg:h-16 w-auto object-contain"
        loading="lazy"
      />

      <!-- IFMA -->
      <img
        src="/logos/ifma-dfw.png"
        alt="IFMA Dallas/Fort Worth Chapter"
        class="h-14 lg:h-16 w-auto object-contain"
        loading="lazy"
      />
    </div>

  </div>
</section>

 




  






<section class="bg-[#F8F9FB]" >
    <div class="mx-auto py-44 px-4 md:px-8 lg:px-28">
      <div class="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-20">

        <!-- LEFT -->
        <div class="lg:w-[40%]" >
          <h2 class="text-[#1a1a1a] font-semibold leading-[1.08]
                     text-[34px] sm:text-[44px] lg:text-[56px]">
            Structured<br />
            Facilities<br />
            Management<br />
            That Delivers<br />
            Results
          </h2>

          <p class="mt-6 text-[#1a1a1a]/70 leading-relaxed
                    text-[16px] sm:text-[18px] lg:text-[19px] max-w-[520px]">
            Faciliya operates facilities through a disciplined, integrated system designed to eliminate guesswork and
            reduce risk. Our approach brings clarity to daily operations, ensures consistent service delivery, and
            provides full visibility into performance.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-5">
            <NuxtLink to="/about"
              class="rounded-[10px] border border-[#FDC101]
                     px-6 py-3.5 text-[15px] font-semibold text-[#1a1a1a]
                     hover:bg-[#FDC101]/10 transition"
              type="button"
            >
              Learn More
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 text-[15px] font-medium text-[#1a1a1a]
                     hover:opacity-70 transition"
              type="button"
            >
              Contact Us
              <span aria-hidden="true">›</span>
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="lg:w-[60%]" >
          <!-- On mobile: stack. On md+: 2 columns like screenshot -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-20">

            <!-- Feature 1 -->
            <div class="max-w-[360px]">
              <!-- ICON SLOT (you replace) -->
             

  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"  class="mb-5" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#fdc101" d="M6 23q-1.25 0-2.125-.875T3 20t.875-2.125T6 17q.35 0 .65.075t.575.2L8.65 15.5q-.7-.775-.975-1.75T7.55 11.8l-2.025-.675q-.425.625-1.075 1T3 12.5q-1.25 0-2.125-.875T0 9.5t.875-2.125T3 6.5t2.125.875T6 9.5v.2l2.025.7q.5-.9 1.338-1.525t1.887-.8V5.9q-.975-.275-1.612-1.063T9 3q0-1.25.875-2.125T12 0t2.125.875T15 3q0 1.05-.65 1.838T12.75 5.9v2.175q1.05.175 1.888.8t1.337 1.525L18 9.7v-.2q0-1.25.875-2.125T21 6.5t2.125.875T24 9.5t-.875 2.125T21 12.5q-.8 0-1.463-.375t-1.062-1l-2.025.675q.15.975-.125 1.938T15.35 15.5l1.425 1.75q.275-.125.575-.187T18 17q1.25 0 2.125.875T21 20t-.875 2.125T18 23t-2.125-.875T15 20q0-.5.163-.962t.437-.838l-1.425-1.775Q13.15 17 11.988 17T9.8 16.425L8.4 18.2q.275.375.438.838T9 20q0 1.25-.875 2.125T6 23M3 10.5q.425 0 .713-.288T4 9.5t-.288-.712T3 8.5t-.712.288T2 9.5t.288.713T3 10.5M6 21q.425 0 .713-.288T7 20t-.288-.712T6 19t-.712.288T5 20t.288.713T6 21m6-17q.425 0 .713-.288T13 3t-.288-.712T12 2t-.712.288T11 3t.288.713T12 4m0 11q1.05 0 1.775-.725T14.5 12.5t-.725-1.775T12 10t-1.775.725T9.5 12.5t.725 1.775T12 15m6 6q.425 0 .713-.288T19 20t-.288-.712T18 19t-.712.288T17 20t.288.713T18 21m3-10.5q.425 0 .713-.288T22 9.5t-.288-.712T21 8.5t-.712.288T20 9.5t.288.713t.712.287M18 20" /></svg>




              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Single Point of Control
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                A centralized operational lead manages all service lines, communication, and escalation—eliminating
                confusion and fragmented responsibility.
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="max-w-[360px]">
            

  <svg xmlns="http://www.w3.org/2000/svg" class="h-[44px] w-[44px] mb-5" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#fdc101" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4" /></svg>


              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Maintenance Focus
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                Planned inspections and maintenance routines reduce system failures, downtime, and costly reactive
                repairs.
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="max-w-[360px]">
           
              
             

  <svg xmlns="http://www.w3.org/2000/svg" class="h-[44px] w-[44px] mb-5" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#fdc101" d="M2 21v-2h20v2zm1-3v-7h3v7zm5 0V6h3v12zm5 0V9h3v9zm5 0V3h3v15z" /></svg>




              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Reporting &amp; Visibility
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                Clear reporting provides insight into trends, risks, and priorities—supporting informed decisions and
                long-term operational improvement.
              </p>
            </div>

            <!-- Feature 4 -->
            <div class="max-w-[360px]">
              

  <svg xmlns="http://www.w3.org/2000/svg" class="h-[44px] w-[44px] mb-5" viewBox="0 0 24 24"><!-- Icon from Gridicons by Automattic - https://github.com/Automattic/gridicons/blob/trunk/LICENSE.md --><path fill="#fdc101" d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5M6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5m5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2M6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3" /></svg>




              <h3 class="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px]">
                Vendor Coordination
              </h3>

              <p class="mt-3 text-[#1a1a1a]/70 leading-relaxed text-[14px] lg:text-[15px]">
                Licensed and insured partners are managed under one coordinated system with defined scopes, performance
                tracking, and accountability.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
   <section class="bg-white">
  <div class="mx-auto py-44 px-4 md:px-8 lg:px-28" >

    <!-- Heading -->
    <div class="text-center max-w-[820px] mx-auto">
      <h2 class="text-[#1a1a1a] font-semibold text-[28px] sm:text-[34px] lg:text-[40px]">
        What Our Clients Say
      </h2>
      <p class="mt-4 text-[#1a1a1a]/70 text-[14px] sm:text-[15px] leading-relaxed">
        Hear from property owners and managers who trust Faciliya to deliver consistent, reliable, and structured
        facilities management. Their experiences reflect our commitment to accountability, quality, and operational excellence.
      </p>
    </div>

    <!-- Slider -->
    <div class="mt-12 relative">

      <!-- Prev Button -->
      <button
        class="swiperPrev absolute left-0 top-1/2 -translate-y-1/2 z-10
               h-[40px] w-[40px] rounded-full border border-[#1a1a1a]/20 bg-white
               flex items-center justify-center shadow-sm hover:bg-[#f7f7f7] transition"
        type="button"
        aria-label="Previous testimonial"
      >
        ‹
      </button>

      <!-- Next Button -->
      <button
        class="swiperNext absolute right-0 top-1/2 -translate-y-1/2 z-10
               h-[40px] w-[40px] rounded-full border border-[#1a1a1a]/20 bg-white
               flex items-center justify-center shadow-sm hover:bg-[#f7f7f7] transition"
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

          <!-- ✅ Smaller fixed-height card (same size for all) -->
          <div
            class="h-[250px] flex flex-col
                   rounded-[12px] border border-[#1a1a1a]/15 bg-white
                   px-5 py-5 shadow-sm
                   transition duration-300 hover:shadow-md"
          >
            <!-- Top content takes remaining space, overflow hidden -->
            <div class="flex-1 overflow-hidden">

              <!-- Stars -->
              <div class="flex items-center gap-1">
                <span
                  v-for="s in 5"
                  :key="s"
                  class="text-[#FDC101] text-[13px] leading-none"
                  aria-hidden="true"
                >
                  ★
                </span>
                <span class="sr-only">5 out of 5 stars</span>
              </div>

              <!-- Quote -->
              <p class="mt-3 text-[#1a1a1a]/70 text-[13px] leading-relaxed text-left">
                “{{ t.quote }}”
              </p>
            </div>

            <!-- Divider -->
            <div class="h-px w-full bg-[#1a1a1a]/10 my-4"></div>

            <!-- Name + Role (left aligned, pinned bottom) -->
            <div class="text-left">
              <p class="text-[#1a1a1a] font-semibold text-[12px]">
                {{ t.name }}
              </p>
              <p class="text-[#1a1a1a]/60 text-[11px] mt-1">
                {{ t.role }}
              </p>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Pagination Dots -->
      <div class="customPagination mt-8 flex justify-center"></div>

    </div>
  </div>
</section>

 <section class="w-full bg-[#F8F9FB]" >
    <div class="px-4 md:px-8 lg:px-28 py-10 sm:py-14 lg:py-16">
      
      <!-- Top content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        
        <!-- Left headline -->
        <div class="lg:col-span-6" >
          <h2
            class="text-[#1a1a1a] font-extrabold leading-[1.12]
                   text-[28px] sm:text-[36px] lg:text-[44px]"
          >
            Reliable Operations. Measurable
            <br class="hidden sm:block" />
            Performance. Total Control.
          </h2>
        </div>

        <!-- Right paragraph -->
        <div class="lg:col-span-6" >
          <p
            class="text-[#1a1a1a]/70 leading-[1.7]
                   text-[14px] sm:text-[15px] lg:text-[16px]
                   max-w-[560px] lg:ml-auto"
          >
            Faciliya ensures your properties operate smoothly through structured workflows, disciplined oversight,
            and coordinated service management. From preventive maintenance and soft services to security and project
            coordination, we provide measurable results that protect asset value, improve efficiency, and enhance the
            experience of every occupant.
          </p>
        </div>
      </div>

      <!-- Bottom stats -->
      <div class="mt-10 sm:mt-12 lg:mt-14" >
        <div
          class="grid grid-cols-1 sm:grid-cols-3
                "
        >
          <!-- Stat 1 -->
          <div class="py-8 sm:py-10">
            <div class="text-[#FDC101] font-extrabold leading-none text-[44px] sm:text-[52px] lg:text-[64px]">
              +40%
            </div>
            <div class="mt-3 text-[#1a1a1a] font-semibold text-[13px] sm:text-[14px]">
              Reduced Downtime
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="py-8 sm:py-10 ">
            <div class="text-[#FDC101] font-extrabold leading-none text-[44px] sm:text-[52px] lg:text-[64px]">
              +35%
            </div>
            <div class="mt-3 text-[#1a1a1a] font-semibold text-[13px] sm:text-[14px]">
              Increased Efficiency
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="py-8 sm:py-10 ">
            <div class="text-[#FDC101] font-extrabold leading-none text-[44px] sm:text-[52px] lg:text-[64px]">
              +50%
            </div>
            <div class="mt-3 text-[#1a1a1a] font-semibold text-[13px] sm:text-[14px]">
              Higher Occupant Satisfaction
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  



<section class="bg-white" >
    <div class="mx-auto py-44 px-4 md:px-8 lg:px-28" >
      <!-- Heading -->
      <div class="text-center max-w-[720px] mx-auto">
        <h2 class="text-[#1a1a1a] font-semibold text-[26px] sm:text-[32px] lg:text-[38px]">
          Frequently asked questions
        </h2>
        <p class="mt-3 text-[#1a1a1a]/70 text-[13px] sm:text-[14px] leading-relaxed">
          Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
          to action, they may still have questions (doubts) that can be answered.
        </p>
      </div>

      <!-- FAQ list -->
      <div class="mt-10 max-w-[680px] mx-auto space-y-4">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="rounded-[8px] border border-[#1a1a1a]/25 bg-white overflow-hidden"
        >
          <!-- Header -->
          <button
            type="button"
            class="w-full flex items-start justify-between gap-6 px-5 py-4 text-left"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span class="text-[#1a1a1a] font-semibold text-[13px] sm:text-[14px]">
              {{ item.q }}
            </span>

            <!-- X icon (matches screenshot) -->
            <span
              class="shrink-0 text-[#1a1a1a] text-[16px] leading-none mt-[1px]"
              aria-hidden="true"
            >
              ×
            </span>
          </button>

          <!-- Body -->
          <div
            class="px-5 pb-4"
            v-show="openIndex === i"
          >
            <p class="text-[#1a1a1a]/70 text-[11px] sm:text-[12px] leading-relaxed">
              {{ item.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>



<section class="bg-[#F8F9FB]" >

      <!-- CTA BUTTON -->
      

     <div class="px-4 md:px-8 lg:px-28 py-24">

      <!-- Section Title -->
      <div class="text-center">
        <h2 class="text-[30px] md:text-[36px] font-semibold text-[#1a1a1a]">
          Direct Contact Information
        </h2>

        <p class="mt-4 text-[17px] text-[#1a1a1a]/70 max-w-xl mx-auto">
          Reach us directly for inquiries, partnership discussions,
          or consultation requests.
        </p>
      </div>


      <!-- Contact Cards -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">

        <!-- Phone Card -->
        <div class="bg-[#F8F9FB] p-10 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">
          
          <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
            <Phone class="w-8 h-8 text-[#FDC101]" />
          </div>

          <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">
            Phone
          </h3>

          <a
            href="tel:+19724825958"
            class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
          >
            +1 (972) 482-5958
          </a>
        </div>


        <!-- Email Card -->
        <div class="bg-[#F8F9FB] p-10 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">
          
          <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
            <Mail class="w-8 h-8 text-[#FDC101]" />
          </div>

          <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">
            Email
          </h3>

          <a
            href="mailto:info@faciliyallc.com"
            class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
          >
            info@faciliyallc.com
          </a>
        </div>


        <!-- Location Card -->
        <div class="bg-[#F8F9FB] p-10 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">
          
          <div class="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
            <MapPin class="w-8 h-8 text-[#FDC101]" />
          </div>

          <h3 class="mt-6 text-[20px] font-semibold text-[#1a1a1a]">
            Location
          </h3>

          <a
            href="https://maps.google.com/?q=Dallas+Texas"
            target="_blank"
            class="mt-4 block text-[18px] text-[#1a1a1a]/80 hover:text-[#3F2E83] transition"
          >
            Dallas, Texas
          </a>
        </div>

      </div>



      <!-- CTA BUTTON -->
      <div class="mt-20 text-center">
        <ConsultationForm />
      </div>

    </div>

  </section>



 <section class="bg-white" >
    <div class="py-44 px-4 md:px-8 lg:px-28 text-center" >

      <h2 class="text-[#1a1a1a] font-semibold
                 text-[34px] sm:text-[44px] lg:text-[56px]">
        Work with us
      </h2>

      <p class="mt-6 text-[#1a1a1a]/70
                text-[16px] sm:text-[18px] lg:text-[19px]
                leading-relaxed max-w-[900px] mx-auto">
        Build your career with Faciliya. We offer opportunities to grow within a structured,
        performance-driven facilities management environment.
      </p>

      <NuxtLink
         to="/careers"
        class="mt-10 inline-flex items-center justify-center
               rounded-[12px] bg-[#FDC101]
               px-10 py-4
               text-[16px] font-semibold text-[#1a1a1a]
               hover:brightness-95 active:brightness-90
               transition"
        type="button"
      >
        Join our team
      </NuxtLink>

    </div>
  </section>




</div>
  
</template>

<script setup>
import { Phone, Mail, CalendarCheck, MapPin } from "lucide-vue-next"

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import { Navigation,  A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { reactive } from "vue";




import { ref } from "vue";
const openIndex = ref(0); // first open like screenshot

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
];
const isCallOpen = ref(false);

// optional: close on ESC
const onKey = (e) => {
  if (e.key === "Escape") isCallOpen.value = false;
};

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i;
}
const breakpoints = {
  0: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

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
  {
    quote:
      "Faciliya operates as a long-term partner. Their preventive planning and structured supervision have strengthened both asset preservation and tenant experience.",
    name: "Natalie S.",
    role: "Commercial Building Owner",
  },
  {
    quote:
      "Service coordination across our property required discipline and oversight. Faciliya delivered a unified operational framework that aligned vendors under clear performance standards.",
    name: "Daniel C.",
    role: "Facilities Director, Corporate Campus",
  },
  {
    quote:
      "The professionalism and documentation standards exceeded expectations. Workflows are now clearly defined and executed with consistency.",
    name: "Olivia B.",
    role: "Operations Manager, Mixed-Use Development",
  },
  {
    quote:
      "Faciliya’s IFM model reduced operational friction and introduced structured accountability across maintenance, security, and service delivery.",
    name: "Michael F.",
    role: "Asset Operations Consultant",
  },
  {
    quote:
      "Their team integrates seamlessly into our property environment. The transition was organized, controlled, and professionally executed.",
    name: "Grace W.",
    role: "Property Administrator, Residential Tower",
  },
  {
    quote:
      "We engaged Faciliya to elevate operational governance. Within months, vendor performance improved and maintenance tracking became systematic.",
    name: "Thomas J.",
    role: "Investment Property Owner",
  },
  {
    quote:
      "Faciliya does not rely on reactive service models. Their preventive maintenance discipline has protected long-term asset value.",
    name: "Isabella R.",
    role: "Real Estate Portfolio Executive",
  },
  {
    quote:
      "Operational transparency has improved significantly since onboarding Faciliya. Performance reporting now provides executive-level visibility.",
    name: "Christopher L.",
    role: "Senior Asset Controller",
  },
  {
    quote:
      "Their structured framework has brought stability to our daily operations. Faciliya functions as a controlled operating partner rather than a conventional contractor.",
    name: "Victoria M.",
    role: "Director of Property Management",
  },
];
import { LayoutDashboard, ShieldCheck, Handshake } from "lucide-vue-next"


const steps = [
  {
    title: "Design",
    subtitle: "Configure before execution",
    desc: "Assess assets, define scope, and establish governance before services are deployed.",
  },
  {
    title: "Operate",
    subtitle: "Stabilize daily operations",
    desc: "Coordinate essential services and maintenance under one controlled operating system.",
  },
  {
    title: "Manage",
    subtitle: "Control performance",
    desc: "Introduce active supervision, vendor management, reporting, and quality assurance.",
  },
  {
    title: "Elevate",
    subtitle: "Enterprise facility leadership",
    desc: "Deliver strategic oversight, executive reporting, sustainability alignment, and asset lifecycle governance.",
  },
];
const modules = [Autoplay, Pagination, Navigation, A11y];

import { ArrowUpRight } from "lucide-vue-next"
const slides = [
  {
    title: "Integrated Facilities Management Built On Structure",
    description:
      "Faciliya is an Integrated Facilities Management (IFM) partner for commercial, mixed-use, and high-end residential environments. We stabilize daily operations, protect asset value, and align building performance with efficiency-driven, green-minded practices—without disruption.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Operational Excellence Across Every Asset",
    description:
      "We streamline operations and support business continuity through measurable SLAs and transparent reporting.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80",
  },
];

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
    "Structured IFM operations that stabilize daily performance and protect long-term asset value."
})

useHead({
  link: [{ rel: "canonical", href: URL }],
  script: [{
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Faciliya",
      url: SITE,
      email: "info@faciliyallc.com",
      description:
        "Integrated Facilities Management partner delivering structured operations, disciplined oversight, and sustainability-minded performance practices."
    })
  }]
})
</script>
<style scoped>




/* Card */
.service-card{
  width:327px;
  height:333px;
  padding:28px 24px;
  border-radius:16px;
  border:1px solid rgba(0,0,0,0.12);
  background:white;
  display:flex;
  flex-direction:column;
  justify-content:space-between; /* 🔥 Key fix */
  align-items:center;
  text-align:center;
  transition: all .25s ease;
  gap: 16px; /* 🔥 Consistent spacing between elements */
}

.service-card:hover{
  transform: translateY(-3px);
  box-shadow:0 12px 28px rgba(0,0,0,0.08);
}

/* Top content block */
.service-top{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:16px; /* 🔥 Perfect consistent vertical spacing */
}

/* Perfect Circle */
.service-circle{
  width:113px;
  height:113px;
  border-radius:9999px;
  background:#FDC101;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* Icon */
.service-icon{
  width:61.8px;
  height:61.8px;
  background:rgba(255,255,255,0.4);
  border-radius:12px;
}

/* Title */
.service-title{
  font-size:22px;
  font-weight:700;
  color:#111827;
}

/* Text */
.service-text{
  font-size:15px;
  line-height:1.55;
  color:#6B7280;
  max-width:240px;
}

/* Button */
.service-btn{

  padding:6px;
  border-radius:10px;
  background:#FDC101;
  color:#ffffff;
  font-size:12px;
  font-weight:700;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  transition: all .2s ease;
}

.service-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 10px 18px rgba(245,180,0,0.35);
}

</style>