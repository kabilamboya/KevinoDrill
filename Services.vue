<template>
  <section class="services" aria-labelledby="services-heading">
    <!-- Header -->
    <header class="services-hero">
      <h1 id="services-heading">Our Services</h1>
      <p class="subtitle">
        Expert, end-to-end water solutions—from site analysis to long-term maintenance.
      </p>
    </header>

    <!-- Services Grid -->
    <ul class="grid" role="list" aria-label="List of services we offer">
      <li
        v-for="(service, i) in services"
        :key="service.title"
        class="card"
        role="listitem"
        :style="{ animationDelay: `${i * 60}ms` }"
        tabindex="0"
      >
        <div class="icon" aria-hidden="true" v-html="icons[service.icon]"></div>
        <h3 class="title">{{ service.title }}</h3>
        <p class="description">{{ service.description }}</p>

        <div class="meta">
          <span class="badge">Professional</span>
          <span class="sep">•</span>
          <span class="badge badge-outline">Reliable</span>
        </div>

        <!-- Optional CTA per service (enable if you have routes/pages) -->
        <!--
        <router-link class="card-cta" :to="service.link">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
          </svg>
        </router-link>
        -->
      </li>
    </ul>

    <!-- Section CTA -->
    <div class="section-cta">
      <router-link to="/estimate" class="btn btn-primary" aria-label="Request a free estimate">
        Get a Free Estimate
      </router-link>
      <!-- If not using Vue Router:
      <a href="/estimate" class="btn btn-primary" aria-label="Request a free estimate">
        Get a Free Estimate
      </a>
      -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Borehole Drilling',
          description: 'Reliable drilling for sustainable water access tailored to your site.',
          icon: 'drilling'
        },
        {
          title: 'Pump Installation',
          description: 'Professional pump sizing, installation, and optimization.',
          icon: 'pump'
        },
        {
          title: 'Water Testing',
          description: 'Comprehensive quality analysis to ensure safe, clean water.',
          icon: 'testing'
        },
        {
          title: 'Hydrogeological Surveys',
          description: 'Evidence-based site evaluation to maximize drilling success.',
          icon: 'survey'
        },
        {
          title: 'Maintenance & Repairs',
          description: 'Preventative maintenance and rapid repairs to minimize downtime.',
          icon: 'maintenance'
        }
      ],
      // Lightweight inline SVG icons (stroke inherits currentColor)
      icons: {
        drilling: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h16"></path>
            <path d="M12 4v6"></path>
            <path d="M9 10h6l-1 3h-4z"></path>
            <path d="M12 13v5"></path>
          </svg>
        `,
        pump: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="14" r="3"></circle>
            <path d="M11 14h6"></path>
            <path d="M17 7v7"></path>
            <path d="M17 7h3v4"></path>
          </svg>
        `,
        testing: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 3h6"></path>
            <path d="M10 3v8a4 4 0 1 0 4 0V3"></path>
            <path d="M8 14h8"></path>
          </svg>
        `,
        survey: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 20h18"></path>
            <path d="M12 5l6 15"></path>
            <path d="M12 5L6 20"></path>
            <path d="M9 12h6"></path>
          </svg>
        `,
        maintenance: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 3l-6 6"></path>
            <path d="M3 21l6-6"></path>
            <circle cx="9" cy="15" r="1.5"></circle>
            <circle cx="15" cy="9" r="1.5"></circle>
          </svg>
        `
      }
    };
  }
};
</script>

<style scoped>
:root {
  /* Fallbacks for non-existing CSS vars */
}

/* Theme tokens */
.services {
  --bg: #f7f9fc;
  --card-bg: #ffffff;
  --text: #1e293b;
  --muted: #475569;
  --primary: #0d6efd;
  --primary-600: #0b5ed7;
  --accent: #ff7f32;
}

.services {
  background: var(--bg);
  color: var(--text);
  padding: 32px 20px 48px;
}

/* Hero */
.services-hero {
  max-width: 1000px;
  margin: 0 auto 12px;
  text-align: center;
}
.services-hero h1 {
  font-size: clamp(1.75rem, 2.4vw, 2.2rem);
  margin: 0;
  letter-spacing: .2px;
}
.subtitle {
  margin: 8px auto 0;
  max-width: 760px;
  color: var(--muted);
  line-height: 1.6;
}

/* Grid */
.grid {
  max-width: 1100px;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  padding: 10px;
}

/* Card */
.card {
  list-style: none;
  background: var(--card-bg);
  border-radius: 12px;
  padding: 18px 16px;
  box-shadow: 0 6px 20px rgba(2, 12, 27, 0.06);
  border: 1px solid rgba(2, 12, 27, 0.06);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  outline: none;
  animation: cardIn .36s ease both;
}
.card:hover,
.card:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(2,12,27,0.12);
  border-color: rgba(13, 110, 253, 0.25);
}

.icon {
  width: 40px;
  height: 40px;
  color: var(--primary);
  margin-bottom: 10px;
}
.icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.title {
  font-size: 1.05rem;
  margin: 0 0 6px;
  letter-spacing: .2px;
}
.description {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

/* Meta badges */
.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: #64748b;
  font-size: .9rem;
}
.sep {
  opacity: .5;
}
.badge {
  background: rgba(13,110,253,.1);
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 999px;
  font-size: .8rem;
  line-height: 1;
  font-weight: 600;
}
.badge-outline {
  background: transparent;
  color: #0f172a;
  border: 1px solid #e2e8f0;
}

/* CTA */
.section-cta {
  display: flex;
  justify-content: center;
  margin-top: 22px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background .2s ease, transform .15s ease, box-shadow .2s ease;
}
.btn-primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 6px 20px rgba(13,110,253, .25);
}
.btn-primary:hover {
  background: var(--primary-600);
  transform: translateY(-1px);
  box-shadow: 0 10px 28px rgba(13,110,253, .35);
}

/* Animations */
@keyframes cardIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .card { animation: none; }
  .btn, .card { transition: none; }
}
</style>