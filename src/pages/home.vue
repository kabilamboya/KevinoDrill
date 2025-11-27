<template>
  <div class="home-page">
    <!-- ================= HERO WITH SLIDER ================= -->
<section class="hero" aria-labelledby="hero-heading">

  <!-- BACKGROUND MEDIA (Image Slider + Overlay) -->
  <div class="hero-media">
    <ImageSlider 
      :slides="slideArray"
      :interval="4800"
    />
  </div>

  <!-- FOREGROUND CONTENT (Texts + Buttons) -->
  <div class="hero-content">
    <h1 id="hero-heading">Elevate projects with our drilling expertise</h1>

    <p class="hero-subtitle">
      We deliver end-to-end reliability. From hydrogeological surveys to drilling, 
      installation, testing, and maintenance.
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

      <router-link to="/services" class="btn btn-outline btn-lg">
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
      <ul class="hero-stats">
          <li><strong>10+ years</strong> experience</li>
          <li><strong>24/7</strong> support</li>
          <li><strong>1000+</strong> projects</li>
        </ul>
      </div>

      <div class="top-grid">
        <!-- Top Project -->
        <div class="card">
          <h3>Top Ongoing Project</h3>
          <h4>{{ topProject.title }}</h4>
          <p>{{ topProject.description }}</p>
          <small class="client">— {{ topProject.client }}</small>
        </div>

        <!-- Top Service -->
        <div class="card">
          <h3>Top Service</h3>
          <h4>{{ topService.title }}</h4>
          <p>{{ topService.description }}</p>
        </div>

        <!-- Social Updates -->
        <div class="card">
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
        <p>Get a free, no-obligation estimate in minutes.</p>
        <button @click="$emit('open-estimate')" class="btn btn-accent btn-lg">
          Request Estimate
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import ImageSlider from '@/components/imageSlider.vue'
import s1 from '@/assets/slides/slide1.jpg'
import s2 from '@/assets/slides/slide2.jpg'
import s3 from '@/assets/slides/slide3.jpg'

const slideArray = [s1, s2, s3]

export default {
  name: "Home",
  components: { ImageSlider },

  data() {
    return {
      whatsappNumber: "254722146077",
      slideArray : [s1, s2, s3],
      /* -----------------------------------------------
       * CONTENT BLOCKS FROM SCRIPT 2 (Intro + Cards)
       * ----------------------------------------------- */
      topProject: {
        title: "Hydrological Survey & Drilling - Uyoma",
        description:
          "Comprehensive groundwater analysis and drilling for sustainable usage in Siaya-Uyoma.",
        client: "Joash Otieno",
      },
      topService: {
        title: "Borehole Drilling",
        description:
          "Reliable access to clean water using advanced equipment and expertise.",
      },
      socialPosts: [
        { id: 1, content: "Completed a 150,000L steel tank in Turkana!", date: "Nov 2025" },
        { id: 2, content: "Solar pump installation for Pekas Ltd is live.", date: "Oct 2025" },
      ],

      /* -----------------------------------------------
       * SERVICES + VALUES + ICONS FROM SCRIPT 1
       * ----------------------------------------------- */
      services: [
        { title: "Borehole Drilling", description: "Expert drilling for reliable water access.", icon: "drilling" },
        { title: "Pump Installation", description: "Professional pump sizing and installation.", icon: "pump" },
        { title: "Water Testing", description: "Certified testing to ensure water quality.", icon: "testing" },
        { title: "Hydrogeological Surveys", description: "Evidence-based site evaluation.", icon: "survey" },
        { title: "Maintenance & Repairs", description: "Preventative care and rapid repairs.", icon: "maintenance" },
      ],

      values: [
        { title: "Licensed & Insured", description: "We operate to industry standards with full compliance.", icon: "shield" },
        { title: "Transparent Pricing", description: "Clear scope, fair rates, and no hidden fees.", icon: "pricing" },
        { title: "On-Time Delivery", description: "Reliable timelines and professional communication.", icon: "clock" },
      ],

      icons: {
        drilling: `...`,   /* (keep original SVGs from your Script 1) */
        pump: `...`,
        testing: `...`,
        survey: `...`,
        maintenance: `...`,
        shield: `...`,
        pricing: `...`,
        clock: `...`
      }
    };
  }
};
</script>

<style scoped>
/* -------------------------------------------------------
   BASE THEME + HERO STYLES (from Script 1)
------------------------------------------------------- */
.home-page {
  --text: #0f172a;
  --muted: #475569;
  --primary: #0d6efd;
  --primary-600: #0b5ed7;
  --accent: #ff7f32;
  --surface: #ffffff;
  --surface-2: #f7f9fc;
}

/* HERO */

.hero {
  position: relative;
  min-height: 58vh;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: #000;
}
.hero-media { position: absolute; inset: 0; }

.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  padding: 48px 20px;
  max-width: 1100px;
  margin: 0 auto;
}
.hero-stat{
  display: flex;
}
.hero-subtitle { color: #e2e8f0; max-width: 760px; margin: 0 auto; }

.hero-cta {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* PRIMARY BUTTON (WhatsApp) */
.btn.btn-primary {
  background: #25d366;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.25s ease;
}

.btn.btn-primary:hover {
  background: #1ebe5d;
  transform: translateY(-2px);
}

/* OUTLINE BUTTON (Services) */
.btn.btn-outline {
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  border: 2px solid #0d6efd;
  color: #0d6efd;
  background: transparent;
  transition: 0.25s ease;
}

.btn.btn-outline:hover {
  background: #0d6efd;
  color: white;
  transform: translateY(-2px);
}

/* Mobile fixing */
@media (max-width: 600px) {
  .hero-cta {
    flex-direction: column;
    gap: 12px;
  }
}

/* Buttons reused globally */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: .2s ease;
}
.btn-primary { background: var(--primary); color: #fff; }
.btn-outline { border-color: #fff; color: #fff; background: transparent; }
.btn-accent { background: var(--accent); color: #0f172a; }

/* -------------------------------------------------------
   INTRO + 3 CARDS (from Script 2 but visually modernized)
------------------------------------------------------- */
.intro-section .intro-wrapper {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 32px;
  padding: 30px;
}

.top-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  max-width: 1100px;
  margin: 0 auto;
}

.top-grid .card {
  padding: 18px;
  background: var(--surface);
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);
  transition: .2s ease;
}
.top-grid .card:hover { transform: translateY(-3px); }

/* Social posts */
.client { display: block; margin-top: 6px; color: #555; font-style: italic; }
.date { font-size: .85rem; color: #777; }

/* -------------------------------------------------------
   WORKING PROCESS (Script 2 but restyled)
------------------------------------------------------- */
.working-process {
  background: linear-gradient(135deg, var(--primary), var(--primary-600));
  padding: 50px;
  margin-top: 20px;
}
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
  margin-top: 20px;
}
.step {
  background: var(--surface);
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
  transition: .2s;
}
.step:hover { transform: translateY(-3px); }

/* CTA BAND */
.cta-band {
  color: #0056d2;
  text-align: center;
  padding: 40px 20px;
}
</style>
