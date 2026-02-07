<template>
  <div class="home-page">
    <!-- ================= HERO WITH SLIDER ================= -->
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero-media">
        <ImageSlider :slides="slideArray" :interval="4800" />
      </div>

      <div class="hero-content">
        <h1 id="hero-heading">Elevate projects with our drilling expertise</h1>

        <p class="hero-subtitle">
          <span class="office-item" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0zm-9 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <span class="office-text">
              <span class="office-label">OYUGIS OFFICE </span>
              <span itemprop="addressLocality">Kisumu - Kisii Road, Opp. Torley's Hotel</span>
            </span>
          </span>
          <span class="office-item" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0zm-9 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <span class="office-text">
              <span class="office-label">KONDELE OFFICE </span>
              <span itemprop="addressLocality">Kondele - Kibos Road, Sansport Door No. 4</span>
            </span>
          </span>
        </p>
        
      </div>
    </section>

    <!-- ================= INTRO SECTION ================= -->
    <section class="intro-section section">
      <div class="intro-wrapper">
        <h2>Welcome to Kevino Drilling</h2>
        <p>
          We deliver expert drilling, hydrological surveys, steel tank fabrication,
          and solar pump installations. Providing sustainable water solutions for
          communities, industries, and agriculture.
        </p>

        <!-- Animated Stats -->
        <div class="hero-stats" ref="statsSection">
          <div class="stat-card">
            <span class="number">{{ counters.years }}+</span>
            <span class="label">years experience</span>
          </div>

          <div class="stat-card">
            <span class="number static-number">24/7</span>
            <span class="label">support</span>
          </div>

          <div class="stat-card">
            <span class="number">{{ counters.projects }}+</span>
            <span class="label">projects</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= WORKING PROCESS ================= -->
    <section class="working-process section" aria-labelledby="process-heading">
      <h2 id="process-heading">Our Working Process</h2>
      <p class="process-subtitle">
        A clear, transparent approach that delivers reliable results every time.
      </p>

      <div class="steps">
        <div class="step-card">
          <span class="step-number">01</span>
          <div class="step-icon">
            &#x1F9E0;
          </div>
          <h3>Consultation</h3>
          <p>We begin with a detailed needs assessment and expert client consultation.</p>
        </div>

        <div class="step-card">
          <span class="step-number">02</span>
          <div class="step-icon">
            &#x1F4C4;
          </div>
          <h3>Proposal</h3>
          <p>We prepare a transparent proposal outlining scope, costs, and timeline.</p>
        </div>

        <div class="step-card">
          <span class="step-number">03</span>
          <div class="step-icon">
            &#x1F6E0;&#xFE0F;
          </div>
          <h3>Installation</h3>
          <p>Execution with precision, safety, and industry-grade standards.</p>
        </div>

        <div class="step-card">
          <span class="step-number">04</span>
          <div class="step-icon">
            &#x2705;
          </div>
          <h3>Inspection</h3>
          <p>Final inspection ensures functionality, safety, and full compliance.</p>
        </div>
      </div>
    </section>

    <!-- ================= CTA BAND ================= -->
    <section class="cta-band" aria-labelledby="cta-heading">
      <div class="cta-inner">
        <h2 id="cta-heading">Ready to start your project?</h2>
        <p>Explore our past projects and client testimonials.</p>

        <div class="cta-actions">
          <router-link to="/projects" class="btn btn-orange-outline btn-lg">
            Completed Projects
          </router-link>

          <router-link to="/services" class="btn btn-orange-outline btn-lg">
            View our Services
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageSlider from "@/components/imageSlider.vue"
import s1 from "@/assets/slides/slide1.jpg"
import s2 from "@/assets/slides/slide2.jpg"
import s3 from "@/assets/slides/slide3.jpg"
import s5 from "@/assets/slides/slide5.jpg"
import s6 from "@/assets/slides/slide6.jpg"

export default {
  name: "Home",
  components: { ImageSlider },

  data() {
    return {
      whatsappNumber: "254721957386",
      slideArray: [s1, s2, s3, s5, s6],

      // Animated counters
      counters: { years: 1, projects: 1 },
      hasAnimated: false,
      statsObserver: null,
      counterTimers: [],
    }
  },

  mounted() {
    if (!this.$refs.statsSection) return
    this.statsObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !this.hasAnimated) {
        this.startCounters()
        this.hasAnimated = true
      }
    })

    this.statsObserver.observe(this.$refs.statsSection)
  },

  beforeUnmount() {
    if (this.statsObserver) this.statsObserver.disconnect()
    this.counterTimers.forEach((timer) => clearInterval(timer))
    this.counterTimers = []
  },

  methods: {
    startCounters() {
      this.animateCounter("years", 10, 1000)
      this.animateCounter("projects", 100, 500)
    },

    animateCounter(key, target, duration) {
      let start = 1
      const range = target - start
      if (range <= 0) {
        this.counters[key] = target
        return
      }
      const step = Math.ceil(duration / range)

      const timer = setInterval(() => {
        start++
        this.counters[key] = start
        if (start >= target) clearInterval(timer)
      }, step)
      this.counterTimers.push(timer)
    },
  },
}
</script>

<style scoped>
/* ------------------------------------------------------- */
/* BASE + HERO */
/* ------------------------------------------------------- */

.home-page {
  --text: #0f172a;
  --muted: #475569;
  --primary: #0d6efd;
  --primary-600: #0b5ed7;
  --accent: #ff7f32;
  --surface: #ffffff;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: #000;
}
.hero-media {
  position: absolute;
  inset: 0;
}
.hero-media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.45)
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  padding: 48px 20px;
  max-width: 1100px;
  margin: 0 auto;
  animation: fadeUp 1s ease-out;
}

.hero-subtitle {
  display: grid;
  gap: 10px;
  max-width: 520px;
  margin: 12px auto 0;
  text-align: left;
}

.hero-subtitle .office-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.hero-subtitle .office-text {
  display: inline;
}

.hero-subtitle .office-label {
  font-weight: 700;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: panZoom 18s ease-in-out infinite;
}

@keyframes panZoom {
  0% {
    transform: scale(1) translateX(0);
  }
  50% {
    transform: scale(1.08) translateX(-2%);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}

/* ------------------------------------------------------- */
/* STATS */
/* ------------------------------------------------------- */

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.stat-card {
  background: #ffffff;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  border: 1px solid #e5e9f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  text-align: center;
  width: 160px;
}

.stat-card .number {
  font-size: 2rem;
  font-weight: 800;
  color: orange !important;
}

.stat-card .label {
  font-size: 0.9rem;
  color: #4a5568;
}

/* Mobile */
@media (max-width: 768px) {
  .hero-stats {
    flex-direction: column;
  }
  .stat-card {
    width: 100%;
  }
}

/* ------------------------------------------------------- */
/* INTRO */
/* ------------------------------------------------------- */

.intro-section {
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
}

.intro-wrapper {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 32px;
  padding: 30px;
}
/* ------------------------------------------------------- */
/* WORKING PROCESS - ICONS + MOTION */
/* ------------------------------------------------------- */

.working-process {
  background: linear-gradient(135deg, var(--primary), var(--primary-600));
  padding: 80px 20px;
  text-align: center;
}

.working-process h2 {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 8px;
}

.process-subtitle {
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 48px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: auto;
}

.step-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 36px 24px 32px;
  position: relative;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
}

/* Number badge */
.step-number {
  position: absolute;
  top: -16px;
  left: 24px;
  background: var(--accent);
  color: #ffffff;
  font-weight: 800;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
}

/* Icon */
.step-icon {
  width: 56px;
  height: 56px;
  background: rgba(13, 110, 253, 0.1);
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  margin: 0 auto 16px;
}

/* Text */
.step-card h3 {
  margin-bottom: 10px;
  font-size: 1.15rem;
  color: var(--text);
}

.step-card p {
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Mobile refinements */
@media (max-width: 768px) {
  .working-process {
    padding: 60px 16px;
  }

  .process-subtitle {
    margin-bottom: 32px;
  }
}

/* ------------------------------------------------------- */
/* CTA BAND */
/* ------------------------------------------------------- */
.hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 25px;
}
.cta-band {
  color: #0056d2;
  text-align: center;
  padding: 40px 20px;
}
.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
}
/* ORANGE OUTLINE BUTTON */
.btn-orange-outline {
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px; /* rounded corners */
  background: transparent;
  border: 2px solid #ff7f32; /* orange stroke */
  color: #ff7f32; /* orange text */
  transition: 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Hover effect */
.btn-orange-outline:hover {
  background: #ff7f32; /* filled orange */
  color: #ffffff; /* white text */
  transform: translateY(-2px);
}
</style>
