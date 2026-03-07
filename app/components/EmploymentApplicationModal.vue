<template>
  <div>
    <!-- TRIGGER -->
    <button @click="openModal" class="px-6 py-2.5 rounded-full bg-[#FDC101] text-white text-[13px]">
      Apply Now
    </button>

    <!-- MODAL (Teleport fixes full-page overlay) -->
    <Teleport to="body">
      <transition name="modal">
        <div v-if="open" class="fixed inset-0 z-[99999] flex items-center justify-center px-4">
          <!-- BACKDROP -->
          <div class="absolute inset-0 bg-black/50 backdrop-blur-md" @click="closeModal"></div>

          <!-- PANEL -->
          <div
            class="relative z-[100000] w-full max-w-3xl bg-white rounded-2xl
                   shadow-2xl max-h-[90vh] overflow-hidden flex flex-col
                   text-[#1a1a1a] text-[13px]"
          >
            <!-- HEADER -->
            <div class="p-6 border-b border-[#1a1a1a]/10">
              <div class="flex justify-between items-center">
                <h2 class="text-[18px] font-semibold">Employment Application</h2>
                <button @click="closeModal">✕</button>
              </div>

              <!-- PROGRESS -->
              <div class="mt-4 flex gap-2">
                <div
                  v-for="n in 5"
                  :key="n"
                  class="h-1 flex-1 rounded-full transition"
                  :class="step >= n ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/15'"
                />
              </div>
            </div>

            <!-- BODY -->
            <div class="flex-1 overflow-y-auto p-8 space-y-8">
              <!-- SUCCESS MESSAGE -->
              <div
                v-if="successMessage"
                class="p-4 rounded-lg border border-green-200 bg-green-50 text-green-700 text-[13px]"
              >
                {{ successMessage }}
              </div>

              <!-- ERROR MESSAGE -->
              <div
                v-if="errorMessage"
                class="p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-[13px]"
              >
                {{ errorMessage }}
              </div>

              <!-- STEP 1 -->
              <div v-if="step === 1" class="space-y-4">
                <h3 class="font-semibold text-[14px]">Personal Information</h3>

                <div class="grid sm:grid-cols-2 gap-4">
                  <input v-model="form.fullName" placeholder="Full Name *" class="input" />
                  <input v-model="form.phone" placeholder="Phone *" class="input" />
                  <input v-model="form.email" placeholder="Email *" class="input" />
                  <input v-model="form.city" placeholder="City (DFW Area) *" class="input" />
                </div>
              </div>

              <!-- STEP 2 -->
              <div v-if="step === 2" class="space-y-4">
                <h3 class="font-semibold text-[14px]">Position Applying For</h3>

                <div class="grid sm:grid-cols-2 gap-3 text-[13px]">
                  <label v-for="pos in positions" :key="pos" class="flex gap-2">
                    <input type="radio" :value="pos" v-model="form.position" />
                    <span>{{ pos }}</span>
                  </label>
                </div>
              </div>

              <!-- STEP 3 -->
              <div v-if="step === 3" class="space-y-6">
                <h3 class="font-semibold text-[15px]">Position Overview</h3>

                <div v-if="currentPosition">
                  <div class="bg-[#1a1a1a]/5 p-6 rounded-xl mb-4">
                    <h4 class="font-semibold mb-2 text-[13px]">Position Summary</h4>
                    <p class="leading-relaxed text-[13px]">
                      {{ currentPosition.summary }}
                    </p>
                  </div>

                  <div class="bg-[#1a1a1a]/5 p-6 rounded-xl mb-4">
                    <h4 class="font-semibold mb-3 text-[13px]">Key Responsibilities</h4>
                    <ul class="space-y-2 text-[13px]">
                      <li v-for="item in currentPosition.responsibilities" :key="item">• {{ item }}</li>
                    </ul>
                  </div>

                  <div class="bg-[#1a1a1a]/5 p-6 rounded-xl">
                    <h4 class="font-semibold mb-3 text-[13px]">Qualifications</h4>
                    <ul class="space-y-2 text-[13px]">
                      <li v-for="item in currentPosition.qualifications" :key="item">• {{ item }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- STEP 4 -->
              <div v-if="step === 4" class="space-y-6">
                <h3 class="font-semibold text-[14px]">Employment Details</h3>

                <div>
                  <p class="font-medium mb-2 text-[13px]">Authorized to work in the U.S.? *</p>
                  <label class="mr-4"><input type="radio" value="Yes" v-model="form.workAuth" /> Yes</label>
                  <label><input type="radio" value="No" v-model="form.workAuth" /> No</label>
                </div>

                <div>
                  <p class="font-medium mb-2 text-[13px]">Reliable transportation?</p>
                  <label class="mr-4"><input type="radio" value="Yes" v-model="form.transport" /> Yes</label>
                  <label><input type="radio" value="No" v-model="form.transport" /> No</label>
                </div>

                <div>
                  <p class="font-medium mb-2 text-[13px]">Availability *</p>
                  <label class="mr-4"><input type="radio" value="Full-Time" v-model="form.availability" /> Full-Time</label>
                  <label class="mr-4"><input type="radio" value="Part-Time" v-model="form.availability" /> Part-Time</label>
                  <label><input type="radio" value="Flexible" v-model="form.availability" /> Flexible</label>
                </div>
              </div>

              <!-- STEP 5 -->
              <div v-if="step === 5" class="space-y-8">
                <h3 class="font-semibold text-[14px]">Experience & Resume</h3>

                <textarea
                  v-model="form.experience"
                  rows="4"
                  placeholder="Relevant Experience *"
                  class="input"
                />

                <div class="space-y-3">
                  <div
                    @dragover.prevent="dragActive = true"
                    @dragleave="dragActive = false"
                    @drop.prevent="handleDrop"
                    class="relative border-2 border-dashed rounded-[16px]
                           px-8 py-12 text-center transition-all duration-300"
                    :class="dragActive
                      ? 'border-[#1a1a1a] bg-[#1a1a1a]/5 scale-[1.01]'
                      : 'border-[#1a1a1a]/30'"
                  >
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.docx"
                      class="absolute inset-0 opacity-0 cursor-pointer"
                      @change="handleFileSelect"
                    />

                    <div class="space-y-2">
                      <div>Drag & drop resumes here (PDF/DOCX • 5MB max) *</div>
                      <div class="text-[#1a1a1a]/60 text-[12px]">CV is required to submit.</div>
                    </div>
                  </div>

                  <!-- CV RECEIVED MESSAGE -->
                  <div
                    v-if="cvMessage"
                    class="p-3 rounded-lg border border-green-200 bg-green-50 text-green-700 text-[13px]"
                  >
                    {{ cvMessage }}
                  </div>
                </div>
              </div>

              <!-- CONFIRM -->
              <div v-if="submitted" class="text-center space-y-4">
                <h3 class="text-[16px] font-semibold">Thank you for your application.</h3>
                <p class="text-[13px]">Your application has been submitted successfully.</p>
                <p class="text-[13px]">Our team will review your submission.</p>
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
                v-if="step < 5"
                @click="nextStep"
                :disabled="!canGoNext || submitting"
                class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-[13px] transition"
                :class="(!canGoNext || submitting) ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-95'"
              >
                Next
              </button>

              <button
                v-else
                @click="submitForm"
                :disabled="!canSubmit"
                class="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-[13px] transition"
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
const dragActive = ref(false)
const errorMessage = ref("")
const successMessage = ref("")
const cvMessage = ref("")
const submitting = ref(false)
const files = ref([])

const form = ref({
  fullName: "",
  phone: "",
  email: "",
  city: "",
  position: "",
  workAuth: "",
  transport: "",
  availability: "",
  experience: "",
})

const positions = [
  "Operations Management",
  "Facilities Engineering",
  "Maintenance Services",
  "Front-of-House Staff",
  "Valet Attendant",
  "Cleaning Personnel",
  "Sustainability & Compliance",
  "Event Support Staff",
  "Data & Performance Analytics",
]

const jobDescriptions = { /* keep your existing jobDescriptions exactly */ }

const { $supabase } = useNuxtApp()

const currentPosition = computed(() => jobDescriptions[form.value.position])

const hasCv = computed(() => Array.isArray(files.value) && files.value.length > 0)

const step1Valid = computed(() => !!form.value.fullName && !!form.value.phone && !!form.value.email && !!form.value.city)
const step2Valid = computed(() => !!form.value.position)
const step4Valid = computed(() => !!form.value.workAuth && !!form.value.availability)
const step5Valid = computed(() => !!form.value.experience && hasCv.value)

const canGoNext = computed(() => {
  if (step.value === 1) return step1Valid.value
  if (step.value === 2) return step2Valid.value
  if (step.value === 3) return true
  if (step.value === 4) return step4Valid.value
  return true
})

const canSubmit = computed(() => step5Valid.value && !submitting.value)

function resetState() {
  step.value = 1
  submitted.value = false
  dragActive.value = false
  errorMessage.value = ""
  successMessage.value = ""
  cvMessage.value = ""
  submitting.value = false
  files.value = []

  form.value = {
    fullName: "",
    phone: "",
    email: "",
    city: "",
    position: "",
    workAuth: "",
    transport: "",
    availability: "",
    experience: "",
  }
}

function openModal() {
  open.value = true
}

function closeModal() {
  open.value = false
  resetState()
}

function goBack() {
  errorMessage.value = ""
  successMessage.value = ""
  if (step.value > 1) step.value--
}

function setCvFile(file) {
  errorMessage.value = ""
  successMessage.value = ""

  if (!file) {
    files.value = []
    cvMessage.value = ""
    return
  }

  const name = String(file.name || "").toLowerCase()
  const isAllowed = name.endsWith(".pdf") || name.endsWith(".docx")
  const maxBytes = 5 * 1024 * 1024

  if (!isAllowed) {
    files.value = []
    cvMessage.value = ""
    errorMessage.value = "Please upload a PDF or DOCX file only."
    return
  }

  if (file.size > maxBytes) {
    files.value = []
    cvMessage.value = ""
    errorMessage.value = "File is too large. Max size is 5MB."
    return
  }

  files.value = [file]
  cvMessage.value = `CV received: ${file.name}`
}

function handleFileSelect(e) {
  const file = e?.target?.files?.[0]
  setCvFile(file)
  if (e?.target) e.target.value = ""
}

function handleDrop(e) {
  dragActive.value = false
  const file = e?.dataTransfer?.files?.[0]
  setCvFile(file)
}

function nextStep() {
  if (step.value === 1 && !step1Valid.value) {
    errorMessage.value = "Please complete all required fields before continuing."
    return
  }
  if (step.value === 2 && !step2Valid.value) {
    errorMessage.value = "Please select a position before continuing."
    return
  }
  if (step.value === 4 && !step4Valid.value) {
    errorMessage.value = "Please answer all employment questions before continuing."
    return
  }
  errorMessage.value = ""
  successMessage.value = ""
  step.value++
}

// keep your uploadResume + submitForm exactly as you have

watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : ""
})
</script>

<style scoped>
.input {
  @apply w-full border border-[#1a1a1a]/30 rounded px-3 py-2 text-[13px]
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