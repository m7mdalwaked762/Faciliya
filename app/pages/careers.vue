<script setup>
import {
  Users,
  Clock,
  ShieldCheck,
  Award,
  ClipboardCheck,
  Handshake,
  FileCheck2
} from "lucide-vue-next"
useSeoMeta({
  title: "Careers & Partnerships | FACILIYA",
  description:
    "Explore employment opportunities and vendor partnership programs with FACILIYA. Join a structured operational network focused on professionalism, reliability, and disciplined service delivery.",
  ogTitle: "Careers & Partnerships | FACILIYA",
  ogDescription:
    "FACILIYA collaborates with qualified professionals and service vendors operating under structured performance and compliance standards.",
  twitterTitle: "Careers & Partnerships | FACILIYA",
  twitterDescription:
    "Join FACILIYA as an employee or vendor partner in our governance-driven operations network.",
  robots: "index, follow"
})
</script>

<template>
<div class="text-[#1a1a1a]">

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

<div class=" relative py-24 px-4 md:px-8 lg:px-28">

        <p class="text-[#FDC101] text-[14px] tracking-[2px] uppercase">
          Careers & Partnerships
        </p>

        <h1 class="mt-6 text-[36px] md:text-[48px] font-semibold leading-tight max-w-4xl">
          Build With FACILIYA
        </h1>

        <p class="mt-8 text-white/80 text-[18px] leading-relaxed max-w-3xl">
          FACILIYA collaborates with disciplined professionals and qualified service providers
who align with our structured operational standards. Whether you are seeking employment
or vendor partnership, all engagements operate under performance accountability,
compliance standards, and service discipline.
        </p>
        <div class="mt-4 text-[#FDC101] text-[13px] sm:text-[14px]">
        <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition cursor-pointer">
          Home
        </NuxtLink>
        
        <span class="mx-2">›</span>
        <span class="font-medium">
          Careers & Partnerships
        </span>
      </div>
      </div>
</section>





<!-- EMPLOYMENT -->
<section class="px-4 md:px-8 lg:px-28 py-24 bg-white">

<div class="max-w-3xl">
<h2 class="text-[28px] md:text-[32px] font-semibold">
Employment Opportunities
</h2>

<p class="mt-5 text-[16px] leading-relaxed text-[#1a1a1a]/80">
FACILIYA continuously develops a team of professionals committed to operational precision,
accountability, and disciplined service delivery.
</p>
</div>


<!-- EMPLOYEE CARDS -->
<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div class="bg-[#F8F9FB] p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<Users class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Professional Conduct
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
Employees represent FACILIYA through professionalism,
discipline, and service awareness.
</p>

</div>


<div class="bg-[#F8F9FB] p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<Clock class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Reliability
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
Consistent punctuality and reliability across operational responsibilities.
</p>

</div>


<div class="bg-[#F8F9FB] p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<ShieldCheck class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Operational Discipline
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
Roles operate under structured procedures and defined service protocols.
</p>

</div>


<div class="bg-[#F8F9FB] p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<Award class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Performance Standards
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
All team members align with measurable service performance expectations.
</p>

</div>

</div>


<!-- APPLICATION CTA -->
<div class="mt-14 flex justify-center sm:justify-start">
  <EmploymentApplicationModal />
</div>


</section>



<!-- VENDORS -->
<section class="px-4 md:px-8 lg:px-28 py-24 bg-[#F7F7FB]">

<div class="max-w-3xl">
<h2 class="text-[28px] md:text-[32px] font-semibold">
Vendor Partnerships
</h2>

<p class="mt-5 text-[16px] leading-relaxed text-[#1a1a1a]/80">
FACILIYA partners with qualified vendors and service providers across
facilities management, residential operations, and event services.
All vendor relationships operate under structured governance,
compliance review, and operational accountability.
</p>
</div>


<!-- VENDOR CARDS -->
<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div class="bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<FileCheck2 class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Compliance Review
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
Vendors undergo structured compliance and documentation review
before approval.
</p>

</div>


<div class="bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<Handshake class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Operational Alignment
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
Vendor services must align with FACILIYA operational standards and
service discipline.
</p>

</div>


<div class="bg-white p-8 rounded-2xl border border-[#1a1a1a]/10 text-center hover:shadow-xl transition">

<div class="w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full bg-[#FDC101]/15">
<ClipboardCheck class="w-6 h-6 text-[#FDC101]" />
</div>

<h3 class="mt-6 font-semibold">
Performance Monitoring
</h3>

<p class="mt-3 text-[14px] text-[#1a1a1a]/70 leading-relaxed">
Approved vendors operate under structured scope expectations and
performance oversight.
</p>

</div>

</div>


<!-- VENDOR CTA -->
<div class="mt-14 flex justify-center sm:justify-start">
  <VendorRegistrationForm />
</div>

</section>

</div>
</template>