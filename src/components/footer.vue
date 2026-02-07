<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-wrap">

  <!-- Brand / About -->
  <section class="footer-col brand" aria-labelledby="footer-brand">
    <div class="brand-row">
      <slot name="logo">
        <span class="brand-mark" aria-hidden="true">💧</span>
      </slot>

      <div class="brand-meta">
        <p class="brand-name">{{ companyName }}</p>
        <p class="brand-tag">Sustainable water solutions you can trust.</p>
      </div>
    </div>
  </section>


  <!-- FAQs -->
  <nav class="footer-col" aria-labelledby="footer-faqs">
    <h2 id="footer-faqs" class="footer-title">FAQs</h2>
    <ul class="footer-list" role="list">
      <li><router-link to="/contact#faq-pricing">Free Estimate</router-link></li>
      <li><router-link to="/contact#faq-survey">Service Areas</router-link></li>
      <li><router-link to="/contact#faq-timeline">Response Time</router-link></li>
      <li><router-link to="/contact#faq-drilling">Site Assessments</router-link></li>
      <li><router-link to="/contact#faq-payments">Payments</router-link></li>
      <li><router-link to="/contact#faq-licensed">Licensed & Insured</router-link></li>
      <li><router-link to="/contact#faq-privacy">Privacy Policy</router-link></li>
      <li><router-link to="/contact#faq-terms">Terms & Conditions</router-link></li>
    </ul>
  </nav>


  <!-- Combined Projects + Services Column -->
  <nav class="footer-col" aria-labelledby="footer-projects">
    <h2 id="footer-projects" class="footer-title">Featured Projects</h2>
    <ul class="footer-list" role="list">
      <li><router-link to="/projects#steel-tank">Steel Tank Fabrication</router-link></li>
      <li><router-link to="/projects#solar-pump">Solar Pump Installation</router-link></li>
      <li><router-link to="/projects">View All Projects</router-link></li>
    </ul>

    <h2 id="footer-services" class="footer-title sub">Top Services</h2>
    <ul class="footer-list" role="list">
      <li><router-link to="/services#testing">Yield Testing</router-link></li>
      <li><router-link to="/services#rehabilitation">Borehole Rehabilitation</router-link></li>
      <li><router-link to="/services#construction">Construction & Civil Works</router-link></li>
    </ul>
  </nav>


  <!-- Contact -->
  <section class="footer-col" aria-labelledby="footer-contact">
    <h2 id="footer-contact" class="footer-title">Contact</h2>

    <address class="contact" itemscope itemtype="https://schema.org/Organization">
      <meta itemprop="name" :content="companyName" />

      <p class="contact-line">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0zm-9 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        <span class="office-line" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
          <span class="office-label">OYUGIS OFFICE</span>
          <span itemprop="addressLocality">Kisumu - Kisii Road, Opp. Torley's Hotel</span>
        </span>
      </p>
      <p class="contact-line">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0zm-9 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        <span class="office-line" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
          <span class="office-label">KONDELE OFFICE</span>
          <span itemprop="addressLocality">Kondele - Kibos Road, Sansport Door No. 4</span>
        </span>
      </p>

      <p class="contact-line">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M22 16.92v3a2 2 0 0 1-2.18 2C9.48 21.25 2.75 14.52 2.08 4.18A2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.09.74.24 1.47.45 2.17a2 2 0 0 1-.45 2.11L8.59 9.47a14 14 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.7.21 1.43.36 2.17.45A2 2 0 0 1 22 16.92z"/>
        </svg>
        <a :href="`tel:${mainPhone}`" itemprop="telephone">{{ mainPhone }}</a>
      </p>

      <p class="contact-line">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6a2 2 0 0 1 2-2Zm0 5.2 8 5 8-5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.2Z"/>
        </svg>
        <a :href="`mailto:${email}`" itemprop="email">{{ email }}</a>
      </p>

      <div class="socials">
        <a
          href="#"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        ><font-awesome-icon :icon="['fab','tiktok']" /></a>
        <a
          href="#"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        ><font-awesome-icon :icon="['fab','facebook-f']" /></a>
        <a
          href="#"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        ><font-awesome-icon :icon="['fab','instagram']" /></a>
        <a
          href="#"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        ><font-awesome-icon :icon="['fab','youtube']" /></a>
        <a
          href="#"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        ><font-awesome-icon :icon="['fab','linkedin-in']" /></a>
      </div>
    </address>
  </section>
</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    companyName: { type: String, default: "Kevino Drilling & Construction Company Ltd" },
    mainPhone: { type: String, default: "+254722146077" },
    secondaryPhone: { type: String, default: "+254721957386" },
    email: { type: String, default: "info@kevinodrilling.co.ke" },
    whatsappText: { type: String, default: "Hi! I’d like to know more about your services." }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  }
};
</script>

<style scoped>
/* --- (SAME optimized styling from File 1, unchanged) --- */

.site-footer {
  background: #0a1f3f;
  color: #e6eefc;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.footer-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.footer-col {
  min-width: 0;
}

.footer-title {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #fff;
}

.footer-title.sub {
  margin-top: 18px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  width: 40px; height: 40px;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #0d6efd, #4aa3ff);
  border-radius: 10px;
  font-size: 22px;
  color: #fff;
  box-shadow: 0 6px 20px rgba(13,110,253,.25);
}

.brand-name {
  margin: 0;
  font-weight: bold;
  color: #fff;
}

.brand-tag {
  margin: 0;
  font-size: 0.95rem;
  color: #c7d7f7;
}

/* Lists */
.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.footer-list a {
  color: #e6eefc;
  text-decoration: none;
  opacity: 0.95;
  transition: opacity 0.2s, color 0.2s;
}

.footer-list a:hover {
  opacity: 1;
  color: #fff;
  text-decoration: underline;
}

/* Contact */
.contact-line {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 6px 0;
  color: #d8e4fb;
}

.office-line {
  display: grid;
  gap: 2px;
}

.office-label {
  font-weight: 700;
  color: #ffffff;
}

/* Socials */
.socials {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.socials a {
  background: rgba(255,255,255,0.1);
  width: 34px; height: 34px;
  display: grid; place-items: center;
  border-radius: 8px;
  color: #fff;
  transition: 0.2s;
}

.socials a:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

/* Bottom Bar */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #c7d7f7;
}

.bottom-links {
  list-style: none;
  display: flex;
  gap: 12px;
}
</style>
