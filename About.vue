<template>
  <main class="about-page" aria-labelledby="about-heading">
    <!-- Intro -->
    <section class="about hero" role="region">
      <h1 id="about-heading">About Us</h1>
      <p class="lead">
        We are a trusted provider of borehole drilling and hydro-services, committed to delivering
        sustainable water solutions. Our team combines technical expertise with modern equipment
        to ensure quality and reliability.
      </p>
    </section>

    <!-- Mission & Vision -->
    <section class="mv section" aria-labelledby="mv-heading">
      <h2 id="mv-heading" class="section-title">Our Mission & Vision</h2>

      <div class="mv-grid">
        <article class="mv-card" aria-labelledby="mission-title">
          <div class="mv-icon" aria-hidden="true" v-html="icons.mission"></div>
          <h3 id="mission-title">Mission</h3>
          <p>
            To deliver safe, reliable, and efficient water access through data-driven planning,
            precision drilling, and lifelong service partnerships.
          </p>
        </article>

        <article class="mv-card" aria-labelledby="vision-title">
          <div class="mv-icon" aria-hidden="true" v-html="icons.vision"></div>
          <h3 id="vision-title">Vision</h3>
          <p>
            To be the region’s most trusted hydro-services partner, enabling sustainable
            water security for communities, businesses, and farms.
          </p>
        </article>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values section" aria-labelledby="values-heading">
      <h2 id="values-heading" class="section-title">Our Core Values</h2>

      <ul class="values-grid" role="list">
        <li v-for="(v, i) in coreValues" :key="v.title" class="value-card" :style="{ animationDelay: `${i * 70}ms` }">
          <div class="value-icon" aria-hidden="true" v-html="icons[v.icon]"></div>
          <div class="value-content">
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-text">{{ v.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Stats/Trust strip (optional, looks professional) -->
    <section class="stats" aria-label="Company highlights">
      <div class="stats-inner">
        <div class="stat">
          <strong>10+ Years</strong>
          <span>Industry Experience</span>
        </div>
        <div class="stat">
          <strong>1,000+</strong>
          <span>Successful Projects</span>
        </div>
        <div class="stat">
          <strong>24/7</strong>
          <span>Support Availability</span>
        </div>
        <div class="stat">
          <strong>ISO</strong>
          <span>Quality Practices</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      coreValues: [
        {
          title: 'Integrity',
          description: 'We uphold transparency and accountability in every engagement.',
          icon: 'integrity'
        },
        {
          title: 'Safety First',
          description: 'Strict adherence to safety standards for people and the environment.',
          icon: 'safety'
        },
        {
          title: 'Excellence',
          description: 'Engineering rigor and continuous improvement in all deliverables.',
          icon: 'excellence'
        },
        {
          title: 'Customer Focus',
          description: 'Solutions tailored to site needs, budget, and long-term reliability.',
          icon: 'customer'
        },
        {
          title: 'Sustainability',
          description: 'Responsible practices that protect aquifers and local ecosystems.',
          icon: 'sustainability'
        }
      ],
      icons: {
        mission: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M4 4h7l3 3v7"></path>
          </svg>
        `,
        vision: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `,
        integrity: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3l7 4v6c0 5-3.5 7.5-7 8-3.5-.5-7-3-7-8V7l7-4z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        `,
        safety: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-2 8-10V7l-8-4-8 4v5c0 8 8 10 8 10z"></path>
            <path d="M9 12h6"></path>
          </svg>
        `,
        excellence: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 21l4-2 4 2V5a4 4 0 0 0-8 0v16z"></path>
          </svg>
        `,
        customer: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
          </svg>
        `,
        sustainability: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v4"></path>
            <path d="M12 14s-4-2-4-6a4 4 0 1 1 8 0c0 4-4 6-4 6z"></path>
            <path d="M5 22h14"></path>
          </svg>
        `
      }
    };
  }
};
</script>

<style scoped>
.about-page {
  --text: #0f172a;
  --muted: #475569;
  --surface: #ffffff;
  --surface-2: #f7f9fc;
  --primary: #0d6efd;
  --primary-600: #0b5ed7;
}

/* Intro/Hero */
.about.hero {
  max-width: 980px;
  margin: 0 auto;
  padding: 48px 20px 18px;
  text-align: center;
  color: var(--text);
}
.about.hero h1 {
  margin: 0 0 10px;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}
.lead {
  margin: 0 auto;
  max-width: 820px;
  color: var(--muted);
  line-height: 1.7;
}

/* Sections */
.section {
  padding: 40px 20px;
}

/* Mission & Vision */
.mv .section-title,
.values .section-title {
  text-align: center;
  margin: 0 auto 18px;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
}

.mv-grid {
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.mv-card {
  background: var(--surface);
  border: 1px solid rgba(2,12,27,0.06);
  border-radius: 12px;
  padding: 18px 16px;
  box-shadow: 0 8px 20px rgba(2,12,27,0.06);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.mv-card:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(2,12,27,0.12); }
.mv-card h3 {
  margin: 8px 0 6px;
  font-size: 1.1rem;
}
.mv-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}
.mv-icon {
  width: 42px;
  height: 42px;
  color: var(--primary);
}

/* Core Values */
.values {
  background: var(--surface-2);
}
.values-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  padding-top: 6px;
}
.value-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: var(--surface);
  border: 1px solid rgba(2,12,27,0.06);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(2,12,27,0.06);
  animation: fadeUp .36s ease both;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.value-card:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(2,12,27,0.12); }
.value-icon {
  width: 36px;
  height: 36px;
  color: var(--primary);
  flex: 0 0 auto;
}
.value-title {
  margin: 2px 0 4px;
  font-size: 1.02rem;
}
.value-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

/* Stats strip */
.stats {
  background: linear-gradient(135deg, var(--primary), var(--primary-600));
  color: #fff;
}
.stats-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 28px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  text-align: center;
}
.stat strong {
  display: block;
  font-size: 1.2rem;
}
.stat span {
  color: #e2e8f0;
  font-size: 0.95rem;
}

/* Animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .value-card { animation: none; }
  .mv-card, .value-card { transition: none; }
}
</style>