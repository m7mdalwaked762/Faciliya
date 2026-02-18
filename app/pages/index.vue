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
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
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
            Integrated Facilities Management Built On Structure
          </h1>

          <!-- Paragraph -->
          <p class="mt-5 text-white/95 leading-relaxed text-[16px] sm:text-[18px] drop-shadow-md">
            Faciliya is an Integrated Facilities Management (IFM) partner for commercial,
            mixed-use, and high-end residential environments. We stabilize daily operations,
            protect asset value, and align building performance with efficiency-driven,
            green-minded practices—without disruption.
          </p>

          <!-- Buttons -->
          <div class="mt-8 flex flex-wrap gap-5">

            <NuxtLink to="/contact" class="bg-[#ffbe17]
                           text-[#1a1a1a]
                           px-7 py-3.5
                           rounded-xl
                           font-semibold
                           shadow-lg
                           hover:scale-[1.03]
                           transition duration-300">
              Request a Proposal
            </NuxtLink>

            <button
  type="button"
  @click="isCallOpen = true"
  class="bg-white/95 text-[#1a1a1a]
         px-7 py-3.5 rounded-xl font-semibold shadow-lg
         hover:bg-white transition duration-300
         focus:outline-none focus:ring-2 focus:ring-white/60"
>
  Talk to an Expert
</button>

          </div>

        </div>
      </div>
    </div>

  </div>
 
  <div
  v-if="isCallOpen"
  class="fixed inset-0 z-[999] flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-label="Call an expert"
>
  <!-- Backdrop -->
  <button
    type="button"
    class="absolute inset-0 bg-black/70"
    aria-label="Close"
    @click="isCallOpen = false"
  ></button>

  <!-- Modal Card -->
  <div
    class="relative w-full max-w-[520px] rounded-2xl bg-white text-[#1a1a1a]
           shadow-2xl border border-black/10"
  >
    <!-- Header -->
    <div class="px-6 py-5 sm:px-7 sm:py-6 border-b border-black/10">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-[18px] sm:text-[20px] font-semibold">
            Call an Expert
          </p>
          <p class="mt-1 text-[13px] sm:text-[14px] text-[#1a1a1a]/70">
            Tap the number below to start a call.
          </p>
        </div>

        <button
          type="button"
          @click="isCallOpen = false"
          class="h-10 w-10 rounded-xl border border-black/10
                 hover:bg-black/5 transition flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Body -->
    <div class="px-6 py-6 sm:px-7 sm:py-7">
      <a
        href="tel:+12015466248"
        class="block rounded-xl border border-black/10 bg-[#f7f7f7]
               px-5 py-4 text-center
               font-semibold text-[18px] sm:text-[20px]
               hover:bg-[#f1f1f1] transition"
      >
        +1 (201) 546-6248
      </a>

      <div class="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          @click="isCallOpen = false"
          class="w-full sm:w-auto rounded-xl border border-black/10
                 px-5 py-3 font-semibold hover:bg-black/5 transition"
        >
          Close
        </button>

        <a
          href="tel:+12015466248"
          class="w-full sm:w-auto rounded-xl bg-[#FDC101]
                 px-5 py-3 font-semibold text-[#1a1a1a]
                 hover:brightness-95 transition text-center"
        >
          Call Now
        </a>
      </div>
    </div>
  </div>
</div>
  <section class="bg-white ">
    <div class="py-44 px-4 md:px-8 lg:px-28">
      
      <div class="grid items-center gap-10 lg:grid-cols-2"  >
        
        <!-- Image -->
        <div >
          <div class="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <img
              src=""
              alt="Facilities team working"
              class="w-full h-[280px] sm:h-[340px] lg:h-[420px] object-cover"
            />
          </div>
        </div>

        <!-- Content -->
        <div >
          <!-- Responsive Heading -->
          <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight">
            Why Faciliya ?
          </h2>

          <!-- Responsive Paragraph -->
          <div class="mt-6 space-y-6 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-gray-600">
            <p>
              Faciliya exists to solve one core problem: facilities operations
              become unreliable when they are reactive and fragmented. Most
              properties suffer not from lack of effort, but from lack of
              structure. We replace scattered vendors and improvised decisions
              with a single, coordinated operating system that brings clarity,
              consistency, and accountability.
            </p>

            <p>
              Our model is built around preventive thinking, disciplined
              oversight, and documented execution. Issues are identified early,
              managed correctly, and closed out with visibility. This reduces
              operational risk, protects asset value, and allows ownership and
              management teams to focus on strategy rather than daily
              firefighting.
            </p>

            <p>
              Faciliya acts as a long-term operating partner, not a task-based
              service provider. We take responsibility for outcomes, not just
              activities, and operate quietly in the background so facilities
              remain stable, presentable, and predictable.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>



 <section class="bg-gray-50 " >
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

 <section class="bg-white" >
    <div class="mx-auto  md:px-8 lg:px-28 py-44" >

      <div class="text-center">
        <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight">
          Our Services
        </h2>
      </div>

      <!-- Wrapper -->
      <div class="mt-12 flex flex-col items-center">

        <!-- Row 1 -->
        <div class="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">

          <div class="service-card">
            <div class="service-top">
              <div class="service-circle">
                

  <svg xmlns="http://www.w3.org/2000/svg" width="61.8" height="61.8" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="white" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" /></svg>



              </div>
              <h3 class="service-title">Hard Services</h3>
              <p class="service-text">
                Structured preventive and corrective maintenance that keeps building systems reliable.
              </p>
            </div>

            <NuxtLink to="/about" class="service-btn">
              Learn More

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="white" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg>

            </NuxtLink>
          </div>

          <div class="service-card">
            <div class="service-top">
              <div class="service-circle">
                

  <svg xmlns="http://www.w3.org/2000/svg" width="61.8" height="61.8" viewBox="0 0 512 512"><!-- Icon from IonIcons by Ben Sperry - https://github.com/ionic-team/ionicons/blob/main/LICENSE --><path fill="white" d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256" /></svg>



              </div>
              <h3 class="service-title">Soft Services</h3>
              <p class="service-text">
                Cleaning and presentation services delivered through defined scopes and inspections.
              </p>
            </div>

            <NuxtLink to="/about" class="service-btn">
              Learn More 

  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="white" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg>



            </NuxtLink>
          </div>

          <div class="service-card">
            <div class="service-top">
              <div class="service-circle">
                






  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24"><!-- Icon from Myna UI Icons by Praveen Juge - https://github.com/praveenjuge/mynaui-icons/blob/main/LICENSE --><path fill="white" d="M12.775 2.49a1.37 1.37 0 0 0-1.55 0l-.61.417a11.3 11.3 0 0 1-5.234 1.92a1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.541 1.335 4.853 2.79 6.63c1.466 1.793 3.136 3.142 3.977 3.773a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772c1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.64-.478-1.194-1.131-1.26a11.3 11.3 0 0 1-5.234-1.92z" /></svg>









              </div>
              <h3 class="service-title">Security & Safety</h3>
              <p class="service-text">
                Coordinated safety support focused on preparedness and controlled response.
              </p>
            </div>

            <NuxtLink to="/about" class="service-btn">
              Learn More 

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="white" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg>

            </NuxtLink>
          </div>

        </div>

        <!-- Row 2 -->
        <div class="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">

          <div class="service-card">
            <div class="service-top">
              <div class="service-circle">
                




  <svg xmlns="http://www.w3.org/2000/svg" width="71.8" height="71.8" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="white" d="M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.3 4.3 0 0 1-1.644-1.034a4.3 4.3 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651q-.243.311-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308q.355-.17.666-.412m5.849-5.809a2.163 2.163 0 1 0-3.06-3.059l-.126.128a.52.52 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33s.955.709 1.33.839c.188.065.345.1.452.12a.53.53 0 0 0 .465-.148z" /><path fill="white" fillRule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C20.981 19.676 21 17.832 21 14.18l-2.818 2.818c-.27.27-.491.491-.74.686a5 5 0 0 1-.944.583a8 8 0 0 1-.944.355l-2.312.771a2.083 2.083 0 0 1-2.635-2.635l.274-.82l.475-1.426l.021-.066c.121-.362.22-.658.356-.944q.24-.504.583-.943c.195-.25.416-.47.686-.74l4.006-4.007L18.12 6.7l.127-.127A3.65 3.65 0 0 1 20.838 5.5c-.151-1.03-.444-1.763-1.01-2.328C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clipRule="evenodd" /></svg>



              </div>
              <h3 class="service-title">FM Consultancy</h3>
              <p class="service-text">
                Advisory services strengthening operational control through SOPs and KPIs.
              </p>
            </div>

            <NuxtLink to="/about" class="service-btn">
              Learn More

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="white" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg>

            </NuxtLink>
          </div>

          <div class="service-card">
            <div class="service-top">
              <div class="service-circle">
               





  <svg xmlns="http://www.w3.org/2000/svg" width="61.8" height="61.8" viewBox="0 0 24 24"><!-- Icon from Ultimate free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill="white" fillRule="evenodd" d="M23.76 2.45c0-1.001-.8-1.801-1.8-1.801h-.8c-.601 0-1.001.4-1.001 1v11.003c0 .6.4 1 1 1h.8c1 0 1.801.8 1.801 1.801zm-5.102 10V1.747H9.756c-.6 0-1 .4-1 1V8.86q.073-.004.147-.004h1c.642 0 1.292.22 1.787.715a2.4 2.4 0 0 1 .615 1.058a8.82 8.82 0 0 1 5.307 5.21h4.347q.208 0 .402-.043a1.5 1.5 0 0 1-.102-.544c0-.172-.128-.3-.3-.3h-.8c-.64 0-1.292-.22-1.786-.715c-.494-.494-.715-1.145-.715-1.786m-1.17 10.902c.648 0 1.079-.432 1.079-1.079v-1.078c0-.646-.431-1.078-1.078-1.078H1.319c-.648 0-1.079.432-1.079 1.078v1.078c0 .647.431 1.079 1.078 1.079zM7.904 11.356V18.6h3v-7.244c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1m-1.5 7.244v.017H2.155c.094-2.777 1.791-5.207 4.248-6.331zm10.249.017h-4.248v-6.331c2.457 1.124 4.154 3.554 4.248 6.33" clipRule="evenodd" /></svg>


              </div>
              <h3 class="service-title">Projects & Fit-Out</h3>
              <p class="service-text">
                Coordination of renovations ensuring scope alignment and schedule control.
              </p>
            </div>

            <NuxtLink to="/about" class="service-btn">
              Learn More

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="white" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg>

            </NuxtLink>
          </div>

        </div>

      </div>
    </div>
  </section>




   <section class="w-full bg-gray-50">
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
    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-16">

      <!-- LEFT SIDE -->
      <div class="lg:w-1/2" >
        <h2 class="text-[#1a1a1a] font-semibold leading-tight
                   text-[34px] sm:text-[42px] lg:text-[52px]">
          How Faciliya Operates Facilities
        </h2>

        <p class="mt-6 text-[#1a1a1a]/70 leading-relaxed
                  text-[16px] sm:text-[18px] lg:text-[19px] max-w-[640px]">
          A maturity-based Integrated Facilities Management framework that defines
          how facilities are configured, operated, managed, and elevated—allowing
          organizations to align services, governance, and oversight with their
          operational complexity and long-term objectives.
        </p>

        <button
          class="mt-8 inline-flex items-center justify-center
                 rounded-[12px] bg-[#FDC101] px-7 py-4
                 text-[#1a1a1a] text-[16px] font-semibold
                 transition hover:brightness-95"
          type="button"
        >
          Learn more
        </button>
      </div>

      <!-- RIGHT SIDE -->
      <div class="lg:w-1/2 relative">
        <!-- Vertical line -->
        <div class="absolute left-[32px] top-4 h-full w-[2px] bg-[#FDC101]/40"></div>

        <div class="space-y-14">

          <!-- ITEM 1 -->
          <div class="relative flex items-start gap-8">
            
            <div class="relative z-10">
              <!-- ✅ Put your icon here (replace the box below) -->
            



  <svg xmlns="http://www.w3.org/2000/svg" width="" height="" class="h-[64px] w-[64px] bg-white p-1  rounded-[14px]"  viewBox="0 0 256 256"><!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --><path fill="#FDC101" d="M232 56H72V40a8 8 0 0 0-8-8H48a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h184a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M32 64a16 16 0 0 1 16-16h8v96h-8a31.8 31.8 0 0 0-16 4.29Zm192 128H48a16 16 0 0 1 0-32h16a8 8 0 0 0 8-8V72h152Zm-120-56a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16Zm32-16h24v16h-24Z" /></svg>



            </div>

            <!-- TEXT -->
            <div>
              <h3 class="text-[#1a1a1a] font-semibold text-[20px] lg:text-[22px]">
                Design
              </h3>

              <p class="mt-3 font-semibold text-[#1a1a1a] text-[16px]">
                Configure before execution
              </p>

              <p class="mt-3 text-[#1a1a1a]/70 text-[16px] leading-relaxed max-w-[520px]">
                Assess assets, define scope, and establish governance before services are deployed.
              </p>
            </div>
          </div>

          <!-- ITEM 2 -->
          <div class="relative flex items-start gap-8">
            <div class="relative z-10">
              <!-- ✅ Put your icon here -->










  <svg xmlns="http://www.w3.org/2000/svg" class="h-[64px] w-[64px]   p-1 bg-white  rounded-[14px]" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#FDc101" d="M17 13a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 13zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M10 5h2v2h-2zm6 2h-2V5h2zm-2 2h2v2h-2zm-4 0h2v2h-2zm3.11 14H2V1h18v10.29c-.63-.18-1.3-.29-2-.29V3H4v18h6v-3.5h1.03c-.03.17-.03.33-.03.5c0 1.96.81 3.73 2.11 5M8 15H6v-2h2zm0-4H6V9h2zm0-4H6V5h2zM6 17h2v2H6zm4-4h2v1.41c-.11.19-.22.39-.32.59H10z" /></svg>







            </div>

            <div>
              <h3 class="text-[#1a1a1a] font-semibold text-[20px] lg:text-[22px]">
                Operate
              </h3>

              <p class="mt-3 font-semibold text-[#1a1a1a] text-[16px]">
                Stabilize daily operations
              </p>

              <p class="mt-3 text-[#1a1a1a]/70 text-[16px] leading-relaxed max-w-[520px]">
                Coordinate essential services and maintenance under one controlled operating system.
              </p>
            </div>
          </div>

          <!-- ITEM 3 -->
          <div class="relative flex items-start gap-8">
            <div class="relative z-10">
              <!-- ✅ Put your icon here -->




  <svg xmlns="http://www.w3.org/2000/svg" class="h-[64px] w-[64px]  p-1  bg-white rounded-[14px]" viewBox="0 0 512 512"><!-- Icon from Siemens Industrial Experience Icons by Siemens AG - https://github.com/siemens/ix-icons/blob/main/LICENSE.md --><g fill="#fdc101" fillRule="white" clipRule="white"><path d="M426.667 125.489H85.333v20.078h341.334zM85.333 386.508V185.724h341.334v200.784zM42.667 85.332v341.333h426.666V85.332zm320 149.333v128h42.666v-128zm-64 128v-85.333h42.666v85.333zm-64-21.333v21.333h42.666v-21.333z" /><path d="M170.667 362.665c41.237 0 74.666-33.429 74.666-74.666c0-41.238-33.429-74.667-74.666-74.667c-41.238 0-74.667 33.429-74.667 74.667s33.429 74.666 74.667 74.666m35.476-50.962a42.67 42.67 0 0 0 7.19-23.704h-42.666v-42.667a42.66 42.66 0 0 0-39.419 26.339a42.664 42.664 0 0 0 31.095 58.175a42.67 42.67 0 0 0 43.8-18.143" /></g></svg>







            </div>

            <div>
              <h3 class="text-[#1a1a1a] font-semibold text-[20px] lg:text-[22px]">
                Manage
              </h3>

              <p class="mt-3 font-semibold text-[#1a1a1a] text-[16px]">
                Control performance
              </p>

              <p class="mt-3 text-[#1a1a1a]/70 text-[16px] leading-relaxed max-w-[520px]">
                Introduce active supervision, vendor management, reporting, and quality assurance.
              </p>
            </div>
          </div>

          <!-- ITEM 4 -->
          <div class="relative flex items-start gap-8">
            <div class="relative z-10">
              <!-- ✅ Put your icon here -->



  <svg xmlns="http://www.w3.org/2000/svg"  class="h-[64px] w-[64px]   p-1 bg-white rounded-[14px]"viewBox="0 0 16 16"><!-- Icon from Bootstrap Icons by The Bootstrap Authors - https://github.com/twbs/icons/blob/main/LICENSE.md --><g fill="#fdc101"><path d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m.354-5.854l1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0" /><path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z" /><path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" /></g></svg>



            </div>

            <div>
              <h3 class="text-[#1a1a1a] font-semibold text-[20px] lg:text-[22px]">
                Elevate
              </h3>

              <p class="mt-3 font-semibold text-[#1a1a1a] text-[16px]">
                Enterprise facility leadership
              </p>

              <p class="mt-3 text-[#1a1a1a]/70 text-[16px] leading-relaxed max-w-[520px]">
                Deliver strategic oversight, executive reporting, sustainability alignment, and asset lifecycle governance.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>




<section class="bg-gray-50">
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
            <button
              class="rounded-[10px] border border-[#FDC101]
                     px-6 py-3.5 text-[15px] font-semibold text-[#1a1a1a]
                     hover:bg-[#FDC101]/10 transition"
              type="button"
            >
              Learn More
            </button>

            <button
              class="inline-flex items-center gap-2 text-[15px] font-medium text-[#1a1a1a]
                     hover:opacity-70 transition"
              type="button"
            >
              Contact Us
              <span aria-hidden="true">›</span>
            </button>
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




<section class="bg-gray-50">
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

<section class="bg-white">
  <div class="py-44 px-4 md:px-8 lg:px-28" >

    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16">

      <!-- LEFT -->
      <div class="lg:w-[48%]">

        <h2 class="text-[#FDC101] font-semibold
                   text-[32px] sm:text-[38px] lg:text-[48px]">
          Contact us
        </h2>

        <p class="mt-5 text-[#1a1a1a]/70
                  text-[16px] sm:text-[17px] leading-relaxed">
          Have a question or want to discuss your facility’s operational needs?
          Contact Faciliya to learn how our structured approach can bring clarity,
          consistency, and reliable performance to your property.
        </p>

        <form class="mt-10 space-y-6" @submit.prevent="onSubmit">

          <!-- Name -->
          <div>
            <label class="text-[13px] font-medium text-[#1a1a1a]">
              Name
            </label>
            <input
              v-model="form.name"
              type="text"
              class="mt-2 w-full h-[46px] rounded-[8px]
                     border border-[#1a1a1a]/30 px-4 text-[15px]
                     outline-none focus:border-[#1a1a1a]/60"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="text-[13px] font-medium text-[#1a1a1a]">
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              class="mt-2 w-full h-[46px] rounded-[8px]
                     border border-[#1a1a1a]/30 px-4 text-[15px]
                     outline-none focus:border-[#1a1a1a]/60"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="text-[13px] font-medium text-[#1a1a1a]">
              Message
            </label>
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Type your message..."
              class="mt-2 w-full rounded-[8px]
                     border border-[#1a1a1a]/30 px-4 py-3 text-[15px]
                     outline-none resize-none focus:border-[#1a1a1a]/60"
            />
          </div>

          <!-- Terms -->
          <label class="flex items-center gap-2 text-[13px] text-[#1a1a1a]/70">
            <input
              v-model="form.terms"
              type="checkbox"
              class="h-[16px] w-[16px] accent-[#FDC101]"
            />
            I accept the Terms
          </label>

          <!-- Submit -->
          <button
            type="submit"
            class="mt-2 rounded-[10px] bg-[#FDC101]
                   px-8 py-3 text-[15px] font-semibold text-[#1a1a1a]
                   hover:brightness-95 transition"
          >
            Submit
          </button>

        </form>
      </div>

      <!-- RIGHT -->
      <div class="lg:w-[44%] lg:pt-10">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">

          <!-- Email -->
          <div class="flex gap-5">
            




            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#fdc101" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg>

              <p class="font-semibold text-[18px] text-[#1a1a1a]">Email</p>
              
              <a href="mailto:info@faciliyallc.com" class="mt-3 inline-block text-[14px] ">
              info@faciliyallc.com
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex gap-5">
            
            <div>



  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#fdc101" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg>



              <p class="font-semibold text-[18px] text-[#1a1a1a]">Phone</p>
             
              <a href="tel:+12015466248" class="mt-3 text-[14px] text-[#1a1a1a]">
               +1 (201) 546-6248
            </a>
            </div>
          </div>

          <!-- Office -->
          

        </div>

      </div>

    </div>
  </div>
</section>



 <section class="bg-white">
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

      <button
        class="mt-10 inline-flex items-center justify-center
               rounded-[12px] bg-[#FDC101]
               px-10 py-4
               text-[16px] font-semibold text-[#1a1a1a]
               hover:brightness-95 active:brightness-90
               transition"
        type="button"
      >
        Join our team
      </button>

    </div>
  </section>




</div>
  
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import { Navigation,  A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
  terms: false,
});

function onSubmit() {
  // hook this to your backend / email service
  console.log("submit", { ...form });
}
import { ref } from "vue";
const openIndex = ref(0); // first open like screenshot

const faqs = [
  {
    q: "What is integrated facilities management (IFM)?",
    a: "Integrated Facilities Management (IFM) is a structured approach to operating and supervising all facility-related services under a unified framework. Instead of managing vendors separately, IFM centralizes coordination, reporting, preventive maintenance, and governance into one controlled operational system.",
  },
  {
    q: "What types of properties does Faciliya serve?",
    a: "Faciliya supports commercial buildings, mixed-use developments, corporate environments, and high-end residential properties. Our services are tailored to environments where operational discipline, accountability, and asset protection are essential.",
  },
  {
    q: "How does Faciliya differ from traditional service providers?",
    a: "Traditional providers deliver isolated services. Faciliya operates facilities through structured oversight, preventive planning, and measurable performance standards. We function as an operational partner rather than a task-based contractor.",
  },
  {
    q: "Do you provide preventive maintenance programs?",
    a: "Yes. Preventive maintenance is a core component of our framework. We implement scheduled inspections, documentation protocols, and tracking systems designed to reduce reactive repairs and extend asset lifespan.",
  },
  {
    q: "Are services customized for each property?",
    a: "Yes. Every engagement begins with assessment and scope definition. We align service structure, reporting cadence, and oversight levels with the complexity and objectives of each property.",
  },
  {
    q: "Do you manage third-party vendors?",
    a: "Yes. Vendor coordination and supervision are central to our IFM model. We establish clear performance standards, monitor service delivery, and ensure accountability across all contracted providers.",
  },
  {
    q: "Can Faciliya support executive or corporate events?",
    a: "Yes. Faciliya provides structured event operations for corporate and executive-level engagements, ensuring alignment with facility protocols, security standards, and operational continuity.",
  },
  {
    q: "How is performance measured and reported?",
    a: "We implement documented workflows, service tracking, and structured reporting. Property stakeholders receive clear visibility into operational performance, maintenance status, and vendor accountability.",
  },
  {
    q: "Do you offer personal or contract-based services?",
    a: "Yes. Select personal services are available under structured contractual agreements, subject to scope definition, availability, and compliance requirements.",
  },
  {
    q: "How can we begin working with Faciliya?",
    a: "Engagement begins with an initial consultation to assess operational requirements and define scope. From there, we design a structured service framework aligned with your property’s long-term objectives.",
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