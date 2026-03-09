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

    <!-- MODAL -->
    <Teleport to="body">
      <transition name="modal">
        <div
          v-if="open"
          class="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-6"
        >
          <!-- BACKDROP -->
          <div
            class="absolute inset-0 bg-black/55 backdrop-blur-md"
            @click="closeModal"
          ></div>

          <!-- PANEL -->
          <div
            class="relative z-[100000] w-full max-w-3xl bg-white rounded-2xl
                  shadow-2xl max-h-[90vh] overflow-hidden flex flex-col
                  text-[#1a1a1a]"
            @click.stop
          >
            <!-- HEADER -->
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
                  class="text-lg leading-none"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <!-- PROGRESS -->
              <div v-if="!submitted" class="mt-4 flex gap-2">
                <div
                  v-for="n in 5"
                  :key="n"
                  class="h-1 flex-1 rounded-full transition"
                  :class="step >= n ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/15'"
                />
              </div>
            </div>

            <!-- BODY -->
            <div class="flex-1 overflow-y-auto p-6 sm:p-8">
              <!-- ERROR -->
              <div
                v-if="errorMessage"
                class="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-[14px]"
              >
                {{ errorMessage }}
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

              <!-- STEP 1 -->
              <div v-else-if="step === 1" class="space-y-4">
                <h3 class="section-title">
                  Contact Information
                </h3>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      v-model="form.fullName"
                      placeholder="Full Name *"
                      class="input"
                      @blur="touchField('fullName')"
                    />
                    <p
                      v-if="fieldErrors.fullName && (touched.fullName || form.fullName)"
                      class="mt-1 text-[12px] text-red-600"
                    >
                      {{ fieldErrors.fullName }}
                    </p>
                  </div>

                  <div>
                    <input
                      v-model="form.companyName"
                      placeholder="Company Name"
                      class="input"
                      @blur="touchField('companyName')"
                    />
                    <p
                      v-if="fieldErrors.companyName && (touched.companyName || form.companyName)"
                      class="mt-1 text-[12px] text-red-600"
                    >
                      {{ fieldErrors.companyName }}
                    </p>
                  </div>

                  <div>
                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="Email Address *"
                      class="input"
                      @blur="touchField('email')"
                    />
                    <p
                      v-if="fieldErrors.email && (touched.email || form.email)"
                      class="mt-1 text-[12px] text-red-600"
                    >
                      {{ fieldErrors.email }}
                    </p>
                  </div>

                  <div>
                    <input
                      v-model="form.phone"
                      placeholder="Phone Number *"
                      class="input"
                      @blur="touchField('phone')"
                    />
                    <p
                      v-if="fieldErrors.phone && (touched.phone || form.phone)"
                      class="mt-1 text-[12px] text-red-600"
                    >
                      {{ fieldErrors.phone }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- STEP 2 -->
              <div v-else-if="step === 2" class="space-y-4">
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
                      @change="touchField('serviceType')"
                    />
                    <span>{{ option }}</span>
                  </label>
                </div>

                <p
                  v-if="fieldErrors.serviceType && touched.serviceType"
                  class="text-[12px] text-red-600"
                >
                  {{ fieldErrors.serviceType }}
                </p>
              </div>

              <!-- STEP 3 -->
              <div v-else-if="step === 3" class="space-y-4">
                <h3 class="section-title">
                  Location
                </h3>

                <select
                  v-model="form.propertyLocation"
                  class="input"
                  @change="touchField('propertyLocation')"
                >
                  <option value="" disabled>
                    Select City *
                  </option>

                  <option
                    v-for="city in cities"
                    :key="city"
                    :value="city"
                  >
                    {{ city }}
                  </option>
                </select>

                <p
                  v-if="fieldErrors.propertyLocation && touched.propertyLocation"
                  class="text-[12px] text-red-600"
                >
                  {{ fieldErrors.propertyLocation }}
                </p>
              </div>

              <!-- STEP 4 -->
              <div v-else-if="step === 4" class="space-y-4">
                <h3 class="section-title">
                  Service Details
                </h3>

                <div>
                  <textarea
                    v-model="form.scope"
                    rows="4"
                    placeholder="Describe your service needs *"
                    class="input min-h-[120px] h-auto py-3"
                    @blur="touchField('scope')"
                  />
                  <p
                    v-if="fieldErrors.scope && (touched.scope || form.scope)"
                    class="mt-1 text-[12px] text-red-600"
                  >
                    {{ fieldErrors.scope }}
                  </p>
                </div>
              </div>

              <!-- STEP 5 -->
              <div v-else-if="step === 5" class="space-y-4">
                <h3 class="section-title">
                  Additional Notes
                </h3>

                <div>
                  <textarea
                    v-model="form.additionalNotes"
                    rows="3"
                    placeholder="Optional notes"
                    class="input min-h-[96px] h-auto py-3"
                    @blur="touchField('additionalNotes')"
                  />
                  <p
                    v-if="fieldErrors.additionalNotes && (touched.additionalNotes || form.additionalNotes)"
                    class="mt-1 text-[12px] text-red-600"
                  >
                    {{ fieldErrors.additionalNotes }}
                  </p>
                </div>
              </div>
            </div>

            <!-- FOOTER -->
            <div
              v-if="!submitted"
              class="p-6 border-t border-[#1a1a1a]/10 flex justify-between"
            >
              <button
                v-if="step > 1"
                @click="goBack"
                class="text-[14px]"
                type="button"
              >
                Back
              </button>

              <div v-else class="w-[44px]"></div>

              <button
                v-if="step < 5"
                @click="goNext"
                :disabled="!canGoNext()"
                type="button"
                class="px-5 py-2 rounded-full text-white text-[14px]"
                :class="canGoNext() ? 'bg-[#1a1a1a]' : 'bg-gray-300 cursor-not-allowed'"
              >
                Next
              </button>

              <button
                v-else
                @click="handleSubmit"
                :disabled="!canSubmit() || submitting"
                type="button"
                class="px-5 py-2 rounded-full text-white text-[14px]"
                :class="canSubmit() && !submitting ? 'bg-[#1a1a1a]' : 'bg-gray-300 cursor-not-allowed'"
              >
                {{ submitting ? "Submitting..." : "Submit" }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onUnmounted, computed } from "vue"

const open = ref(false)
const step = ref(1)
const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref("")

const form = reactive({
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  serviceType: "",
  propertyLocation: "",
  scope: "",
  additionalNotes: "",
})

const touched = reactive({
  fullName: false,
  companyName: false,
  email: false,
  phone: false,
  serviceType: false,
  propertyLocation: false,
  scope: false,
  additionalNotes: false,
})

const serviceOptions = [
  "Corporate & Asset Governance",
  "Private Client Staffing",
  "Event Operational Support",
  "Vendor Partnership Inquiry",
]

const cities = [
  "Dallas",
  "Plano",
  "Richardson",
  "Frisco",
  "Irving",
  "Addison",
  "Carrollton",
  "Garland",
  "McKinney",
  "Allen",
  "Fort Worth",
  "Other (DFW Area)",
]

function touchField(field: keyof typeof touched) {
  touched[field] = true
}

function touchFields(fields: (keyof typeof touched)[]) {
  fields.forEach((field) => {
    touched[field] = true
  })
}

function validateFullName(value: string) {
  const v = value.trim()

  if (!v) return "Full name is required."
  if (v.length < 3) return "Full name is too short."
  if (v.split(/\s+/).length < 2) return "Please enter your first and last name."
  if (!/^[\p{L}\s'.-]+$/u.test(v)) {
    return "Full name can only contain letters, spaces, apostrophes, periods, and hyphens."
  }

  return ""
}

function validateCompanyName(value: string) {
  const v = value.trim()

  if (!v) return ""
  if (v.length < 2) return "Company name is too short."
  if (!/^[\p{L}\p{N}\s&.,'()/-]+$/u.test(v)) {
    return "Please enter a valid company name."
  }

  return ""
}

function validateEmail(value: string) {
  const v = value.trim()

  if (!v) return "Email address is required."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
    return "Please enter a valid email address."
  }

  return ""
}

function validatePhone(value: string) {
  const v = value.trim()

  if (!v) return "Phone number is required."
  if (!/^[+]?[\d\s()\-]+$/.test(v)) {
    return "Please enter a valid phone number."
  }

  const digits = v.replace(/\D/g, "")
  if (digits.length < 7 || digits.length > 15) {
    return "Phone number must be between 7 and 15 digits."
  }

  return ""
}

function validateServiceType(value: string) {
  if (!value) return "Please select a service category."
  if (!serviceOptions.includes(value)) return "Please select a valid service category."
  return ""
}

function validatePropertyLocation(value: string) {
  if (!value) return "Please select a city."
  if (!cities.includes(value)) return "Please select a valid city."
  return ""
}

function validateScope(value: string) {
  const v = value.trim()

  if (!v) return "Service details are required."
  if (v.length < 15) return "Please provide a bit more detail about your service needs."

  return ""
}

function validateAdditionalNotes(value: string) {
  const v = value.trim()

  if (!v) return ""
  if (v.length < 3) return "Additional notes are too short."

  return ""
}

const fieldErrors = computed(() => ({
  fullName: validateFullName(form.fullName),
  companyName: validateCompanyName(form.companyName),
  email: validateEmail(form.email),
  phone: validatePhone(form.phone),
  serviceType: validateServiceType(form.serviceType),
  propertyLocation: validatePropertyLocation(form.propertyLocation),
  scope: validateScope(form.scope),
  additionalNotes: validateAdditionalNotes(form.additionalNotes),
}))

function openModal() {
  open.value = true
}

function resetForm() {
  step.value = 1
  submitted.value = false
  submitting.value = false
  errorMessage.value = ""

  form.fullName = ""
  form.companyName = ""
  form.email = ""
  form.phone = ""
  form.serviceType = ""
  form.propertyLocation = ""
  form.scope = ""
  form.additionalNotes = ""

  touched.fullName = false
  touched.companyName = false
  touched.email = false
  touched.phone = false
  touched.serviceType = false
  touched.propertyLocation = false
  touched.scope = false
  touched.additionalNotes = false
}

function closeModal() {
  open.value = false
  resetForm()
}

watch(open, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? "hidden" : ""
  }
})

function stepOneValid() {
  return (
    !fieldErrors.value.fullName &&
    !fieldErrors.value.companyName &&
    !fieldErrors.value.email &&
    !fieldErrors.value.phone
  )
}

function stepTwoValid() {
  return !fieldErrors.value.serviceType
}

function stepThreeValid() {
  return !fieldErrors.value.propertyLocation
}

function stepFourValid() {
  return !fieldErrors.value.scope
}

function canGoNext() {
  if (step.value === 1) return stepOneValid()
  if (step.value === 2) return stepTwoValid()
  if (step.value === 3) return stepThreeValid()
  if (step.value === 4) return stepFourValid()
  return true
}

function goBack() {
  errorMessage.value = ""
  step.value--
}

function goNext() {
  errorMessage.value = ""

  if (step.value === 1) {
    touchFields(["fullName", "companyName", "email", "phone"])
    if (!stepOneValid()) {
      errorMessage.value =
        fieldErrors.value.fullName ||
        fieldErrors.value.companyName ||
        fieldErrors.value.email ||
        fieldErrors.value.phone ||
        "Please complete all required fields correctly."
      return
    }
  }

  if (step.value === 2) {
    touchFields(["serviceType"])
    if (!stepTwoValid()) {
      errorMessage.value = fieldErrors.value.serviceType || "Please select a valid service category."
      return
    }
  }

  if (step.value === 3) {
    touchFields(["propertyLocation"])
    if (!stepThreeValid()) {
      errorMessage.value = fieldErrors.value.propertyLocation || "Please select a valid city."
      return
    }
  }

  if (step.value === 4) {
    touchFields(["scope"])
    if (!stepFourValid()) {
      errorMessage.value = fieldErrors.value.scope || "Please describe your service needs."
      return
    }
  }

  step.value++
}

function canSubmit() {
  return (
    stepOneValid() &&
    stepTwoValid() &&
    stepThreeValid() &&
    stepFourValid() &&
    !fieldErrors.value.additionalNotes
  )
}

const { $supabase } = useNuxtApp()

async function handleSubmit() {
  if (submitting.value) return

  touchFields([
    "fullName",
    "companyName",
    "email",
    "phone",
    "serviceType",
    "propertyLocation",
    "scope",
    "additionalNotes",
  ])

  if (!canSubmit()) {
    errorMessage.value =
      fieldErrors.value.fullName ||
      fieldErrors.value.companyName ||
      fieldErrors.value.email ||
      fieldErrors.value.phone ||
      fieldErrors.value.serviceType ||
      fieldErrors.value.propertyLocation ||
      fieldErrors.value.scope ||
      fieldErrors.value.additionalNotes ||
      "Please complete all required fields correctly."
    return
  }

  errorMessage.value = ""
  submitting.value = true

  const { error } = await $supabase
    .from("consultation_requests")
    .insert([
      {
        full_name: form.fullName.trim(),
        company_name: form.companyName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service_type: form.serviceType,
        property_location: form.propertyLocation,
        scope: form.scope.trim(),
        additional_notes: form.additionalNotes.trim(),
      },
    ])

  submitting.value = false

  if (error) {
    errorMessage.value =
      "Something went wrong while submitting your request. Please try again shortly or contact our team directly."
    return
  }

  submitted.value = true
}

function handleEsc(e: KeyboardEvent) {
  if (e.key === "Escape" && open.value) closeModal()
}

onMounted(() => {
  window.addEventListener("keydown", handleEsc)
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleEsc)
  document.body.style.overflow = ""
})
</script>

<style scoped>
.input {
  @apply w-full h-[44px] px-3 rounded-[8px] border border-[#1a1a1a]/30
        text-[14px] outline-none focus:border-[#1a1a1a]/70 bg-white;
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