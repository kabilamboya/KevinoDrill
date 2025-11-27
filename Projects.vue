<template>
  <section class="projects" aria-labelledby="projects-heading">
    <header class="projects-header">
      <h1 id="projects-heading">Our Projects</h1>
      <p class="subtitle">A snapshot of recent drilling, installations, and water quality work.</p>
    </header>

    <ul class="grid" role="list" aria-label="Project gallery">
      <li
        v-for="(project, i) in projects"
        :key="project.title"
        class="card"
        :style="{ animationDelay: `${i * 60}ms` }"
      >
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
          <p class="card-text">{{ project.description }}</p>
        </div>
      </li>
    </ul>

    <!-- Lightbox -->
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
      <figure class="lightbox-figure">
        <img
          :src="lightbox.project?.image"
          :alt="lightbox.project?.title"
          class="lightbox-img"
        />
        <figcaption class="lightbox-caption">
          {{ lightbox.project?.title }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { title: 'Community Borehole', description: 'Drilled for a rural community.', image: '/assets/project1.jpg' },
        { title: 'Industrial Pump Setup', description: 'High-capacity pump installation.', image: '/assets/project2.jpg' },
        { title: 'Water Quality Testing', description: 'Ensuring safe drinking water.', image: '/assets/project3.jpg' }
      ],
      lightbox: {
        open: false,
        project: null
      }
    };
  },
  methods: {
    openLightbox(project) {
      this.lightbox.project = project;
      this.lightbox.open = true;
      document.body.style.overflow = 'hidden'; // prevent background scroll
    },
    closeLightbox() {
      this.lightbox.open = false;
      this.lightbox.project = null;
      document.body.style.overflow = '';
    }
  }
};
</script>

<style scoped>
.projects {
  --text: #0f172a;
  --muted: #475569;
  --surface: #ffffff;
  --surface-2: #f7f9fc;
  --primary: #0d6efd;

  padding: 40px 20px;
  color: var(--text);
  background: var(--surface-2);
}

.projects-header {
  max-width: 1000px;
  margin: 0 auto 18px;
  text-align: center;
}
.projects-header h1 {
  margin: 0 0 6px;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
}
.subtitle {
  margin: 0 auto;
  max-width: 760px;
  color: var(--muted);
  line-height: 1.6;
}

/* Grid */
.grid {
  max-width: 1100px;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  padding: 0 4px;
}

/* Card */
.card {
  list-style: none;
  background: var(--surface);
  border: 1px solid rgba(2,12,27,0.06);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(2,12,27,0.06);
  overflow: hidden;
  animation: fadeUp .36s ease both;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(2,12,27,0.12);
  border-color: rgba(13,110,253,0.18);
}

/* Image wrapper with aspect ratio */
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

.card-body {
  padding: 14px 14px 16px;
}
.card-title {
  margin: 0 0 6px;
  font-size: 1.05rem;
}
.card-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(2,12,27,0.7);
  display: grid;
  place-items: center;
  z-index: 1000;
  padding: 20px;
}
.lightbox-figure {
  margin: 0;
  max-width: min(1000px, 92vw);
  width: 100%;
}
.lightbox-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.lightbox-caption {
  margin-top: 8px;
  color: #e2e8f0;
  text-align: center;
}
.lightbox-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 999px;
  background: rgba(255,255,255,0.16);
  color: #fff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}
.lightbox-close:hover {
  background: rgba(255,255,255,0.24);
}

/* Animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .card { animation: none; transition: none; }
  .card-img { transition: none; }
}
</style>