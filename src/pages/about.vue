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
          src="@/assets/images/teamlead.jpg" 
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
    <!--             VALUES                 -->
    <!-- ================================= -->
    <section class="section">
      <h2 class="section-title">Why Choose Us</h2>
      <p class="section-subtitle">We combine engineering expertise with dependable service.</p>

      <ul class="values-grid">
        <li v-for="(v, i) in values" :key="v.title" class="value-card">
          <div class="circle-icon" v-html="icons[v.icon]"></div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.description }}</p>
        </li>
      </ul>
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

// Use clean & explicit function
const activeTab = ref("mission")

const setTab = (tab) => {
  activeTab.value = tab
}

const tabClass = (tab) =>
  activeTab.value === tab ? "tab-active" : "tab-inactive"
</script>

<style scoped>
/* Shared Layout */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

/* About Us */
.about-section {
  background: linear-gradient(to right, #d9dde0ff, #ffffff);
  padding: 3rem 2rem;
}
.about-heading {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}
.about-text {
  max-width: 850px;
  margin: 0 auto 3rem auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.7;
}
.about-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
}
.about-list li::before {
  content: "★";
  color: #004080;
  margin-right: 0.5rem;
}

/* Tabs */
.tabs-section {
  padding: 3rem 2rem;
}
.tabs-heading {
  font-size: 2.6rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.tabs-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.tabs-buttons button {
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #0b5ed7;
  transition: 0.2s ease;
}
.tab-active {
  background: #0b6ef0;
  color: white;
}
.tab-inactive {
  background: white;
  color: #0b5ed7;
}
.mission-vision-values {
  background: #c74e08ff;
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}
.values-list li {
  margin-bottom: 0.5rem;
}

/* Team */
.team-section {
  background: #fff;
  padding: 5rem 2rem;
}
.team-heading {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}
.team-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}
.team-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
}
.team-extra {
  background: #f9fafb;
  padding: 1.8rem;
  border-radius: 1rem;
}

/* ---------------- VALUES ---------------- */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.value-card {
  background: #fff;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,.05);
}

/* Partners */
.partners-section {
  background: #f9fafb;
  padding: 5rem 2rem;
}
.partners-heading {
  text-align: center;
  font-size: 2.6rem;
  font-weight: bold;
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
}
.partner-card img {
  max-width: 120px;
}
</style>
