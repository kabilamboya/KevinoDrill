<template>
  <section v-if="project" class="project-detail">
    <header class="detail-hero">
      <div class="detail-text">
        <p class="eyebrow">Project Details</p>
        <h1>{{ project.title }}</h1>
        <p class="location">{{ project.location }}</p>
        <p class="summary">{{ project.description }}</p>
      </div>
      <img :src="project.image" :alt="project.title" class="detail-image" />
    </header>

    <div class="detail-grid">
      <div class="detail-card">
        <h3>Timeline</h3>
        <p>{{ project.timeline }}</p>
      </div>
      <div class="detail-card">
        <h3>Team Members</h3>
        <ul>
          <li v-for="member in project.team" :key="member">{{ member }}</li>
        </ul>
      </div>
      <div class="detail-card">
        <h3>Challenges</h3>
        <ul>
          <li v-for="item in project.challenges" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="detail-card">
        <h3>Achievements</h3>
        <ul>
          <li v-for="item in project.achievements" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="detail-cta">
      <router-link to="/projects" class="btn btn-orange-outline btn-lg">
        Back to Projects
      </router-link>
    </div>
  </section>

  <section v-else class="project-detail">
    <h2>Project not found</h2>
    <router-link to="/projects" class="btn btn-orange-outline btn-lg">
      Back to Projects
    </router-link>
  </section>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import projects from "@/data/projects"

const route = useRoute()

const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug)
)
</script>

<style scoped>
.project-detail {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 60px;
  color: #0f172a;
}

.detail-hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  align-items: center;
}

.detail-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 6px;
}

.location {
  color: #475569;
  margin-top: 4px;
}

.summary {
  margin-top: 12px;
  line-height: 1.7;
}

.detail-grid {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.detail-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(2,12,27,0.06);
}

.detail-card h3 {
  margin-bottom: 8px;
}

.detail-card ul {
  margin: 0;
  padding-left: 18px;
}

.detail-cta {
  margin-top: 30px;
  text-align: center;
}

@media (max-width: 900px) {
  .detail-hero {
    grid-template-columns: 1fr;
  }
  .detail-image {
    height: 260px;
  }
}
</style>
