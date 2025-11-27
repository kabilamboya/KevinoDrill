<template>
  <section class="services-page">

    <!-- ================================= -->
    <!--              HERO                  -->
    <!-- ================================= -->
    <header class="hero">
      <h1>Our Services</h1>
      <p>Professional, end-to-end water solutions for homes, industries, and communities.</p>
    </header>

    <!-- ================================= -->
    <!--         KEY SERVICES               -->
    <!-- ================================= -->
    <section class="section">
      <h2 class="section-title">Key Services</h2>
      <p class="section-subtitle">Our core solutions designed to deliver reliable water access.</p>

      <ul class="services-grid">
        <li v-for="(s, i) in services" :key="s.title" class="service-card" :style="{ animationDelay: `${i * 80}ms` }">
          <div class="icon" v-html="icons[s.icon]"></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.description }}</p>
        </li>
      </ul>
    </section>

    <!-- ================================= -->
    <!--        FEATURED FULL WIDTH         -->
    <!-- ================================= -->
    <section class="featured-wrapper">
      <div
        v-for="(f, index) in featured"
        :key="f.id"
        class="featured"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="featured-image">
          <img :src="f.image" :alt="f.title" />
        </div>

        <div class="featured-content">
          <h3>{{ f.title }}</h3>
          <p>{{ f.description }}</p>
        </div>
      </div>
    </section>

    
    <!-- ================================= -->
    <!--     MAINTENANCE + OTHER SERVICES   -->
    <!-- ================================= -->
    <section class="section alt">
      <h2 class="section-title small">Maintenance & Other Services</h2>
      <p class="section-subtitle">Supporting services that keep your system efficient and long-lasting.</p>

      <ul class="other-grid">
        <li v-for="(s, i) in otherServices" :key="s.title" class="other-card">
          <div class="circle-icon" v-html="icons[s.icon]"></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.description }}</p>
        </li>
      </ul>
    </section>

    <!-- ================================= -->
    <!--                CTA                 -->
    <!-- ================================= -->
    <section class="cta">
      <router-link to="/estimate" class="btn primary">Get a Free Estimate</router-link>
      <button @click="openWhatsApp" class="btn whatsapp">WhatsApp Us</button>
    </section>

  </section>
</template>

<script>
import project1 from "@/assets/images/project1.jpg";
import project2 from "@/assets/images/project2.jpg";
import project4 from "@/assets/images/project4.jpg";
import project6 from "@/assets/images/project6.jpg";

export default {
  name: "ServicesView",
  data() {
    return {
      /* -------------- KEY SERVICES --------------- */
      services: [
        {
          title: "Borehole Drilling",
          description: "Reliable drilling for sustainable water access tailored to your site.",
          icon: "drilling",
        },
        {
          title: "Pump Installation",
          description: "Professional pump sizing, installation, and optimization.",
          icon: "pump",
        },
        {
          title: "Water Testing",
          description: "Comprehensive quality analysis to ensure safe, clean water.",
          icon: "testing",
        },
        {
          title: "Hydrogeological Surveys",
          description: "Evidence-based site evaluation to maximize drilling success.",
          icon: "survey",
        },
      ],

      /* ----------- FEATURED FULL WIDTH ----------- */
      featured: [
        {
          id: 1,
          title: "Drilling Services",
          description:
            "We provide reliable borehole drilling using advanced equipment and strict quality processes.",
          image: project2,
        },
        {
          id: 2,
          title: "Hydrological Survey",
          description:
            "Our hydrogeological assessments improve drilling success rates and water yield.",
          image: project4,
        },
        {
          id: 3,
          title: "Steel Water Tower Fabrication",
          description:
            "We fabricate strong, long-lasting elevated steel tanks for communities and industries.",
          image: project6,
        },
        {
          id: 4,
          title: "Solar Pump Installation",
          description:
            "Energy-efficient, reliable solar pumping systems for homes, farms, and institutions.",
          image: project1,
        },
      ],

      /* ----------- MAINTENANCE & OTHERS ---------- */
      otherServices: [
        {
          title: "Maintenance & Repairs",
          description: "Preventative servicing and rapid repairs that reduce downtime.",
          icon: "maintenance",
        },
        {
          title: "Steel Tank Fabrication",
          description: "Durable, elevated storage tanks built for long-term performance.",
          icon: "steel",
        },
      ],

      /* ----------- VALUE PROPOSITIONS ------------ */
      values: [
        {
          title: "Qualified Experts",
          description: "A team of highly trained specialists in borehole and water systems.",
          icon: "drilling",
        },
        {
          title: "Quality Workmanship",
          description: "We follow strict engineering and safety standards for all projects.",
          icon: "pump",
        },
        {
          title: "Reliable Professionals",
          description: "We prioritize customer satisfaction, timeliness, and quality service.",
          icon: "testing",
        },
      ],

      icons: {
        drilling: `<svg ...>...</svg>`,
        pump: `<svg ...>...</svg>`,
        testing: `<svg ...>...</svg>`,
        survey: `<svg ...>...</svg>`,
        maintenance: `<svg ...>...</svg>`,
        steel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20h16"/><rect x="7" y="4" width="10" height="12" rx="2"/></svg>`
      },
    };
  },
  methods: {
    openWhatsApp() {
      window.open("https://wa.me/254722146077", "_blank");
    },
  },
};
</script>

<style scoped>
.services-page {
  --text: #1e293b;
  --muted: #64748b;
  --primary: #0b5ed7;
  --bg-light: #f7f9fc;

  color: var(--text);
  padding-bottom: 4rem;
}

/* ---------------- HERO ---------------- */
.hero {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 900px;
  margin: auto;
}
.hero h1 {
  font-size: 2.4rem;
  font-weight: 700;
}
.hero p {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 1.1rem;
}

/* ---------------- SECTIONS ---------------- */
.section {
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1.2rem;
}
.section.alt {
  background: var(--bg-light);
  border-radius: 16px;
}

/* Titles */
.section-title {
  text-align: center;
  font-size: 1.9rem;
  font-weight: 700;
}
.section-title.small {
  font-size: 1.5rem;
}
.section-subtitle {
  text-align: center;
  color: var(--muted);
  margin-bottom: 1.8rem;
}

/* ---------------- GRID: MAIN SERVICES ---------------- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.service-card {
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,.05);
  transition: .25s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,.07);
}
.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  color: var(--primary);
}

/* ---------------- OTHER SERVICES ---------------- */
.other-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}
.other-card {
  background: #fff;
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,.05);
}
.circle-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: #e3edff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
}

/* ---------------- FEATURED ---------------- */
.featured-wrapper {
  max-width: 1200px;
  margin: 3rem auto;
}
.featured {
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
  align-items: center;
}
.featured.reverse {
  flex-direction: row-reverse;
}
.featured img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 12px;
}
.featured-content h3 {
  font-size: 1.7rem;
}
.featured-content p {
  color: var(--muted);
}

/* ---------------- CTA ---------------- */
.cta {
  margin-top: 3rem;
  text-align: center;
}
.btn {
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin: 0 0.5rem;
}
.btn.primary {
  background: var(--primary);
  color: #fff;
}
.btn.whatsapp {
  background: #25d366;
  color: #fff;
}
</style>
