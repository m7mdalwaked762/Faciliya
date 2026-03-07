<template>
  <div>
    <!-- TRIGGER BUTTON -->
    <button
      @click="openModal"
      class="px-6 py-2.5 rounded-full bg-[#FDC101] text-white text-[14px] font-medium"
    >
      Register as a Vendor
    </button>

    <!-- MODAL (Teleport fixes full-page blur/overlay) -->
    <Teleport to="body">
      <transition name="modal">
        <div
          v-if="open"
          class="fixed inset-0 z-[99999] flex items-center justify-center px-4"
        >
          <!-- BACKDROP -->
          <div
            class="absolute inset-0 bg-black/50 backdrop-blur-md"
            @click="closeModal"
          ></div>

          <!-- PANEL -->
          <div
            class="relative z-[100000] w-full max-w-4xl bg-white rounded-2xl
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
            <div class="flex-1 overflow-y-auto p-8 space-y-6">
              <!-- GENERIC ERROR -->
              <div
                v-if="errorMessage"
                class="p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-[14px]"
              >
                {{ errorMessage }}
              </div>

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
                  <input v-model.trim="form.companyName" placeholder="Company Legal Name *" class="input" />
                  <input v-model.trim="form.registrationNumber" placeholder="Business Registration Number *" class="input" />
                  <input v-model.trim="form.website" placeholder="Website *" class="input" />
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
                  <input type="radio" value="Technical Vendor" v-model="form.category" />
                  Technical Vendor
                </label>
                <label class="block">
                  <input type="radio" value="Strategic Partner" v-model="form.category" />
                  Strategic Partner
                </label>
              </div>

              <!-- SECTION 3 -->
              <div v-if="step === 4" class="space-y-4">
                <h3 class="font-semibold">Service Categories *</h3>
                <div class="grid sm:grid-cols-2 gap-2 text-[14px]">
                  <label v-for="s in services" :key="s">
                    <input type="checkbox" :value="s" v-model="form.services" />
                    {{ s }}
                  </label>
                </div>
              </div>

              <!-- SECTION 4 -->
              <div v-if="step === 5" class="space-y-4">
                <h3 class="font-semibold">Licensing & Insurance</h3>
                <input v-model.trim="form.license" placeholder="Trade License Number *" class="input" />
                <div>
                  <p class="mb-2 text-[14px]">General Liability Insurance *</p>
                  <label class="mr-4">
                    <input type="radio" value="Yes" v-model="form.insurance" /> Yes
                  </label>
                  <label>
                    <input type="radio" value="No" v-model="form.insurance" /> No
                  </label>
                </div>
              </div>

              <!-- SECTION 5 -->
              <div v-if="step === 6" class="space-y-4">
                <h3 class="font-semibold">Operational Capacity</h3>
                <select v-model="form.responseTime" class="input">
                  <option value="" disabled>Average Response Time *</option>
                  <option>Same Day</option>
                  <option>24 Hours</option>
                  <option>48 Hours</option>
                  <option>72 Hours</option>
                </select>
                <input
                  v-model.trim="form.staffCount"
                  type="number"
                  min="1"
                  placeholder="Number of Technicians *"
                  class="input"
                />
              </div>

              <!-- SECTION 6 -->
              <div v-if="step === 7" class="space-y-4">
                <h3 class="font-semibold">Agreement</h3>
                <label class="block">
                  <input type="checkbox" v-model="form.agree" />
                  I confirm the information provided is accurate. *
                </label>
              </div>

              <!-- CONFIRMATION -->
              <div v-if="submitted" class="text-center space-y-4">
                <h3 class="text-[18px] font-semibold">Thank you for your submission.</h3>
                <p class="text-[14px]">
                  Our team will review your registration and contact qualified vendors.
                </p>
              </div>
            </div>

            <!-- FOOTER -->
            <div v-if="!submitted" class="p-6 border-t border-[#1a1a1a]/10 flex justify-between">
              <button
                v-if="step > 1"
                @click="goBack"
                :disabled="submitting"
                :class="submitting ? 'opacity-50 cursor-not-allowed' : ''"
              >
                Back
              </button>

              <div class="flex-1"></div>

              <button
                v-if="step < 7"
                @click="nextStep"
                :disabled="!canGoNext || submitting"
                class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white transition"
                :class="(!canGoNext || submitting) ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-95'"
              >
                Next
              </button>

              <button
                v-else
                @click="submitForm"
                :disabled="!canSubmit"
                class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white transition"
                :class="(!canSubmit) ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-95'"
              >
                {{ submitting ? "Submitting..." : "Submit Application" }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue"

const open = ref(false)
const step = ref(1)
const submitted = ref(false)

const errorMessage = ref("")
const submitting = ref(false)

const services = [
  "HVAC & Mechanical",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "Security & Access Control",
  "Energy Management",
  "Event Production",
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
  agree: false,
})

function openModal() {
  open.value = true
  errorMessage.value = ""
}

function closeModal() {
  open.value = false
  step.value = 1
  submitted.value = false
  errorMessage.value = ""
  submitting.value = false
}

function goBack() {
  errorMessage.value = ""
  if (step.value > 1) step.value--
}

/** ✅ EVERYTHING REQUIRED */
const step2Valid = computed(
  () =>
    !!form.value.companyName &&
    !!form.value.registrationNumber &&
    !!form.value.website &&
    !!form.value.years
)

const step3Valid = computed(() => !!form.value.category)
const step4Valid = computed(() => Array.isArray(form.value.services) && form.value.services.length > 0)
const step5Valid = computed(() => !!form.value.license && !!form.value.insurance)
const step6Valid = computed(() => !!form.value.responseTime && !!form.value.staffCount)
const step7Valid = computed(() => !!form.value.agree)

// Controls Next button
const canGoNext = computed(() => {
  if (step.value === 2) return step2Valid.value
  if (step.value === 3) return step3Valid.value
  if (step.value === 4) return step4Valid.value
  if (step.value === 5) return step5Valid.value
  if (step.value === 6) return step6Valid.value
  if (step.value === 7) return step7Valid.value
  return true
})

// Controls Submit button
const canSubmit = computed(() => step7Valid.value && !submitting.value)

function validateStepOrShowGeneric() {
  const GENERIC = "Please complete all required fields before continuing."

  if (step.value === 2 && !step2Valid.value) return (errorMessage.value = GENERIC), false
  if (step.value === 3 && !step3Valid.value) return (errorMessage.value = GENERIC), false
  if (step.value === 4 && !step4Valid.value) return (errorMessage.value = GENERIC), false
  if (step.value === 5 && !step5Valid.value) return (errorMessage.value = GENERIC), false
  if (step.value === 6 && !step6Valid.value) return (errorMessage.value = GENERIC), false
  if (step.value === 7 && !step7Valid.value) return (errorMessage.value = GENERIC), false

  errorMessage.value = ""
  return true
}

function nextStep() {
  if (!validateStepOrShowGeneric()) return
  step.value++
}

const { $supabase } = useNuxtApp()

async function submitForm() {
  errorMessage.value = ""

  if (!step7Valid.value) {
    errorMessage.value = "Please complete all required fields before submitting."
    return
  }

  const GENERIC_ERROR = "Something went wrong. Please try again later."
  submitting.value = true

  try {
    const { error } = await $supabase.from("vendor_registrations").insert([
      {
        company_name: form.value.companyName,
        registration_number: form.value.registrationNumber,
        website: form.value.website,
        years: form.value.years,
        category: form.value.category,
        services: form.value.services,
        license: form.value.license,
        insurance: form.value.insurance,
        response_time: form.value.responseTime,
        staff_count: form.value.staffCount,
        // ✅ agree NOT sent
      },
    ])

    if (error) {
      errorMessage.value = GENERIC_ERROR
      return
    }

    submitted.value = true
  } catch (e) {
    errorMessage.value = GENERIC_ERROR
  } finally {
    submitting.value = false
  }
}

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
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>