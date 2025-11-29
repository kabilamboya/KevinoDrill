<template>
  <div class="home-page">
    <!-- ================= HERO WITH SLIDER ================= -->
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero-media">
        <ImageSlider 
          :slides="slideArray"
          :interval="4800"
        />
      </div>

      <div class="hero-content">
        <h1 id="hero-heading">Elevate projects with our drilling expertise</h1>

        <p class="hero-subtitle">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0zm-9 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="streetAddress">P.O BOX 82-40100 Paw Akuche</span>,
            <span itemprop="addressLocality">Along Kisumu Rd, Opp. Torly’s Hotel</span>,
            <span itemprop="addressCountry">KE</span>
          </span>
        </p>

        <div class="hero-cta">
          <a
            :href="`https://wa.me/${whatsappNumber}`"
            target="_blank"
            rel="noopener"
            class="btn btn-primary btn-lg estimate-btn"
          >
            Talk to us on WhatsApp
          </a>

          <router-link to="/services" class="btn btn-orange-outline btn-lg">
            View our Services
          </router-link>
        </div>
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

        <!-- ⭐ Animated Stats ⭐ -->
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
    <section class="working-process section">
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

    <!-- ================= CTA BAND ================= -->
    <section class="cta-band" aria-labelledby="cta-heading">
      <div class="cta-inner">
        <h2 id="cta-heading">Ready to start your project?</h2>
        <p>Explore our past projects and client testimonials.</p>
        
        <router-link to="/projects" class="btn btn-orange-outline btn-lg">
          Completed Projects
        </router-link>

      </div>
    </section>
  </div>
</template>

<script>
import ImageSlider from '@/components/imageSlider.vue'
import s1 from '@/assets/slides/slide1.jpg'
import s2 from '@/assets/slides/slide2.jpg'
import s3 from '@/assets/slides/slide3.jpg'
import s5 from '@/assets/slides/slide5.jpg'
import s6 from '@/assets/slides/slide6.jpg'

export default {
  name: "Home",
  components: { ImageSlider },

  data() {
    return {
      whatsappNumber: "254721957386",
      slideArray: [s1, s2, s3, s5, s6],

      // Animated counters
      counters: { years: 1, projects: 1 },
      hasAnimated: false
    };
  },

  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.hasAnimated) {
        this.startCounters();
        this.hasAnimated = true;
      }
    });

    observer.observe(this.$refs.statsSection);
  },

  methods: {
    startCounters() {
      this.animateCounter("years", 10, 1000);
      this.animateCounter("projects", 100, 500);
    },

    animateCounter(key, target, duration) {
      let start = 1;
      const range = target - start;
      const step = Math.ceil(duration / range);

      const timer = setInterval(() => {
        start++;
        this.counters[key] = start;
        if (start >= target) clearInterval(timer);
      }, step);
    }
  }
};
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
  min-height: 58vh;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: #000;
}
.hero-media { position: absolute; inset: 0; }
.hero-media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
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
/* PROCESS */
/* ------------------------------------------------------- */

.working-process {
  background: linear-gradient(135deg, var(--primary), var(--primary-600));
  padding: 50px;
  margin-top: 20px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

/* ------------------------------------------------------- */
/* CTA BAND */
/* ------------------------------------------------------- */
.hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 25px;
}
.cta-band {
  color: #0056d2;
  text-align: center;
  padding: 40px 20px;
}
/* ORANGE OUTLINE BUTTON */
.btn-orange-outline {
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;        /* rounded corners */
  background: transparent;
  border: 2px solid #ff7f32;  /* orange stroke */
  color: #ff7f32;             /* orange text */
  transition: 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Hover effect */
.btn-orange-outline:hover {
  background: #ff7f32;   /* filled orange */
  color: #ffffff;        /* white text */
  transform: translateY(-2px);
}

</style>