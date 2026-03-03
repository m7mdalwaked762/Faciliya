<template>
  <div>
    <!-- TRIGGER BUTTON -->
    <button
      @click="openModal"
      class="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-[14px] font-medium"
    >
      Register as a Vendor
    </button>

    <!-- MODAL -->
    <transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        <!-- BACKDROP -->
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-md"
          @click="closeModal"
        ></div>

        <!-- PANEL -->
        <div
          class="relative z-10 w-full max-w-4xl bg-white rounded-2xl
                 shadow-2xl max-h-[90vh] overflow-hidden flex flex-col
                 text-[#1a1a1a]"
        >
          <!-- HEADER -->
          <div class="p-6 border-b border-[#1a1a1a]/10">
            <div class="flex justify-between items-center">
              <h2 class="text-[18px] sm:text-[22px] font-semibold">
                Strategic Vendor & Partner Registration
              </h2>
              <button @click="closeModal">✕</button>
            </div>

            <!-- PROGRESS -->
            <div class="mt-4 flex gap-2">
              <div
                v-for="n in 7"
                :key="n"
                class="h-1 flex-1 rounded-full transition"
                :class="step >= n ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/15'"
              />
            </div>
          </div>

          <!-- BODY -->
          <div class="flex-1 overflow-y-auto p-8 space-y-8">

            <!-- INTRO (STEP 1) -->
            <div v-if="step === 1" class="space-y-4">
              <h3 class="font-semibold">Introduction</h3>
              <p class="text-[14px] leading-relaxed">
                FACILIYA operates under a governance-driven Integrated Facilities Management model.
                Inclusion in this network does not guarantee immediate contract award.
                Engagements are project-based and activated upon contract deployment.
              </p>
            </div>

            <!-- SECTION 1 -->
            <div v-if="step === 2" class="space-y-4">
              <h3 class="font-semibold">Company Information</h3>
              <div class="grid sm:grid-cols-2 gap-4">
                <input v-model="form.companyName" placeholder="Company Legal Name *" class="input"/>
                <input v-model="form.registrationNumber" placeholder="Business Registration Number *" class="input"/>
                <input v-model="form.website" placeholder="Website" class="input"/>
                <select v-model="form.years" class="input">
                  <option value="" disabled>Years in Business *</option>
                  <option>0–1</option>
                  <option>1–3</option>
                  <option>3–5</option>
                  <option>5–10</option>
                  <option>10+</option>
                </select>
              </div>
            </div>

            <!-- SECTION 2 -->
            <div v-if="step === 3" class="space-y-4">
              <h3 class="font-semibold">Partnership Category</h3>
              <label class="block">
                <input type="radio" value="Technical Vendor" v-model="form.category"/>
                Technical Vendor
              </label>
              <label class="block">
                <input type="radio" value="Strategic Partner" v-model="form.category"/>
                Strategic Partner
              </label>
            </div>

            <!-- SECTION 3 -->
            <div v-if="step === 4" class="space-y-4">
              <h3 class="font-semibold">Service Categories</h3>
              <div class="grid sm:grid-cols-2 gap-2 text-[14px]">
                <label v-for="s in services" :key="s">
                  <input type="checkbox" :value="s" v-model="form.services"/>
                  {{ s }}
                </label>
              </div>
            </div>

            <!-- SECTION 4 -->
            <div v-if="step === 5" class="space-y-4">
              <h3 class="font-semibold">Licensing & Insurance</h3>
              <input v-model="form.license" placeholder="Trade License Number" class="input"/>
              <div>
                <p class="mb-2 text-[14px]">General Liability Insurance *</p>
                <label class="mr-4">
                  <input type="radio" value="Yes" v-model="form.insurance"/> Yes
                </label>
                <label>
                  <input type="radio" value="No" v-model="form.insurance"/> No
                </label>
              </div>
            </div>

            <!-- SECTION 5 -->
            <div v-if="step === 6" class="space-y-4">
              <h3 class="font-semibold">Operational Capacity</h3>
              <select v-model="form.responseTime" class="input">
                <option value="" disabled>Average Response Time</option>
                <option>Same Day</option>
                <option>24 Hours</option>
                <option>48 Hours</option>
                <option>72 Hours</option>
              </select>
              <input v-model="form.staffCount" type="number" placeholder="Number of Technicians" class="input"/>
            </div>

            <!-- SECTION 6 -->
            <div v-if="step === 7" class="space-y-4">
              <h3 class="font-semibold">Agreement</h3>
              <label class="block">
                <input type="checkbox" v-model="form.agree"/>
                I confirm the information provided is accurate.
              </label>
            </div>

            <!-- CONFIRMATION -->
            <div v-if="submitted" class="text-center space-y-4">
              <h3 class="text-[18px] font-semibold">
                Thank you for your submission.
              </h3>
              <p class="text-[14px]">
                Our team will review your registration and contact qualified vendors.
              </p>
            </div>

          </div>

          <!-- FOOTER -->
          <div v-if="!submitted"
               class="p-6 border-t border-[#1a1a1a]/10 flex justify-between">

            <button v-if="step > 1" @click="step--">Back</button>
            <div class="flex-1"></div>

            <button
              v-if="step < 7"
              @click="nextStep"
              class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white"
            >
              Next
            </button>

            <button
              v-else
              @click="submitForm"
              class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white"
            >
              Submit Application
            </button>
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"

const open = ref(false)
const step = ref(1)
const submitted = ref(false)

const services = [
  "HVAC & Mechanical",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "Security & Access Control",
  "Energy Management",
  "Event Production"
]

const form = ref({
  companyName: "",
  registrationNumber: "",
  website: "",
  years: "",
  category: "",
  services: [],
  license: "",
  insurance: "",
  responseTime: "",
  staffCount: "",
  agree: false
})

function openModal() { open.value = true }
function closeModal() { open.value = false; step.value = 1 }

function nextStep() {
  if (!validateStep()) return
  step.value++
}

function validateStep() {
  if (step.value === 2)
    return form.value.companyName && form.value.registrationNumber && form.value.years
  if (step.value === 3)
    return form.value.category
  if (step.value === 5)
    return form.value.insurance
  if (step.value === 7)
    return form.value.agree
  return true
}

function submitForm() {
  submitted.value = true
}

/* LOCK SCROLL */
watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : ""
})
</script>

<style scoped>
.input {
  @apply w-full border border-[#1a1a1a]/30 rounded px-3 py-2 text-[14px]
         focus:border-[#1a1a1a]/70 outline-none;
}

.modal-enter-active,
.modal-leave-active { transition: all 0.25s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; transform: scale(0.96); }
</style>