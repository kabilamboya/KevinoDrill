<template>
  <!-- About Us -->
  <section class="about-section">
    <div class="container">
      <h2 class="about-heading">About Us</h2>
      <p class="about-text">
        Kevino Drilling & Construction Company Limited specialises in mechanised ground water exploration services and related value-added solutions to supply water for individual and commercial use - including irrigation, home consumption, and industrial needs.
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
        <button @click="activeTab = 'mission'" :class="tabClass('mission')">Our Mission</button>
        <button @click="activeTab = 'vision'" :class="tabClass('vision')">Our Vision</button>
        <button @click="activeTab = 'values'" :class="tabClass('values')">Core Values</button>
      </div>

      <div class="mission-vision-values">
        <div v-if="activeTab === 'vision'" class="tab-content">
          <p>
          Our vision is to be recognized as the premier provider of drilling and construction services, renowned for our unwavering commitment to quality, safety, and innovation. We aspire to lead the industry by continually pushing the boundaries of excellence, embracing emerging technologies, and setting new standards for environmental responsibility. Through steadfast dedication to our core values and a relentless pursuit of customer satisfaction, we aim to inspire trust, foster growth, and leave a lasting positive impact on every project and community we touch.</p>
        </div>
        <div v-if="activeTab === 'mission'" class="tab-content">
          <p>
          Our mission is to provide industry-leading drilling and construction solutions with a steadfast commitment to safety, integrity, and excellence. Through innovation, collaboration, and environmental responsibility, we strive to exceed our clients’ expectations, foster enduring relationships, and contribute positively to the communities we serve. With a dedication to professionalism and customer focus, we aim to be the trusted partner of choice for all drilling and construction needs, delivering superior results that stand the test of time.</p>
        </div>
        <div v-if="activeTab === 'values'" class="tab-content">
          <ul>
            <li>Integrity: Upholding honesty, transparency, and ethical practices.</li>
            <li>Excellence: Striving for superior craftsmanship and service delivery.</li>
            <li>Precision: Executing projects with accuracy and care.</li>
            <li>Client Satisfaction: Exceeding expectations with every engagement.</li>
            <li>Safety: Prioritizing the safety of our team members, clients, and the environment in all aspects of our operations.</li>
            <li>Integrity: Upholding honesty, transparency, and ethical practices in every interaction and decision.</li>
            <li>Excellence: Striving for excellence in craftsmanship, service delivery, and project outcomes to consistently surpass expectations.</li>
            <li>Innovation: Embracing innovation and leveraging cutting-edge technologies to enhance efficiency, quality, and sustainability in our work.</li>
            <li>Collaboration: Fostering a culture of teamwork, respect, and collaboration among our employees, clients, and partners to achieve mutual success.</li>
            <li>Environmental Responsibility: Demonstrating a commitment to environmental stewardship by minimizing our carbon footprint, conserving resources, and promoting eco-friendly practices.</li>
            <li>Customer Focus: Putting our clients’ needs first and ensuring open communication, responsiveness, and personalized solutions to exceed their expectations.</li>
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
        <img src="@/assets/images/teamlead.jpg" alt="Kevino Team" class="team-image" />
          <div class="about-content">
          <h3 class="about-subheading">Our team thrives on collaboration, innovation, and a shared vision of delivering excellence in every project.</h3>
          <p>
          We continuously invest in modern equipment and training, ensuring our solutions remain sustainable and future‑ready.
          </p>
        </div>
        <!-- Extra column -->
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

  <!-- Partners Section -->
  <section class="partners-section">
    <h2 class="partners-heading">Our Partners</h2>
    <div class="partners-container">
      <div class="partner-card">
        <img src="@/assets/images/ewak.png" alt="ewak-partner" class="ewak-partner" />
        <p>
          Partnering with Ewack Cloud Solutions enables us to integrate modern cloud technologies into our operations, ensuring efficiency, scalability, and secure data management for our clients.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('mission')
const tabClass = (tab) =>
  activeTab.value === tab
    ? 'tab-active'
    : 'tab-inactive'

</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

/* About Us */
.about-section {
  background: linear-gradient(to right, #d9dde0ff, #ffffff);
  padding: 2rem 2rem;
}
.about-heading {
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.about-text {
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
}
.about-list {
  display: flex;              /* Arrange items horizontally */
  justify-content: center;    /* Center items across the page */
  align-items: center;        /* Align vertically in the middle */
  gap: 2rem;                  /* Even spacing between items */
  list-style: none;           /* Remove default bullets */
  padding: 0;                 /* Remove left padding */
  margin: 2rem auto;          /* Center block itself */
}

.about-list li::before {
  content: "★";               /* Star bullet */
  color: #004080;             /* Blue star */
  margin-right: 0.5rem;       /* Space between star and text */
  font-size: 1.2rem;          /* Adjust star size */
}

/* Tabs */
.tabs-section {
  padding: 2rem 2rem;
}
.tabs-heading {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

/* Tab button styling */
.tabs-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #0b5ed7;
  background: #c74e08ff;
  color: #0b5ed7;
  transition: background-color .2s, color .2s, transform .15s;
}
.tabs-buttons:hover,
.tabs-buttons:focus {
  background: #4ab10eff;
  color: #fff;
  outline: none;
  transform: translateY(-2px);
}
.tab-active {
  background: #0b6ef0;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.tab-inactive {
  background: #fff;
  color: #0b5ed7;
  border: 1px solid #0b5ed7;
}

.mission-vision-values {
  min-height: 220px;
  background: #c74e08ff;
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
}
.tab-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Team */
.team-section {
  background: #fff;
  padding: 5rem 2rem;
}
.team-heading {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
.team-container {
  padding-bottom: 5px;
}
.team-grid {
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
.team-list {
  list-style: disc;
  padding-left: 1.5rem;
}
.team-extra {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 1rem;
}

/* Partners */
.partners-section {
  background: #f9fafb;
  padding: 5rem 2rem;
}
.partners-heading {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}
.partners-container {
  max-width: 800px;
  margin: 0 auto;
}

.partner-card {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center; /* vertically center image and text */
  gap: 2rem; /* space between image and text */
}

.partner-card img {
  max-width: 100px;
  max-height: 50px;
}

.partner-card p {
  margin: 0; /* remove large margin */
  padding: 0; /* remove large padding */
  text-align: left; /* optional, for better readability */
}

</style>
