<template>
  <Sliders @open-estimate="$emit('open-estimate')" />

  <section class="home">
    <!-- First Row -->
    <div class="row first-row">
      <div class="col intro">
        <h2>Welcome to Kevino Drilling</h2>
        <p>
          We deliver expert drilling, hydrological surveys, steel tank fabrication,
          and solar pump installations. Providing sustainable water solutions for
          communities, industries, and agriculture.
        </p>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row second-row">
      <!-- Column 1 -->
      <div class="col card">
        <h3>Top Ongoing Project</h3>
        <h4>{{ topProject.title }}</h4>
        <p>{{ topProject.description }}</p>
        <small class="client">— {{ topProject.client }}</small>
      </div>

      <!-- Column 2 -->
      <div class="col card">
        <h3>Top Service</h3>
        <h4>{{ topService.title }}</h4>
        <p>{{ topService.description }}</p>
      </div>

      <!-- Column 3 -->
      <div class="col card">
        <h3>Social Media Updates</h3>
        <ul>
          <li v-for="post in socialPosts" :key="post.id">
            <p>{{ post.content }}</p>
            <small class="date">{{ post.date }}</small>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Working Process -->
  <section class="working-process">
    <h2>Our Working Process</h2>
    <div class="steps">
      <div class="step">
        <h3>01. Consultation</h3>
        <p>We begin with a detailed needs assessment and client consultation.</p>
      </div>
      <div class="step">
        <h3>02. Proposal</h3>
        <p>We prepare a transparent proposal with clear scope, costs, and timeline.</p>
      </div>
      <div class="step">
        <h3>03. Installation</h3>
        <p>Execution with precision, safety, and high-quality standards.</p>
      </div>
      <div class="step">
        <h3>04. Inspection</h3>
        <p>Final inspection ensures perfect functionality and compliance.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Sliders from "@/components/imageSlider.vue"

export default {
  name: "HomeView",
  components: { Sliders },
  data() {
    return {
      topProject: {
        title: "Hydrological Survey & Drilling - Uyoma",
        description:
          "Comprehensive groundwater analysis and drilling for sustainable usage in Siaya-Uyoma.",
        client: "Joash Otieno"
      },
      topService: {
        title: "Borehole Drilling",
        description:
          "Reliable access to clean water using advanced equipment and expertise."
      },
      socialPosts: [
        { id: 1, content: "Completed a 150,000L steel tank in Turkana!", date: "Nov 2025" },
        { id: 2, content: "Solar pump installation for Pekas Ltd is live.", date: "Oct 2025" }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 3rem 2rem;
  background: #f5f7fa;
  position: relative;
  z-index: 2; /* FIX: sits above slider */
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.intro {
  flex: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.intro h2 {
  color: #004aad;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  flex: 1;
  min-width: 280px;
  margin: 0.5rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}

.client {
  display: block;
  margin-top: 0.5rem;
  font-style: italic;
  color: #666;
}

.date {
  font-size: 0.85rem;
  color: #777;
}

.working-process {
  padding: 3rem 1rem;
  background: #f9f9f9;
  border-radius: 12px;
  margin-top: 3rem;
  position: relative;
  z-index: 2;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: 0.3s;
}
.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}
</style>
