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
            <div class="flex justify-between items-center">
              <div>
                <p class="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]">
                  Request Consultation
                </p>
                <h2 class="text-[20px] sm:text-[24px] font-semibold mt-1 text-[#1a1a1a]">
                  Serving Dallas & Surrounding Areas
                </h2>
              </div>

              <button
                @click="closeModal"
                class="text-[#1a1a1a] text-lg"
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

            <!-- STEP 1 -->
            <div v-if="step === 1" class="space-y-4">
              <h3 class="section-title text-[#1a1a1a]">Contact Information</h3>

              <div class="grid gap-4 sm:grid-cols-2">
                <input v-model="form.fullName" required placeholder="Full Name *" class="input"/>
                <input v-model="form.companyName" placeholder="Company Name" class="input"/>
                <input v-model="form.email" type="email" required placeholder="Email Address *" class="input"/>
                <input v-model="form.phone" required placeholder="Phone Number *" class="input"/>
              </div>
            </div>

            <!-- STEP 2 -->
            <div v-if="step === 2" class="space-y-4">
              <h3 class="section-title text-[#1a1a1a]">Service Category</h3>

              <div class="grid gap-3 sm:grid-cols-2 text-[14px] text-[#1a1a1a]">
                <label v-for="option in serviceOptions" :key="option" class="radio">
                  <input type="radio" :value="option" v-model="form.serviceType" />
                  <span>{{ option }}</span>
                </label>
              </div>
            </div>

            <!-- STEP 3 -->
            <div v-if="step === 3" class="space-y-4">
              <h3 class="section-title text-[#1a1a1a]">Location</h3>

              <select v-model="form.propertyLocation" class="input">
                <option value="" disabled>Select City *</option>
                <option v-for="city in cities" :key="city">{{ city }}</option>
              </select>
            </div>

            <!-- STEP 4 -->
            <div v-if="step === 4" class="space-y-4">
              <h3 class="section-title text-[#1a1a1a]">Service Details</h3>

              <textarea
                v-model="form.scope"
                rows="4"
                required
                placeholder="Describe your service needs *"
                class="input"
              />
            </div>

            <!-- STEP 5 -->
            <div v-if="step === 5" class="space-y-4">
              <h3 class="section-title text-[#1a1a1a]">Additional Notes</h3>

              <textarea
                v-model="form.additionalNotes"
                rows="3"
                placeholder="Optional notes"
                class="input"
              />
            </div>

            <!-- CONFIRMATION -->
            <div v-if="submitted" class="text-center space-y-4 text-[#1a1a1a]">
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
            class="p-6 border-t border-[#1a1a1a]/10 flex justify-between text-[#1a1a1a]"
          >
            <button
              v-if="step > 1"
              @click="step--"
              class="text-[14px]"
            >
              Back
            </button>

            <div class="flex-1"></div>

            <button
              v-if="step < 5"
              @click="step++"
              class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-[14px]"
            >
              Next
            </button>

            <button
              v-else
              @click="handleSubmit"
              class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-[14px]"
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
  "Corporate & Asset Governance ",
  "Private Client Staffing ",
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
}

/* Disable scroll without layout shift */
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

function handleSubmit() {
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
         text-[14px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a]/70;
}

.section-title {
  @apply text-[16px] font-semibold text-[#1a1a1a];
}

.radio {
  @apply flex items-start gap-2 cursor-pointer text-[#1a1a1a];
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