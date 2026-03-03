<template>
  <div>
    <!-- TRIGGER -->
    <button
      @click="openModal"
      class="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-[14px]"
    >
      Apply Now
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
          class="relative z-10 w-full max-w-3xl bg-white rounded-2xl
                 shadow-2xl max-h-[90vh] overflow-hidden flex flex-col
                 text-[#1a1a1a]"
        >
          <!-- HEADER -->
          <div class="p-6 border-b border-[#1a1a1a]/10">
            <div class="flex justify-between items-center">
              <h2 class="text-[20px] font-semibold">
                Employment Application
              </h2>
              <button @click="closeModal">✕</button>
            </div>

            <!-- PROGRESS -->
            <div class="mt-4 flex gap-2">
              <div
                v-for="n in 4"
                :key="n"
                class="h-1 flex-1 rounded-full transition"
                :class="step >= n ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/15'"
              />
            </div>
          </div>

          <!-- BODY -->
          <div class="flex-1 overflow-y-auto p-8 space-y-8">

            <!-- STEP 1 -->
            <div v-if="step === 1" class="space-y-4">
              <h3 class="font-semibold">Personal Information</h3>
              <div class="grid sm:grid-cols-2 gap-4">
                <input v-model="form.fullName" placeholder="Full Name *" class="input"/>
                <input v-model="form.phone" placeholder="Phone *" class="input"/>
                <input v-model="form.email" placeholder="Email *" class="input"/>
                <input v-model="form.city" placeholder="City (DFW Area) *" class="input"/>
              </div>
            </div>

            <!-- STEP 2 -->
            <div v-if="step === 2" class="space-y-4">
              <h3 class="font-semibold">Position Applying For</h3>
              <div class="grid sm:grid-cols-2 gap-3 text-[14px]">
                <label v-for="pos in positions" :key="pos" class="flex gap-2">
                  <input type="radio" :value="pos" v-model="form.position" />
                  <span>{{ pos }}</span>
                </label>
              </div>
            </div>

            <!-- STEP 3 -->
            <div v-if="step === 3" class="space-y-6">
              <h3 class="font-semibold">Employment Details</h3>

              <div>
                <p class="font-medium mb-2">Authorized to work in the U.S.? *</p>
                <label class="mr-4"><input type="radio" value="Yes" v-model="form.workAuth"/> Yes</label>
                <label><input type="radio" value="No" v-model="form.workAuth"/> No</label>
              </div>

              <div>
                <p class="font-medium mb-2">Reliable transportation?</p>
                <label class="mr-4"><input type="radio" value="Yes" v-model="form.transport"/> Yes</label>
                <label><input type="radio" value="No" v-model="form.transport"/> No</label>
              </div>

              <div>
                <p class="font-medium mb-2">Availability *</p>
                <label class="mr-4"><input type="radio" value="Full-Time" v-model="form.availability"/> Full-Time</label>
                <label class="mr-4"><input type="radio" value="Part-Time" v-model="form.availability"/> Part-Time</label>
                <label><input type="radio" value="Flexible" v-model="form.availability"/> Flexible</label>
              </div>
            </div>

            <!-- STEP 4 -->
            <div v-if="step === 4" class="space-y-8">
              <h3 class="font-semibold">Experience & Resume</h3>

              <textarea
                v-model="form.experience"
                rows="4"
                placeholder="Relevant Experience *"
                class="input"
              ></textarea>

              <!-- UPLOAD -->
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
                Drag & drop resumes here (PDF/DOCX • 5MB max)
              </div>

              <!-- FILE LIST -->
              <div v-for="(f, i) in files" :key="i"
                   class="border rounded-[12px] p-4 space-y-3 border-[#1a1a1a]/20">

                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-[#1a1a1a]/10 flex items-center justify-center rounded">📄</div>
                    <div>
                      <p class="text-[14px]">{{ f.file.name }}</p>
                      <p class="text-[12px]">{{ formatSize(f.file.size) }}</p>
                    </div>
                  </div>
                  <button @click="removeFile(i)" class="underline text-[13px]">Remove</button>
                </div>

                <!-- PROGRESS -->
                <div v-if="f.uploading" class="h-2 bg-[#1a1a1a]/10 rounded-full">
                  <div class="h-full bg-[#1a1a1a] transition-all"
                       :style="{ width: f.progress + '%' }"></div>
                </div>

                <!-- SUCCESS -->
                <div v-if="f.success" class="text-green-600 text-[13px] flex items-center gap-2">
                  ✔ Upload Complete
                </div>

                <!-- PARSE -->
                <div v-if="f.parsed" class="bg-[#1a1a1a]/5 p-3 rounded text-[13px]">
                  <p><strong>Name:</strong> {{ f.parsed.name }}</p>
                  <p><strong>Email:</strong> {{ f.parsed.email }}</p>
                </div>
              </div>
            </div>

            <!-- CONFIRM -->
            <div v-if="submitted" class="text-center space-y-4">
              <h3 class="text-[18px] font-semibold">
                Thank you for your application.
              </h3>
              <p class="text-[14px]">
                Our team will review your submission.
              </p>
            </div>

          </div>

          <!-- FOOTER -->
          <div v-if="!submitted"
               class="p-6 border-t border-[#1a1a1a]/10 flex justify-between">

            <button v-if="step > 1" @click="step--">Back</button>
            <div class="flex-1"></div>

            <button
              v-if="step < 4"
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
const dragActive = ref(false)
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
  experience: ""
})

const positions = [
  "Operations Management",
  "Facilities Engineering",
  "Maintenance Services",
  "Front-of-House Staff",
  "Cleaning Personnel",
  "Event Support Staff",
  "Data & Performance Analytics"
]

const MAX_SIZE = 5 * 1024 * 1024
const allowedTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
]

function openModal() { open.value = true }
function closeModal() { open.value = false; step.value = 1 }

function nextStep() {
  if (!validateStep()) return
  step.value++
}

function validateStep() {
  if (step.value === 1) {
    return form.value.fullName && form.value.email && form.value.phone
  }
  if (step.value === 2) {
    return form.value.position
  }
  if (step.value === 3) {
    return form.value.workAuth && form.value.availability
  }
  return true
}

function submitForm() {
  if (!form.value.experience || !files.value.length) return
  submitted.value = true
}

function handleFileSelect(e) {
  processFiles(e.target.files)
}

function handleDrop(e) {
  dragActive.value = false
  processFiles(e.dataTransfer.files)
}

function processFiles(list) {
  Array.from(list).forEach(file => {
    if (!allowedTypes.includes(file.type) || file.size > MAX_SIZE) return

    const obj = { file, uploading: true, progress: 0, success: false, parsed: null }
    files.value.push(obj)
    simulateUpload(obj)
  })
}

function simulateUpload(obj) {
  const interval = setInterval(() => {
    obj.progress += 10
    if (obj.progress >= 100) {
      clearInterval(interval)
      obj.uploading = false
      obj.success = true
      obj.parsed = {
        name: obj.file.name.split(".")[0],
       
      }
    }
  }, 100)
}

function removeFile(i) { files.value.splice(i, 1) }

function formatSize(size) {
  return (size / 1024 / 1024).toFixed(2) + " MB"
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