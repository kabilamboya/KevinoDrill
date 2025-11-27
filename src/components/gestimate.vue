<template>
  <div class="gestimate-wrapper">
    <!-- Trigger button -->
    <div class="top-actions">
      <button class="open-btn" @click="openForm">Get an Estimate</button>
    </div>

    <!-- SINGLE MODAL: "Quotation Form" -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>Quotation Form</h2>

        <form @submit.prevent="onSubmit" novalidate>
          <!-- Personal details -->
          <fieldset class="section">
            <legend>Personal details</legend>

            <div class="form-row">
              <label for="firstName">First Name</label>
              <input id="firstName" v-model="form.firstName" type="text" required />
            </div>

            <div class="form-row">
              <label for="secondName">Second Name</label>
              <input id="secondName" v-model="form.secondName" type="text" required />
            </div>

            <div class="form-row">
              <label for="email">Email Address</label>
              <input id="email" v-model="form.email" type="email" required />
            </div>

            <div class="form-row">
              <label for="country">Country / Region</label>
              <input id="country" v-model="form.country" type="text" />
            </div>

            <div class="form-row">
              <label for="town">Nearby Town</label>
              <input id="town" v-model="form.town" type="text" />
            </div>
          </fieldset>

          <!-- Service selection -->
          <fieldset class="section">
            <legend>Service</legend>
            <div class="form-row">
              <label for="service">Select Service</label>
              <select id="service" v-model="form.service" @change="onServiceChange" required>
                <option disabled value="">-- Choose a Service --</option>
                <option v-for="s in services" :key="s.value" :value="s.value">
                  {{ s.label }}
                </option>
              </select>
            </div>

            <!-- Dynamic options for the chosen service -->
            <div class="form-row" v-if="options.length">
              <label>Options (approx amounts)</label>
              <div class="option-list">
                <div class="option-item" v-for="opt in options" :key="opt.value">
                  <input
                    type="checkbox"
                    :id="'opt-' + opt.value"
                    :value="opt"
                    v-model="form.selectedOptions"
                  />
                  <label :for="'opt-' + opt.value">{{ opt.label }} (≈ {{ opt.amount.toLocaleString() }} KES)</label>
                </div>
              </div>
            </div>
          </fieldset>

          <!-- Drilling specific inputs (only shown when 'drilling' selected) -->
          <fieldset class="section" v-if="form.service === 'drilling'">
            <legend>Drilling specifics</legend>

            <div class="form-row">
              <label for="method">Drilling Method</label>
              <select id="method" v-model="form.drilling.method">
                <option value="air">Air Drilling</option>
                <option value="mud">Mud Drilling</option>
              </select>
            </div>

            <div class="form-row">
              <label for="county">Select County</label>
              <select id="county" v-model="form.drilling.county">
                <option disabled value="">-- Choose County --</option>
                <option v-for="(r, name) in countyRates" :key="name" :value="name">{{ name }}</option>
              </select>
            </div>

            <div class="form-row">
              <label for="depth">Depth (meters)</label>
              <input id="depth" type="number" v-model.number="form.drilling.depth" min="1" placeholder="Enter depth in meters" />
            </div>

            <div v-if="form.drilling.county" class="county-box">
              <small>
                County rate range:
                <strong>KES {{ countyRates[form.drilling.county].min.toLocaleString() }}</strong>
                -
                <strong>KES {{ countyRates[form.drilling.county].max.toLocaleString() }}</strong>
              </small>
            </div>
          </fieldset>

          <!-- Actions -->
          <div class="modal-actions">
            <button type="submit" class="primary">Calculate Estimate</button>
            <button type="button" class="secondary" @click="resetForm">Reset</button>
            <button type="button" class="close" @click="closeModal">Close</button>
          </div>
        </form>

        <!-- Result area (stays inside modal) -->
        <div v-if="calculated" class="result-section">
          <h3>Estimate Result</h3>

          <div class="result-block">
            <p><strong>Customer:</strong> {{ form.firstName }} {{ form.secondName }} — {{ form.email }}</p>
            <p><strong>Service:</strong> {{ serviceLabel(form.service) }}</p>
            <p v-if="selectedOptionList.length"><strong>Selected Options:</strong></p>
            <ul>
              <li v-for="opt in selectedOptionList" :key="opt.value">
                {{ opt.label }} — KES {{ opt.amount.toLocaleString() }}
              </li>
            </ul>
          </div>

          <!-- If drilling: show detailed drill breakdown -->
          <div v-if="form.service === 'drilling'" class="result-block">
            <h4>Drilling breakdown (method: {{ form.drilling.method }})</h4>

            <table class="result-table">
              <thead>
                <tr><th>Process</th><th>Rate / m</th><th>Depth (m)</th><th>Total</th></tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in drillingQuote" :key="idx">
                  <td>{{ item.process }}</td>
                  <td>KES {{ item.rate.toLocaleString() }}</td>
                  <td>{{ form.drilling.depth || 0 }}</td>
                  <td>KES {{ item.total.toLocaleString() }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="3">Drilling Grand Total</th>
                  <th>KES {{ drillingGrandTotal.toLocaleString() }}</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <!-- Service options subtotal (non-drilling options) -->
          <div class="result-block" v-if="nonDrillingOptionsTotal > 0">
            <p><strong>Options subtotal:</strong> KES {{ nonDrillingOptionsTotal.toLocaleString() }}</p>
          </div>

          <!-- Final grand total -->
          <div class="result-block final">
            <h4>Grand Total: KES {{ finalGrandTotal.toLocaleString() }}</h4>
          </div>

          <!-- PDF download -->
          <div class="download-actions">
            <button class="pdf-btn" @click="downloadPdf">Download Estimate PDF</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* Composition API modern single-modal quotation form with PDF download (jsPDF dynamic import) */

import { ref, reactive, computed } from "vue";

/* ---------- Modal visibility ---------- */
const showModal = ref(false);

// Single clean openForm()
function openForm() {
  showModal.value = true;
}

// Allow parent access
defineExpose({
  openForm
});

/* ---------- Form model (single unified form) ---------- */
const form = reactive({
  firstName: "",
  secondName: "",
  email: "",
  country: "",
  town: "",
  service: "",
  selectedOptions: [],
  drilling: {
    method: "air",
    county: "",
    depth: null
  }
});

/* ---------- Services & options ---------- */
const services = [
  { value: "drilling", label: "Drilling Services" },
  { value: "survey", label: "Hydrological Survey" },
  { value: "tank", label: "Steel Tank Fabrication" },
  { value: "solar", label: "Solar Pump Installation" }
];

const serviceOptions = {
  drilling: [
    { value: "residential", label: "Residential Borehole", amount: 150000 },
    { value: "commercial", label: "Commercial Borehole", amount: 300000 },
    { value: "agricultural", label: "Agricultural Borehole", amount: 250000 }
  ],
  survey: [
    { value: "basic", label: "Basic Survey", amount: 50000 },
    { value: "advanced", label: "Advanced Survey", amount: 120000 }
  ],
  tank: [
    { value: "small", label: "50,000L Tank", amount: 400000 },
    { value: "large", label: "150,000L Tank", amount: 900000 }
  ],
  solar: [
    { value: "domestic", label: "Domestic Pump", amount: 80000 },
    { value: "industrial", label: "Industrial Pump", amount: 200000 }
  ]
};

const options = ref([]);

/* ---------- State for calculation/result ---------- */
const calculated = ref(false);

const costs = {
  air: {
    Mobilisation: 420,
    Drilling: 3220,
    Casing: 2269,
    Graveling: 280,
    "Well development": 70,
    "Test pumping": 420,
    "Water chemical analysis": 21
  },
  mud: {
    Mobilisation: 420,
    Drilling: 11270,
    Casing: 2569,
    Graveling: 280,
    "Well development": 70,
    "Test pumping": 420,
    "Water chemical analysis": 21
  }
};

const countyRates = {
  Nairobi: { min: 6500, max: 9500 },
  Kajiado: { min: 6500, max: 9500 },
  Machakos: { min: 6600, max: 9500 },
  Kitui: { min: 6800, max: 9500 },
  Makueni: { min: 6700, max: 9500 },
  Kiambu: { min: 6500, max: 9500 },
  Nakuru: { min: 6800, max: 9500 },
  Kisumu: { min: 7500, max: 9500 },
  Turkana: { min: 8000, max: 9500 },
  Bungoma: { min: 6900, max: 9500 },
  Busia: { min: 7700, max: 9500 },
};

/* ---------- Helpers ---------- */

function closeModal() {
  showModal.value = false;
  calculated.value = false;
}

function onServiceChange() {
  options.value = serviceOptions[form.service] || [];
  form.selectedOptions = [];
}

function resetForm() {
  form.firstName = "";
  form.secondName = "";
  form.email = "";
  form.country = "";
  form.town = "";
  form.service = "";
  form.selectedOptions = [];
  form.drilling.method = "air";
  form.drilling.county = "";
  form.drilling.depth = null;
  options.value = [];
  calculated.value = false;
}

function serviceLabel(val) {
  const s = services.find((x) => x.value === val);
  return s ? s.label : val;
}

/* ---------- Calculation logic ---------- */

const selectedOptionList = computed(() => form.selectedOptions || []);

const nonDrillingOptionsTotal = computed(() =>
  selectedOptionList.value.reduce((sum, opt) => sum + (opt.amount || 0), 0)
);

const drillingQuote = computed(() => {
  if (form.service !== "drilling" || !form.drilling.depth || form.drilling.depth <= 0) {
    return [];
  }
  const methodCosts = costs[form.drilling.method] || costs.air;
  const depth = Number(form.drilling.depth) || 0;
  return Object.entries(methodCosts).map(([process, rate]) => {
    const total = Math.round(rate * depth);
    return { process, rate, total };
  });
});

const drillingGrandTotal = computed(() =>
  drillingQuote.value.reduce((s, it) => s + it.total, 0)
);

const finalGrandTotal = computed(() => drillingGrandTotal.value + nonDrillingOptionsTotal.value);

function onSubmit() {
  if (!form.firstName || !form.secondName || !form.email) {
    alert("Please fill in your name(s) and email.");
    return;
  }
  if (!form.service) {
    alert("Please select a service.");
    return;
  }
  if (form.service === "drilling") {
    if (!form.drilling.county) {
      if (!confirm("No county selected. Proceed without county-based guidance?")) return;
    }
    if (!form.drilling.depth || form.drilling.depth <= 0) {
      alert("Please enter a valid drilling depth (meters).");
      return;
    }
  }

  options.value = serviceOptions[form.service] || [];
  calculated.value = true;
}

/* ---------- PDF generation ---------- */

async function downloadPdf() {
  if (!calculated.value) {
    alert("Please calculate the estimate first.");
    return;
  }

  try {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const left = 40;
    let y = 40;
    const lineHeight = 18;

    doc.setFontSize(16);
    doc.text("Estimate — Quotation Form", left, y);
    y += lineHeight * 1.5;

    doc.setFontSize(11);
    doc.text(`Date: ${new Date().toLocaleString()}`, left, y);
    y += lineHeight;

    doc.setFontSize(12);
    doc.text("Customer Details:", left, y);
    y += lineHeight;
    doc.setFontSize(10);
    doc.text(`Name: ${form.firstName} ${form.secondName}`, left + 10, y);
    y += lineHeight;
    doc.text(`Email: ${form.email}`, left + 10, y);
    y += lineHeight;

    if (form.country) {
      doc.text(`Country: ${form.country}`, left + 10, y);
      y += lineHeight;
    }
    if (form.town) {
      doc.text(`Town: ${form.town}`, left + 10, y);
      y += lineHeight;
    }

    y += lineHeight;

    doc.setFontSize(12);
    doc.text("Service & Options:", left, y);
    y += lineHeight;
    doc.setFontSize(10);
    doc.text(`Service: ${serviceLabel(form.service)}`, left + 10, y);
    y += lineHeight;

    if (selectedOptionList.value.length) {
      selectedOptionList.value.forEach((opt) => {
        doc.text(`- ${opt.label}: KES ${opt.amount.toLocaleString()}`, left + 12, y);
        y += lineHeight;
      });
    }

    if (form.service === "drilling") {
      doc.setFontSize(12);
      doc.text("Drilling Breakdown:", left, y);
      y += lineHeight;
      doc.setFontSize(10);

      doc.text(`Method: ${form.drilling.method}`, left + 10, y);
      y += lineHeight;

      if (form.drilling.county) {
        doc.text(`County: ${form.drilling.county}`, left + 10, y);
        y += lineHeight;
      }

      doc.text(`Depth: ${form.drilling.depth} m`, left + 10, y);
      y += lineHeight;

      drillingQuote.value.forEach((row) => {
        const line = `${row.process}: KES ${row.rate.toLocaleString()} /m × ${form.drilling.depth} m = KES ${row.total.toLocaleString()}`;
        doc.text(line, left + 8, y);
        y += lineHeight;
      });

      doc.setFontSize(11);
      doc.text(`Drilling Subtotal: KES ${drillingGrandTotal.value.toLocaleString()}`, left + 8, y);
      y += lineHeight;
    }

    if (nonDrillingOptionsTotal.value > 0) {
      doc.setFontSize(11);
      doc.text(`Options Subtotal: KES ${nonDrillingOptionsTotal.value.toLocaleString()}`, left + 8, y);
      y += lineHeight;
    }

    doc.setFontSize(14);
    doc.text(`GRAND TOTAL: KES ${finalGrandTotal.value.toLocaleString()}`, left, y);

    doc.save(`estimate_${form.firstName || "customer"}_${Date.now()}.pdf`);
  } catch (err) {
    console.error("PDF generation failed:", err);
    alert("Could not generate PDF. Install jsPDF with: npm install jspdf");
  }
}
</script>

<style scoped>
.gestimate-wrapper {
  font-family: Inter, Arial, sans-serif;
  padding: 18px;
  max-width: 980px;
  margin: 0 auto;
}

/* Top action */
.top-actions {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14px;
}
.open-btn {
  background: #0078d4;
  color: #fff;
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.45);
  z-index: 1000;
}
.modal-content {
  width: 760px;
  max-width: 95%;
  background: #fff;
  padding: 20px 22px;
  border-radius: 10px;
  box-shadow: 0 16px 48px rgba(11, 22, 44, 0.14);
  max-height: 92vh;
  overflow-y: auto;
}

/* Form layout */
.section {
  border: 1px solid #eef2f6;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
}
.section legend {
  padding: 0 6px;
  font-weight: 600;
}

.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.form-row label {
  font-weight: 600;
  margin-bottom: 6px;
}
.form-row input,
.form-row select {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  box-sizing: border-box;
}

/* Options list */
.option-list { display: flex; flex-direction: column; gap: 8px; }
.option-item { display: flex; gap: 10px; align-items: center; }

/* County box */
.county-box {
  background: #f0f8ff;
  padding: 8px;
  border-radius: 6px;
  margin-top: 6px;
}

/* Modal actions */
.modal-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  align-items: center;
}
.modal-actions .primary {
  background: #0078d4;
  color: #fff;
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.modal-actions .secondary {
  background: #f3f4f6;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
}
.modal-actions .close {
  background: transparent;
  color: #333;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
}

/* Result section */
.result-section {
  margin-top: 18px;
  border-top: 1px dashed #e6eef8;
  padding-top: 14px;
}
.result-block { margin-bottom: 12px; }
.result-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
}
.result-table th,
.result-table td {
  padding: 8px 10px;
  border: 1px solid #d6e3f2;
  text-align: left;
}
.final {
  background: #f7fbff;
  padding: 8px;
  border-radius: 6px;
}

/* Download button */
.download-actions { margin-top: 8px; }
.pdf-btn {
  background: #0b6efd;
  color: white;
  padding: 10px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 720px) {
  .modal-content { width: 96%; padding: 14px; }
  .result-table td, .result-table th { font-size: 12px; }
}
</style>
