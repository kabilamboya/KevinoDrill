<template>
  <!-- About Us -->
  <section class="about-section">
    <div class="container">
      <h2 class="about-heading">About Us</h2>
      <p class="about-text">
        Kevino Drilling & Construction Company Limited specialises in mechanised ground water exploration services 
        and related value-added solutions to supply water for individual and commercial use — including irrigation, 
        home consumption, and industrial needs.
      </p>

      <ul class="about-list">
        <li>Certified Company</li>
        <li>Satisfied Guaranteed</li>
        <li>Precise Builder</li>
        <li>Excellence Support</li>
      </ul>
    </div>
  </section>

  <!-- Mission, Vision & Core Values Tabs -->
  <section class="tabs-section">
    <h2 class="tabs-heading">Who We Are</h2>

    <div class="tabs-container">
      <div class="tabs-buttons">
        <button @click="setTab('mission')" :class="tabClass('mission')">Our Mission</button>
        <button @click="setTab('vision')" :class="tabClass('vision')">Our Vision</button>
        <button @click="setTab('values')" :class="tabClass('values')">Core Values</button>
      </div>

      <div class="mission-vision-values">
        <div v-if="activeTab === 'vision'" class="tab-content">
          <p>
            Our vision is to be recognized as the premier provider of drilling and construction services, 
            renowned for our unwavering commitment to quality, safety, and innovation. We aspire to lead 
            the industry by continually pushing the boundaries of excellence, embracing emerging 
            technologies, and setting new standards for environmental responsibility.
          </p>
        </div>

        <div v-if="activeTab === 'mission'" class="tab-content">
          <p>
            Our mission is to provide industry-leading drilling and construction solutions with a steadfast 
            commitment to safety, integrity, and excellence. Through innovation, collaboration, and 
            environmental responsibility, we strive to exceed our clients’ expectations, foster enduring 
            relationships, and contribute positively to the communities we serve.
          </p>
        </div>

        <div v-if="activeTab === 'values'" class="tab-content">
          <ul class="values-list">
            <li>Integrity: Upholding honesty, transparency, and ethical practices.</li>
            <li>Excellence: Delivering superior craftsmanship and consistent quality.</li>
            <li>Precision: Executing each project with accuracy and care.</li>
            <li>Client Satisfaction: Focused on exceeding customer expectations.</li>
            <li>Innovation: Embracing technology and continuous improvement.</li>
            <li>Collaboration: Working as a unified team with respect and shared purpose.</li>
            <li>Environmental Responsibility: Promoting sustainability and conservation.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="team-section">
    <h2 class="team-heading">Our Team</h2>

    <div class="container">
      <div class="team-grid">
        <img 
          src="@/assets/images/ourTeam.jpg" 
          alt="Kevino Team" 
          class="team-image"
        />

        <div class="about-content">
          <h3 class="about-subheading">
            Our team thrives on collaboration, innovation, and a shared vision of delivering excellence 
            in every project.
          </h3>
          <p>
            We continuously invest in modern equipment and training, ensuring our solutions remain 
            sustainable and future-ready.
          </p>
        </div>

        <div class="team-extra">
          <ul class="team-list">
            <li>Professional: Skilled experts committed to quality and precision.</li>
            <li>Innovative: Embracing modern tools and techniques for optimal results.</li>
            <li>Client-Centric: Dedicated to understanding and exceeding client needs.</li>
            <li>Reliable: Responsive and dependable throughout every project phase.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ================================= -->
    <!--             WHY US                 -->
    <!-- ================================= -->
    <section class="why-us">
      <h2 class="why-us-title">Why Choose Us</h2>
      <p class="why-us-subtitle">We combine engineering expertise with dependable service.</p>

      <div class="values-grid">
        <div v-for="(v, i) in values" :key="v.title" class="value-card">
          <div class="circle-icon" v-html="icons[v.icon]"></div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.description }}</p>
        </div>
      </div>
    </section>

  <!-- Partners Section -->
  <section class="partners-section">
    <h2 class="partners-heading">Our Partners</h2>

    <div class="partners-container">
      <div class="partner-card">
        <img 
          src="@/assets/images/ewak.png" 
          alt="Ewack Cloud Solutions Partner"
        />

        <p>
          Partnering with Ewack Cloud Solutions enables us to integrate modern cloud technologies into 
          our operations, ensuring efficiency, scalability, and secure data management for our clients.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

// Active Tab logic
const activeTab = ref("mission")

const setTab = (tab) => {
  activeTab.value = tab
}

const tabClass = (tab) =>
  activeTab.value === tab ? "tab-active" : "tab-inactive"

// Why Us data
const values = ref([
  { 
    title: "Licensed & Insured", 
    description: "We operate to industry standards with full compliance.", 
    icon: "shield" 
  },
  { 
    title: "Transparent Pricing", 
    description: "Clear scope, fair rates, and no hidden fees.", 
    icon: "pricing" 
  },
  { 
    title: "On-Time Delivery", 
    description: "Reliable timelines and professional communication.", 
    icon: "clock" 
  }
])

// Example icons – replace with your real SVG icons

const icons = {
  shield: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0b5ed7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  `,

  pricing: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0b5ed7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1v22"></path>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  `,

  clock: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0b5ed7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `
}
</script>

<style scoped>
/* ============================================================
   GLOBAL CONTAINER
============================================================ */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}


/* ============================================================
   ABOUT US
============================================================ */
.about-section {
  background: linear-gradient(to right, #d9dde0ff, #ffffff);
  padding: 3.5rem 1.8rem;
}

.about-heading {
  font-size: 2.7rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #002b5c;
}

.about-text {
  max-width: 850px;
  margin: 0 auto 2.5rem;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.75;
  color: #333;
}

.about-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  flex-wrap: wrap;
}

.about-list li {
  font-size: 1.1rem;
  font-weight: 600;
}

.about-list li::before {
  content: "★";
  color: #004080;
  margin-right: 0.4rem;
}


/* ============================================================
   TABS (Mission, Vision, Values)
============================================================ */
.tabs-section {
  padding: 4rem 1.5rem;
}

.tabs-heading {
  font-size: 2.4rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #002b5c;
}

.tabs-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
}

.tabs-buttons button {
  padding: 0.75rem 1.6rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid #0b5ed7;
  transition: 0.25s ease-in-out;
}

.tab-active {
  background: #0b6ef0;
  color: white;
  box-shadow: 0 4px 12px rgba(11, 110, 240, 0.3);
}

.tab-inactive {
  background: white;
  color: #0b5ed7;
}

.tab-inactive:hover {
  background: #e9f0ff;
}

.mission-vision-values {
  background: #c74e08;
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  line-height: 1.7;
}

.values-list li {
  margin-bottom: 0.7rem;
}

.values-list li:last-child {
  margin-bottom: 0;
}


/* ============================================================
   TEAM SECTION
============================================================ */
.team-section {
  background: #fff;
  padding: 4.5rem 1.5rem;
}

.team-heading {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #002b5c;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.2rem;
  margin-top: 1.5rem;
}

.team-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 1rem;
}

.about-content h3 {
  font-size: 1.45rem;
  margin-bottom: 0.9rem;
  color: #222;
}

.about-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
}

.team-extra {
  background: #f9fafb;
  padding: 1.8rem;
  border-radius: 1rem;
}


/* RESPONSIVE TEAM GRID */
@media (max-width: 950px) {
  .team-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .team-image {
    height: 350px;
  }
}


/* ============================================================
   WHY CHOOSE US (VALUES)
============================================================ */
.why-us{
  padding: 20px;
  text-align: center;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-top: 2rem;
}

.value-card {
  background: #fff;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transition: 0.3s ease-in-out;
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.1);
}

.circle-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #e7f0ff;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #002b5c;
}

.value-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}


/* ============================================================
   PARTNERS SECTION
============================================================ */
.partners-section {
  background: #f9fafb;
  padding: 4rem 1.5rem;
}

.partners-heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #002b5c;
}

.partners-container {
  max-width: 900px;
  margin: 0 auto;
}

.partner-card {
  background: #fff;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 22px rgba(0,0,0,0.06);
}

.partner-card img {
  max-width: 130px;
  border-radius: 6px;
}

@media (max-width: 750px) {
  .partner-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
