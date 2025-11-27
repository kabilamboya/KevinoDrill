<template>
  <section class="projects" aria-labelledby="projects-heading">
    <header class="projects-header">
      <h1 id="projects-heading">Our Projects</h1>
      <p class="subtitle">A snapshot of recent drilling, installations, and water quality work.</p>
    </header>

    <!-- Featured Project (not clickable) -->
    <div class="featured-project" aria-hidden="false">
      <img :src="featured.image" alt="" class="featured-image" />
      <div class="featured-text">
        <h4>{{ featured.title }}</h4>
        <h3 class="location">{{ featured.location }}</h3>
        <p>{{ featured.description }}</p>
        <blockquote v-if="featured.testimonial">
          "{{ featured.testimonial }}"
          <footer>- {{ featured.client }}</footer>
        </blockquote>
      </div>
    </div>

    <!-- Completed Projects Grid -->
    <header class="grid-header">
      <h2 class="section-title small">Completed Projects</h2>
    </header>

    <ul class="grid" role="list" aria-label="Project gallery">
      <li
        v-for="(project, i) in recentProjects"
        :key="project.id || project.title || i"
        class="card"
        :style="{ animationDelay: `${i * 60}ms` }"
      >
        <!-- ONLY grid thumbnails open the lightbox (option A) -->
        <button
          class="image-wrap"
          @click="openLightbox(project)"
          :aria-label="`View ${project.title} image`"
          title="Click to view larger"
        >
          <img
            class="card-img"
            :src="project.image"
            :alt="project.title"
            loading="lazy"
            decoding="async"
          />
        </button>

        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-text">
            <span class="location">{{ project.location }}</span> — {{ project.description }}
          </p>

          <blockquote v-if="project.testimonial" class="project-quote">
            "{{ project.testimonial }}"
            <footer>- {{ project.client }}</footer>
          </blockquote>
        </div>
      </li>
    </ul>

    <!-- Lightbox (only for grid items) -->
    <div
      v-if="lightbox.open"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="lightbox.project?.title || 'Project image'"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" @click="closeLightbox" aria-label="Close image">
        ×
      </button>

      <figure class="lightbox-figure" ref="lightboxFigure" tabindex="-1">
        <img
          :src="lightbox.project?.image"
          :alt="lightbox.project?.title"
          class="lightbox-img"
        />
        <figcaption class="lightbox-caption">
          <strong>{{ lightbox.project?.title }}</strong>
          <span class="caption-sub"> — {{ lightbox.project?.location }}</span>
          <p class="caption-desc" v-if="lightbox.project?.description">{{ lightbox.project.description }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
  <!-- ================= CTA BAND ================= -->
    <section class="cta-band" aria-labelledby="cta-heading">
      <div class="cta-inner">
        <h2 id="cta-heading">Ready to start your project?</h2>
        <p>Get a free, no-obligation estimate in minutes.</p>
        <button @click="$emit('open-estimate')" class="btn btn-accent btn-lg">
          Request Estimate
        </button>
      </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

// Import images (adjust paths to match your project)
import featuredImg from '@/assets/images/project1.jpg'
import p2 from '@/assets/images/project2.jpg'
import p3 from '@/assets/images/project3.jpg'
import p4 from '@/assets/images/project4.jpg'
import p5 from '@/assets/images/project5.jpg'
import p6 from '@/assets/images/project6.jpg'

// Featured + recent projects data (merged from both files)
const featured = {
  title: "Hydrological survey and drilling",
  location: "Siaya-Uyoma",
  description:
    "Comprehensive hydrological survey followed by precision drilling to provide reliable groundwater access. The project ensured sustainable water supply for the community while adhering to environmental best practices.",
  testimonial: "Kevino Drilling delivered beyond expectations, ensuring clean and consistent water flow.",
  client: "Joash Otieno",
  image: featuredImg
}

const recentProjects = ref([
  {
    id: 1,
    title: "Steel tank fabrication",
    location: "Turkana",
    description:
      "Custom-designed steel water storage tank fabricated and installed to withstand harsh climatic conditions. The tank supports large-scale water distribution for rural communities.",
    testimonial: "Strong, durable, and professionally executed — a true asset for our operations.",
    client: "Hydraelmat Ventures",
    image: p2
  },
  {
    id: 2,
    title: "Solar water pump installation",
    location: "Commissioned by Pekas Ltd",
    description:
      "Deployment of an energy-efficient solar-powered water pumping system. This project reduced operational costs while ensuring continuous water supply in off-grid areas.",
    testimonial: "The solar solution has transformed our water accessibility and lowered energy expenses.",
    client: "Pekas Ltd",
    image: p3
  },
  {
    id: 3,
    title: "Borehole drilling and casing",
    location: "Kajiado",
    description:
      "Executed borehole drilling with reinforced casing to guarantee long-term structural integrity. The project provided safe and dependable water access for both domestic and agricultural use.",
    testimonial: "Reliable workmanship and attention to detail — we now have a lasting water source.",
    client: "Maji Safi Ltd",
    image: p4
  },
  {
    id: 4,
    title: "Rainwater harvesting system",
    location: "Kitui",
    description:
      "Designed and installed a rainwater harvesting system with storage tanks and filtration units. The solution maximized seasonal rainfall capture and reduced reliance on external water sources.",
    testimonial: "Innovative and sustainable — our community benefits greatly during dry seasons.",
    client: "GreenTech Africa",
    image: p5
  },
  {
    id: 5,
    title: "Water kiosk setup",
    location: "Machakos",
    description:
      "Constructed and equipped a modern water kiosk to serve local residents. The kiosk provides affordable, clean water while promoting community health and accessibility.",
    testimonial: "Kevino Drilling’s kiosk setup has improved daily life for hundreds of families.",
    client: "County Water Board",
    image: p5
  },
  {
    id: 6,
    title: "Pump maintenance and upgrade",
    location: "Narok",
    description:
      "Performed preventive maintenance and upgraded pumping systems to enhance efficiency and extend lifespan. The project ensured uninterrupted water supply for local farmers.",
    testimonial: "Our upgraded pumps run smoothly and reliably thanks to Kevino Drilling’s expertise.",
    client: "Narok Farmers Union",
    image: p6
  }
])

// Lightbox state
const lightbox = ref({
  open: false,
  project: null
})

const openLightbox = (project) => {
  lightbox.value.project = project
  lightbox.value.open = true
  // prevent background scroll
  document.body.style.overflow = 'hidden'
  // focus trap hint: focus the figure for screen readers
  nextTick(() => {
    const fig = lightboxFigure.value
    if (fig) fig.focus()
  })
}

const closeLightbox = () => {
  lightbox.value.open = false
  lightbox.value.project = null
  document.body.style.overflow = ''
}

// keyboard handlers (Escape closes, Left/Right optional)
const onKey = (e) => {
  if (!lightbox.value.open) return
  if (e.key === 'Escape') closeLightbox()
}

// ref to lightbox figure to set focus
const lightboxFigure = ref(null)

onMounted(() => {
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = '' // ensure no leftover lock
})

// watch open state to restore focus (optional)
watch(
  () => lightbox.value.open,
  (open) => {
    if (!open) {
      // small delay -> remove focus from previously focused element
      // no-op: letting browser resume normal focus
    }
  }
)
</script>

<style scoped>
/* Palette */
:root {
  --bg: #f7f9fc;
  --card: #ffffff;
  --muted: #475569;
  --accent: #0d6efd;
  --text: #0f172a;
}

/* Section */
.projects {
  background: var(--bg);
  padding: 40px 20px;
  color: var(--text);
}

/* Header */
.projects-header {
  max-width: 1100px;
  margin: 0 auto 18px;
  text-align: center;
}
.projects-header h1 {
  margin: 0 0 6px;
  font-size: clamp(1.6rem, 2.6vw, 2.4rem);
}
.subtitle {
  margin: 0 auto;
  max-width: 760px;
  color: var(--muted);
  line-height: 1.6;
}

/* Featured project */
.featured-project {
  max-width: 1100px;
  margin: 12px auto 28px;
  display: flex;
  gap: 20px;
  align-items: stretch;
  background: #eef6ff;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(2,12,27,0.06);
}
.featured-image {
  width: 420px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}
.featured-text {
  flex: 1;
}
.featured-text h4 {
  margin: 0 0 6px;
  font-size: 1rem;
  color: var(--accent);
}
.featured-text h3.location {
  margin: 0 0 8px;
  font-size: 1.25rem;
}
.featured-text p {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.6;
}

/* Grid header (small) */
.grid-header {
  max-width: 1100px;
  margin: 0 auto;
  padding: 8px 0 0;
}
.section-title.small {
  font-size: 1.25rem;
  margin: 0 0 8px;
  text-align: left;
  max-width: 1100px;
  margin-left: 4px;
}

/* Grid */
.grid {
  max-width: 1100px;
  margin: 18px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  padding: 0 4px;
  list-style: none;
}

/* Card */
.card {
  background: var(--card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(2,12,27,0.06);
  box-shadow: 0 8px 20px rgba(2,12,27,0.06);
  transition: transform .18s ease, box-shadow .18s ease;
  animation: fadeUp .36s ease both;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(2,12,27,0.10);
  border-color: rgba(13,110,253,0.12);
}

/* Image wrap & img */
.image-wrap {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  cursor: zoom-in;
  background: #eef2f7;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .35s ease;
}
.image-wrap:hover .card-img {
  transform: scale(1.04);
}

/* Card body */
.card-body {
  padding: 14px;
}
.card-title {
  margin: 0 0 8px 0;
  font-size: 1.05rem;
}
.card-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}
.location {
  display: inline-block;
  font-style: italic;
  color: #475569;
  margin-right: 8px;
}

/* Project quote */
.project-quote {
  margin-top: 10px;
  font-style: italic;
  color: #333;
  background: #f8fafc;
  padding: 0.65rem;
  border-left: 4px solid var(--accent);
  border-radius: 6px;
}
.project-quote footer {
  display: inline-block;
  background-color: var(--accent);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(2,12,27,0.75);
  display: grid;
  place-items: center;
  z-index: 1200;
  padding: 20px;
}
.lightbox-figure {
  margin: 0;
  max-width: min(1100px, 96vw);
  width: 100%;
  outline: none;
}
.lightbox-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  box-shadow: 0 24px 80px rgba(0,0,0,0.45);
}
.lightbox-caption {
  margin-top: 10px;
  color: #e6eef9;
  text-align: left;
  font-size: 0.95rem;
}
.lightbox-caption .caption-sub {
  opacity: 0.85;
  margin-left: 6px;
  font-weight: 500;
}
.lightbox-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  color: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}
.lightbox-close:hover {
  background: rgba(255,255,255,0.2);
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 1024px) {
  .featured-image { width: 320px; height: 210px; }
}
@media (max-width: 768px) {
  .featured-project { flex-direction: column; gap: 12px; padding: 1rem; }
  .featured-image { width: 100%; height: auto; border-radius: 8px; }
  .grid { gap: 12px; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card { animation: none; transition: none; }
  .card-img { transition: none; }
}
</style>
