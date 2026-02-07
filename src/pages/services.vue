<template>
  <section class="services-page">

    <!-- ================================= -->
    <!--              HERO                  -->
    <!-- ================================= -->
    <header class="hero">
      <h1>Our Services</h1>
      <p>We deliver end-to-end solutions designed to deliver reliable water access. From professional water solutions, hydrogeological surveys, drilling, 
      installation, testing, to maintenance for homes, industries, and communities.</p>
    </header>

    <!-- ================================= -->
    <!--        FEATURED FULL WIDTH         -->
    <!-- ================================= -->
    <section class="featured-wrapper">
      <div
        v-for="(f, index) in featured"
        :key="f.id"
        class="featured"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="featured-image">
          <img :src="f.image" :alt="f.title" />
        </div>

        <div class="featured-content">
          <h3>{{ f.title }}</h3>
          <p>{{ f.description }}</p>
        </div>
      </div>
    </section>

    <!-- ================================= -->
<!--     TREE DIAGRAM: SERVICES & PRODUCTS   -->
<!-- ================================= -->
<section class="section alt">

  <h2 class="section-title small">Other Services & Products</h2>
  <p class="section-subtitle">Organized overview of the additional solutions we offer.</p>

  <div class="tree-container">
    
    <!-- LEFT COLUMN – OTHER SERVICES -->
    <div class="tree-column">
      <h3 class="tree-heading">Other Services</h3>

      <ul class="tree-list">
        <li v-for="s in services.otherServices" :id="s.id" :key="s.title">
          <span class="node-title">{{ s.title }}</span>
          <p class="node-desc">{{ s.description }}</p>
        </li>
      </ul>
    </div>

    <!-- RIGHT COLUMN – PRODUCTS -->
    <div class="tree-column">
      <h3 class="tree-heading">Products</h3>

      <ul class="tree-list">
        <li v-for="p in services.products" :key="p.title">
          <span class="node-title">{{ p.title }}</span>
          <p class="node-desc">{{ p.description }}</p>
        </li>
      </ul>
    </div>

  </div>
</section>


    <!-- ================================= -->
    <!--                CTA                 -->
    <!-- ================================= -->
    <section class="cta">
      <button @click="openEstimateModal" class="btn primary">Get a Free Estimate</button>
    </section>

  </section>
</template>

<script setup>
import { inject } from "vue"

import project2 from "@/assets/images/project2.jpg"
import project3 from "@/assets/images/project3.jpg"
import project4 from "@/assets/images/project4.jpg"
import project5 from "@/assets/images/project5.jpg"

// Inject global modal + toast
const openEstimateModal = inject("openEstimateModal")

// WhatsApp
function openWhatsApp() {
  window.open("https://wa.me/254721957386", "_blank")
}

// ---- Data ----
const featured = [
  {
    title: "01. Borehole Drilling",
    description:
      "Kevino Drilling specializes in borehole drilling, utilizing advanced equipment and expertise to access underground water sources. Whether for residential, commercial, or agricultural purposes, our borehole drilling services ensure reliable access to clean water, tailored to meet the specific needs of our clients.",
    icon: "drilling",
    image: project2,
  },
  {
    title: "02. Installation of Solar Pump",
    description:
      "At Kevino Drilling, we also specialize in solar water pump installation, harnessing renewable energy to provide sustainable and efficient water solutions for your projects.",
    icon: "pump",
    image: project3,
  },
  {
    title: "03. Fabrication of Water Tower",
    description:
      "Our water tower tanks provide robust and reliable storage solutions for communities, industries, and agricultural operations. They are designed and built to withstand environmental factors and ensure efficient water distribution, contributing to sustainable water management practices.",
    icon: "testing",
    image: project5,
  },
  {
    title: "04. Hydrogeological Surveys",
    description:
      "Explore the depth of our expertise through Kevino Drilling’s hydrological survey services. We utilize advanced techniques to reveal invaluable insights, providing precise solutions for your water-related projects.",
    icon: "survey",
    image: project4,
  },
]

const services = {
  otherServices: [
    {
      id: "construction",
      title: "Construction of Water Supply, Treatment, Storage, and Distribution Systems",
      description: "We design and build customized systems to ensure efficient and sustainable water management, meeting the demands of communities, industries, and agricultural operations alike.",
    },
    {
      id: "rehabilitation",
      title: "Borehole Rehabilitation",
      description:
        "Restoration and performance optimization of existing boreholes to improve yield and extend system life.",
    },
    {
      id: "testing",
      title: "Water Testing",
      description:
        "Precision testing for safe water use. We offer comprehensive water testing services to assess quality, detect contaminants, and support sustainable water management solutions.",
    },
  ],
  products: [
    {
      title: "Water Pumps",
      description:
        "Reliable performance for every application. Our water pumps are engineered for durability and efficiency, delivering consistent flow for residential, agricultural, and industrial needs.",
    },
    {
      title: "Water Tanks",
      description:
        "Secure storage, built to last. We supply high-quality water tanks designed to withstand harsh conditions, ensuring safe and long-term water storage for any environment.",
    },
  ],
}
</script>

<style scoped>
.services-page {
  --text: #1e293b;
  --muted: #64748b;
  --primary: #0b5ed7;
  --bg-light: #f7f9fc;

  color: var(--text);
  padding-bottom: 4rem;
}

/* ---------------- HERO ---------------- */
.hero {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 900px;
  margin: auto;
}
.hero h1 {
  font-size: 2.4rem;
  font-weight: 700;
}
.hero p {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 1.1rem;
}

/* ---------------- SECTIONS ---------------- */
.section {
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1.5rem;
}
.section.alt {
  background: var(--bg-light);
  border-radius: 16px;
}

/* Titles */
.section-title {
  text-align: center;
  font-size: 1.9rem;
  font-weight: 700;
}
.section-title.small {
  font-size: 1.5rem;
}
.section-subtitle {
  text-align: center;
  color: var(--muted);
  margin-bottom: 1.8rem;
}

/* ---------------- GRID: MAIN SERVICES ---------------- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.service-card {
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,.05);
  transition: .25s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,.07);
}
.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  color: var(--primary);
}

/* ---------------- FEATURED ---------------- */
.featured-wrapper {
  max-width: 900px;
  margin: 3rem auto;
}
.featured {
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
  align-items: center;
}
.featured.reverse {
  flex-direction: row-reverse;
}
.featured img {
  width: 310px;
  height: 370px;
  object-fit: cover;
  border-radius: 10px;
}
.featured-content h3 {
  font-size: 1.7rem;
}
.featured-content p {
  color: var(--muted);
}

/* ================= TREE DIAGRAM ================= */

.tree-container {
  display: flex;
  gap: 40px;
  margin-top: 2rem;
}

.tree-column {
  flex: 1;
}

.tree-heading {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-left: 4px solid var(--primary);
  padding-left: 10px;
}

/* Lines for the tree */
.tree-list {
  list-style: none;
  padding-left: 20px;
  position: relative;
}

.tree-list::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: #cbd5e1;
}

.tree-list li {
  margin-bottom: 24px;
  padding-left: 20px;
  position: relative;
}

.tree-list li::before {
  content: "";
  position: absolute;
  left: -2px;
  top: 10px;
  width: 18px;
  height: 2px;
  background: #cbd5e1;
}

/* Text styles */
.node-title {
  font-weight: 600;
  font-size: 1rem;
  display: block;
  margin-bottom: 4px;
  color: var(--text);
}

.node-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 800px) {
  .tree-container {
    flex-direction: column;
    gap: 20px;
  }
}

/* ---------------- CTA ---------------- */
.cta {
  margin-top: 3rem;
  text-align: center;
}
.btn {
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin: 0 0.5rem;
}
.btn.primary {
  background: #ff7f32 ;
  color: #fff;
}
.btn.whatsapp {
  background: #25d366;
  color: #fff;
}
</style>