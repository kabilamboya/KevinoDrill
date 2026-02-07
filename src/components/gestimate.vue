<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>

      <!-- Top Bar -->
      <div class="modal-header">
        <h2>Request Free Estimate</h2>
        <button class="close-btn" @click="closeModal">×</button>
      </div>

      <!-- FORM -->
      <form class="form-grid" @submit.prevent="generatePDF">

        <!-- Customer Info -->
        <section class="card-section">
          <h3 class="section-title">Client Information</h3>

          <label>
            Full Name
            <input v-model="form.name" required placeholder="Your Name" />
          </label>

          <label>
            Phone Number
            <input v-model="form.phone" required placeholder="07XX XXX XXX" />
          </label>

          <label>
            County
            <select v-model="form.county" required>
              <option value="">Select County</option>
              <option v-for="c in counties" :key="c" :value="c">{{ c }}</option>
            </select>
          </label>
        </section>

        <!-- Service Selection -->
        <section class="card-section">
          <h3 class="section-title">Service Details</h3>

          <label>
            Service Type
            <select v-model="form.serviceType" required>
              <option value="">Select Service</option>
              <option v-for="(options, key) in services" :key="key" :value="key">
                {{ key }}
              </option>
            </select>
          </label>

          <!-- Dynamic Options -->
          <label v-if="serviceOptions.length">
            Service Option
            <select v-model="form.serviceOption">
              <option v-for="o in serviceOptions" :key="o" :value="o">
                {{ o }}
              </option>
            </select>
          </label>

          <!-- If drilling -->
          <label v-if="isDrilling">
            Expected Depth (Meters)
            <input v-model.number="form.depth" type="number" min="10" placeholder="e.g. 150" />
          </label>
        </section>

        <!-- Results -->
        <section v-if="form.serviceType" class="card-section">
          <h3 class="section-title">Cost Breakdown</h3>

          <div class="results-box">
            <p v-for="(value, label) in summary.breakdown" :key="label">
              <strong>{{ label }}:</strong> {{ formatCurrency(value) }}
            </p>

            <p class="total-line">
              <strong>Total Estimate:</strong> {{ formatCurrency(summary.total) }}
            </p>
          </div>
        </section>

        <!-- Submit -->
        <div class="submit-area">
          <button type="submit" class="btn-primary">Download PDF Estimate</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import services, { counties } from "@/data/estimateData";
import useEstimateCalculator from "@/composables/useEstimateCalculator";
import jsPDF from "jspdf";
import logo from "@/assets/kevinlogo.jpg"

const showToast = inject("showToast")   // ✅ Inject toast ONCE here

/* --------------------- STATE --------------------- */
const isOpen = ref(false);

const form = ref({
  name: "",
  phone: "",
  county: "",
  serviceType: "",
  serviceOption: "",
  depth: null,
});

const openForm = () => (isOpen.value = true);
const closeModal = () => (isOpen.value = false);

defineExpose({ openForm });

/* ---------------- COMPUTED ---------------- */
const serviceOptions = computed(() =>
  form.value.serviceType ? services[form.value.serviceType] : []
);

const isDrilling = computed(() => form.value.serviceType === "Borehole Drilling");

const { calculateCosts } = useEstimateCalculator();

const summary = computed(() =>
  form.value.serviceType
    ? calculateCosts(form.value)
    : { total: 0, breakdown: {} }
);

const logoDataUrl = ref("")

const loadLogoDataUrl = async () => {
  if (logoDataUrl.value) return logoDataUrl.value
  const response = await fetch(logo)
  const blob = await response.blob()
  const dataUrl = await new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
  logoDataUrl.value = dataUrl
  return dataUrl
}

const formatCurrency = (v) =>
  "KES " + Number(v).toLocaleString("en-KE", { minimumFractionDigits: 0 });

/* ---------------- PDF GENERATION + TOAST ---------------- */
const generatePDF = async () => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 14
  const sectionGap = 8
  let y = 16

  const { breakdown, total } = summary.value
  const today = new Date().toLocaleDateString("en-KE")

  // Header band
  doc.setFillColor(13, 110, 253)
  doc.rect(0, 0, pageWidth, 20, "F")
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(16)
  doc.text("Kevino Drilling & Construction Ltd", margin, 13)

  const logoUrl = await loadLogoDataUrl()
  const logoSize = 16
  const logoX = pageWidth - margin - logoSize
  const logoY = 2
  doc.addImage(logoUrl, "JPEG", logoX, logoY, logoSize, logoSize)

  doc.setTextColor(0, 0, 0)
  y = 30
  doc.setFontSize(13)
  doc.text("Estimate Report", margin, y)

  doc.setFontSize(10)
  doc.text(`Date: ${today}`, pageWidth - margin - 35, y)

  y += sectionGap
  doc.setDrawColor(220)
  doc.line(margin, y, pageWidth - margin, y)
  y += 6

  // Client details
  doc.setFontSize(11)
  doc.text("Client Details", margin, y)
  y += 6
  doc.setFontSize(10)
  doc.text(`Name: ${form.value.name}`, margin, y); y += 5
  doc.text(`Phone: ${form.value.phone}`, margin, y); y += 5
  doc.text(`County: ${form.value.county}`, margin, y); y += 6

  // Service details
  doc.setFontSize(11)
  doc.text("Service Details", margin, y)
  y += 6
  doc.setFontSize(10)
  doc.text(`Service Type: ${form.value.serviceType}`, margin, y); y += 5
  if (form.value.serviceOption) {
    doc.text(`Service Option: ${form.value.serviceOption}`, margin, y); y += 5
  }
  if (form.value.depth) {
    doc.text(`Depth: ${form.value.depth} meters`, margin, y); y += 5
  }
  y += 4

  // Breakdown table header
  doc.setFillColor(245, 247, 250)
  doc.rect(margin, y, pageWidth - margin * 2, 8, "F")
  doc.setFontSize(10)
  doc.text("Item", margin + 2, y + 5.5)
  doc.text("Amount (KES)", pageWidth - margin - 36, y + 5.5)
  y += 10

  // Breakdown rows
  doc.setFontSize(10)
  Object.entries(breakdown).forEach(([label, value]) => {
    doc.text(label, margin + 2, y)
    doc.text(formatCurrency(value), pageWidth - margin - 36, y)
    y += 6
  })

  // Total box
  y += 2
  doc.setDrawColor(13, 110, 253)
  doc.rect(margin, y, pageWidth - margin * 2, 10)
  doc.setFontSize(11)
  doc.text("Total Estimate", margin + 2, y + 6.5)
  doc.text(formatCurrency(total), pageWidth - margin - 36, y + 6.5)
  y += 14

  // Footer note
  doc.setFontSize(9)
  doc.setTextColor(80)
  doc.text(
    "This estimate is indicative and subject to site verification. Valid for 30 days.",
    margin,
    y
  )
  y += 6
  doc.setTextColor(60)
  doc.text("Phone: +254722146077 | Email: info@kevinodrilling.co.ke", margin, y)
  y += 5
  doc.text("Address: OYUGIS OFFICE, Kisumu - Kisii Road, Opp. Torley's Hotel", margin, y)

  doc.save("Estimate.pdf")

  // SHOW TOAST
  showToast?.("Your estimate PDF has been downloaded successfully!")
}
</script>

<style scoped>
/* =============== MODAL WRAPPER =============== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 9999;
}

/* Reduced width + reduced height + scroll enabled */
.modal-content {
  background: #fff;
  width: 50%;              /* 50% of previous = narrower */
  max-width: 500px;        /* smaller limit */
  height: 80%;             /* reduced height by half */
  max-height: 500px;       /* smaller height */
  overflow-y: auto;        /* IMPORTANT: enables internal scroll */
  border-radius: 14px;
  padding: 1.2rem 1.5rem;
  position: relative;
  animation: fadeIn 0.25s ease-out;
}

/* Hide scrollbars for cleaner look (optional) */
.modal-content::-webkit-scrollbar {
  width: 6px;
}
.modal-content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
}
.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  padding-bottom: 0.5rem;
  z-index: 10;
}

/* Close Button */
.close-btn {
  background: #eee;
  border: none;
  font-size: 26px;
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  transition: 0.2s;
}

.close-btn:hover {
  background: #ffdddd;
}

/* =============== FORM =============== */
.form-grid {
  display: grid;
  gap: 1.5rem;
}

.card-section {
  background: #f8f9fa;
  padding: 1rem 1.2rem;
  border-radius: 10px;
}

.section-title {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  font-weight: 600;
}

label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 0.9rem;
}

input,
select {
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  width: 100%;
}

/* RESULTS BOX */
.results-box {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.total-line {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 2px solid #ccc;
}

/* BUTTON */
.btn-primary {
  background: #007bff;
  color: white;
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.btn-primary:hover {
  opacity: 0.9;
}

/* ANIMATION */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}
</style>
