<template>
  <main class="home-page">
    <!-- Hero Section -->
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero-media">
        <ImageSlider />
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <h1 id="hero-heading">Sustainable Water Solutions for Your Property</h1>
        <p class="hero-subtitle">
          From hydrogeological surveys to drilling, installation, testing, and maintenance — we deliver end-to-end reliability.
        </p>

        <div class="hero-cta">
          <button @click="$emit('open-estimate')" class="btn btn-primary btn-lg estimate-btn">
            Get a Free Estimate
          </button>
          <router-link to="/services" class="btn btn-outline btn-lg" aria-label="View all services">
            View Services
          </router-link>
        </div>

        <ul class="hero-stats" role="list" aria-label="Key service highlights">
          <li><strong>10+ years</strong> experience</li>
          <li><strong>24/7</strong> support</li>
          <li><strong>1000+</strong> projects</li>
        </ul>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services section" aria-labelledby="services-heading">
      <header class="section-header">
        <h2 id="services-heading">Our Services</h2>
        <p class="section-subtitle">Expert solutions tailored to your site and budget.</p>
      </header>

      <ul class="grid services-grid" role="list" aria-label="List of services">
        <li v-for="(service, i) in services" :key="service.title" class="card service-card" :style="{ animationDelay: `${i * 60}ms` }">
          <div class="icon" aria-hidden="true" v-html="icons[service.icon]"></div>
          <h3 class="card-title">{{ service.title }}</h3>
          <p class="card-text">{{ service.description }}</p>
        </li>
      </ul>
    </section>

    <!-- Value Props -->
    <section class="values section" aria-labelledby="values-heading">
      <header class="section-header">
        <h2 id="values-heading">Why Choose Us</h2>
        <p class="section-subtitle">We combine engineering expertise with dependable service.</p>
      </header>

      <ul class="grid values-grid" role="list">
        <li v-for="(v, i) in values" :key="v.title" class="card value-card" :style="{ animationDelay: `${i * 60}ms` }">
          <div class="value-icon" aria-hidden="true" v-html="icons[v.icon]"></div>
          <h3 class="card-title">{{ v.title }}</h3>
          <p class="card-text">{{ v.description }}</p>
        </li>
      </ul>
    </section>

    <!-- CTA Band -->
    <section class="cta-band" aria-labelledby="cta-heading">
      <div class="cta-inner">
        <h2 id="cta-heading">Ready to start your project?</h2>
        <p>Get a free, no-obligation estimate in minutes.</p>
        <button @click="$emit('open-estimate')" class="btn btn-accent btn-lg">Request Estimate</button>
      </div>
    </section>
  </main>
</template>

<script>
import ImageSlider from '@/components/Imageslider.vue'; // Ensure file name casing matches

export default {
  name: 'Home',
  components: { ImageSlider },
  data() {
    return {
      services: [
        { title: 'Borehole Drilling', description: 'Expert drilling for reliable water access.', icon: 'drilling' },
        { title: 'Pump Installation', description: 'Professional pump sizing and installation.', icon: 'pump' },
        { title: 'Water Testing', description: 'Certified testing to ensure water quality.', icon: 'testing' },
        { title: 'Hydrogeological Surveys', description: 'Evidence-based site evaluation.', icon: 'survey' },
        { title: 'Maintenance & Repairs', description: 'Preventative care and rapid repairs.', icon: 'maintenance' }
      ],
      values: [
        { title: 'Licensed & Insured', description: 'We operate to industry standards with full compliance.', icon: 'shield' },
        { title: 'Transparent Pricing', description: 'Clear scope, fair rates, and no hidden fees.', icon: 'pricing' },
        { title: 'On-Time Delivery', description: 'Reliable timelines and professional communication.', icon: 'clock' }
      ],
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
        `,
        shield: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3l7 4v6c0 4.97-3.58 7.43-7 8-3.42-.57-7-3.03-7-8V7l7-4z"></path>
          </svg>
        `,
        pricing: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 10h10"></path>
            <path d="M7 14h10"></path>
            <path d="M5 6h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path>
          </svg>
        `,
        clock: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 3"></path>
          </svg>
        `
      }
    };
  }
};
</script>

<style scoped>
/* Theme tokens */
.home-page {
  --text: #0f172a;
  --muted: #475569;
  --primary: #0d6efd;
  --primary-600: #0b5ed7;
  --accent: #ff7f32;
  --surface: #ffffff;
  --surface-2: #f7f9fc;
}

/* Hero */
.hero {
  position: relative;
  min-height: 58vh;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: #000;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(2,12,27,0.55), rgba(2,12,27,0.35) 35%, rgba(2,12,27,0.55));
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 20px;
  text-align: center;
}

.hero-content h1 {
  margin: 0 0 10px;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  line-height: 1.2;
  letter-spacing: 0.2px;
}

.hero-subtitle {
  margin: 0 auto 18px;
  max-width: 820px;
  color: #e2e8f0;
  line-height: 1.6;
}

.hero-cta {
  display: inline-flex;
  gap: 12px;
  margin-top: 6px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-stats {
  margin: 16px 0 0;
  padding: 0;
  display: flex;
  gap: 16px;
  justify-content: center;
  list-style: none;
  font-size: 0.95rem;
  color: #e2e8f0;
}
.hero-stats strong { color: #fff; }

/* Sections */
.section {
  padding: 48px 20px;
  background: var(--surface-2);
  color: var(--text);
}

.section-header {
  max-width: 1000px;
  margin: 0 auto 18px;
  text-align: center;
}
.section-header h2 {
  margin: 0 0 6px;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
}
.section-subtitle {
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  padding: 0 4px;
}

/* Cards */
.card {
  background: var(--surface);
  border: 1px solid rgba(2,12,27,0.06);
  border-radius: 12px;
  padding: 18px 16px;
  box-shadow: 0 8px 20px rgba(2,12,27,0.06);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  animation: fadeUp .36s ease both;
}
.card:hover,
.card:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(2,12,27,0.12);
  border-color: rgba(13, 110, 253, 0.18);
}
.card-title {
  margin: 8px 0 6px;
  font-size: 1.05rem;
}
.card-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

/* Icons */
.icon, .value-icon {
  width: 40px;
  height: 40px;
  color: var(--primary);
}
.icon svg, .value-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Services specifics */
.services.section { background: var(--surface-2); }

/* Values specifics */
.values.section { background: #fff; }

/* CTA Band */
.cta-band {
  background: linear-gradient(135deg, var(--primary), var(--primary-600));
  color: #fff;
}
.cta-inner {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 36px 20px;
}
.cta-inner h2 {
  margin: 0 0 6px;
}
.cta-inner p {
  margin: 0 0 14px;
  color: #f1f5f9;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background .2s ease, transform .15s ease, box-shadow .2s ease, color .2s ease, border-color .2s ease;
}
.btn-lg { font-size: 1.05rem; }
.btn-primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 6px 20px rgba(13,110,253,.25);
}
.btn-primary:hover { background: var(--primary-600); transform: translateY(-1px); }
.btn-outline {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,.6);
}
.btn-outline:hover {
  background: rgba(255,255,255,.1);
  border-color: #fff;
}
.btn-accent {
  background: var(--accent);
  color: #0f172a;
}
.btn-accent:hover { filter: brightness(0.95); transform: translateY(-1px); }

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .card { animation: none; }
  .btn, .card { transition: none; }
}
</style>