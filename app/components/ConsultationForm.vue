<template>
  <div>

    <!-- Trigger Button -->
    <button
      @click="openModal"
      class="px-6 py-2.5 rounded-xl text-[14px] font-medium
             bg-[#FDC101] text-[#1a1a1a]
             hover:bg-[#1a1a1a] hover:text-white transition"
    >
      Request a Consultation
    </button>

    <!-- Modal -->
    <transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
      >

        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-md"
          @click="closeModal"
        ></div>

        <!-- Panel -->
        <div
          class="relative z-10 w-full max-w-3xl bg-white rounded-2xl
                 shadow-2xl max-h-[90vh] overflow-hidden flex flex-col
                 text-[#1a1a1a]"
        >

          <!-- Header -->
          <div class="p-6 border-b border-[#1a1a1a]/10">

            <div class="flex justify-between items-start gap-4">

              <div>
                <p class="text-[11px] tracking-[0.2em] uppercase">
                  Request Consultation
                </p>

                <h2 class="text-[20px] sm:text-[24px] font-semibold mt-1">
                  Serving Dallas & Surrounding Areas
                </h2>
              </div>

              <button
                @click="closeModal"
                class="text-lg"
              >
                ✕
              </button>

            </div>

            <!-- Progress -->
            <div class="mt-4 flex gap-2">
              <div
                v-for="n in 5"
                :key="n"
                class="h-1 flex-1 rounded-full transition"
                :class="step >= n ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/15'"
              />
            </div>

          </div>

          <!-- Body -->
          <div class="flex-1 overflow-y-auto p-6 sm:p-8">

            <!-- Error Message -->
            <div
              v-if="errorMessage"
              class="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-[14px]"
            >
              {{ errorMessage }}
            </div>

            <!-- STEP 1 -->
            <div v-if="step === 1" class="space-y-4">

              <h3 class="section-title">
                Contact Information
              </h3>

              <div class="grid gap-4 sm:grid-cols-2">

                <input
                  v-model="form.fullName"
                  placeholder="Full Name *"
                  class="input"
                />

                <input
                  v-model="form.companyName"
                  placeholder="Company Name"
                  class="input"
                />

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email Address *"
                  class="input"
                />

                <input
                  v-model="form.phone"
                  placeholder="Phone Number *"
                  class="input"
                />

              </div>

            </div>

            <!-- STEP 2 -->
            <div v-if="step === 2" class="space-y-4">

              <h3 class="section-title">
                Service Category
              </h3>

              <div class="grid gap-3 sm:grid-cols-2 text-[14px]">

                <label
                  v-for="option in serviceOptions"
                  :key="option"
                  class="radio"
                >
                  <input
                    type="radio"
                    :value="option"
                    v-model="form.serviceType"
                  />

                  <span>{{ option }}</span>

                </label>

              </div>

            </div>

            <!-- STEP 3 -->
            <div v-if="step === 3" class="space-y-4">

              <h3 class="section-title">
                Location
              </h3>

              <select
                v-model="form.propertyLocation"
                class="input"
              >

                <option value="" disabled>
                  Select City *
                </option>

                <option
                  v-for="city in cities"
                  :key="city"
                >
                  {{ city }}
                </option>

              </select>

            </div>

            <!-- STEP 4 -->
            <div v-if="step === 4" class="space-y-4">

              <h3 class="section-title">
                Service Details
              </h3>

              <textarea
                v-model="form.scope"
                rows="4"
                placeholder="Describe your service needs *"
                class="input"
              />

            </div>

            <!-- STEP 5 -->
            <div v-if="step === 5" class="space-y-4">

              <h3 class="section-title">
                Additional Notes
              </h3>

              <textarea
                v-model="form.additionalNotes"
                rows="3"
                placeholder="Optional notes"
                class="input"
              />

            </div>

            <!-- SUCCESS -->
            <div
              v-if="submitted"
              class="text-center space-y-4"
            >

              <h3 class="text-[20px] font-semibold">
                Thank you for contacting FACILIYA.
              </h3>

              <p class="text-[14px]">
                A representative will review your request and respond shortly.
              </p>

              <button
                @click="closeModal"
                class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-[14px]"
              >
                Close
              </button>

            </div>

          </div>

          <!-- Footer -->
          <div
            v-if="!submitted"
            class="p-6 border-t border-[#1a1a1a]/10 flex justify-between"
          >

            <button
              v-if="step > 1"
              @click="step--"
              class="text-[14px]"
            >
              Back
            </button>

            <div class="flex-1"></div>

            <!-- Next -->
            <button
              v-if="step < 5"
              @click="step++"
              :disabled="!canGoNext()"
              class="px-5 py-2 rounded-full text-white text-[14px]"
              :class="canGoNext() ? 'bg-[#1a1a1a]' : 'bg-gray-300 cursor-not-allowed'"
            >
              Next
            </button>

            <!-- Submit -->
            <button
              v-else
              @click="handleSubmit"
              :disabled="form.scope.trim() === ''"
              class="px-5 py-2 rounded-full text-white text-[14px]"
              :class="form.scope.trim() !== '' ? 'bg-[#1a1a1a]' : 'bg-gray-300 cursor-not-allowed'"
            >
              Submit
            </button>

          </div>

        </div>

      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onUnmounted } from "vue"

const open = ref(false)
const step = ref(1)
const submitted = ref(false)
const errorMessage = ref("")

const form = reactive({
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  serviceType: "",
  propertyLocation: "",
  scope: "",
  additionalNotes: ""
})

const serviceOptions = [
  "Corporate & Asset Governance",
  "Private Client Staffing",
  "Event Operational Support",
  "Vendor Partnership Inquiry"
]

const cities = [
  "Dallas","Plano","Richardson","Frisco","Irving",
  "Addison","Carrollton","Garland","McKinney",
  "Allen","Fort Worth","Other (DFW Area)"
]

function openModal() {
  open.value = true
}

function closeModal() {
  open.value = false
  step.value = 1
  submitted.value = false
  errorMessage.value = ""
}

watch(open, (val) => {
  if (val) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = scrollBarWidth + "px"
  } else {
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  }
})

/* VALIDATION */

function stepOneValid() {
  return (
    form.fullName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== ""
  )
}

function stepTwoValid() {
  return form.serviceType !== ""
}

function stepThreeValid() {
  return form.propertyLocation !== ""
}

function stepFourValid() {
  return form.scope.trim() !== ""
}

function canGoNext() {
  if (step.value === 1) return stepOneValid()
  if (step.value === 2) return stepTwoValid()
  if (step.value === 3) return stepThreeValid()
  if (step.value === 4) return stepFourValid()
  return true
}

/* SUPABASE */

const { $supabase } = useNuxtApp()

async function handleSubmit() {

errorMessage.value = ""

const { error } = await $supabase
.from("consultation_requests")
.insert([{
  full_name: form.fullName,
  company_name: form.companyName,
  email: form.email,
  phone: form.phone,
  service_type: form.serviceType,
  property_location: form.propertyLocation,
  scope: form.scope,
  additional_notes: form.additionalNotes
}])

if (error) {
  errorMessage.value =
  "Something went wrong while submitting your request. Please try again shortly or contact our team directly."
  return
}

submitted.value = true
}

function handleEsc(e: KeyboardEvent) {
  if (e.key === "Escape") closeModal()
}

onMounted(() => window.addEventListener("keydown", handleEsc))
onUnmounted(() => window.removeEventListener("keydown", handleEsc))
</script>

<style scoped>
.input {
  @apply w-full h-[44px] px-3 rounded-[8px] border border-[#1a1a1a]/30
         text-[14px] outline-none focus:border-[#1a1a1a]/70;
}

.section-title {
  @apply text-[16px] font-semibold;
}

.radio {
  @apply flex items-start gap-2 cursor-pointer;
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