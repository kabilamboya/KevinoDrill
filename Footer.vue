<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-wrap">
      <!-- Brand / About -->
      <section class="footer-col brand" aria-labelledby="footer-brand">
        <h2 id="footer-brand" class="sr-only">About</h2>
        <div class="brand-row">
          <!-- Optional logo slot -->
          <slot name="logo">
            <!-- Replace with your logo image if you have one -->
            <span class="brand-mark" aria-hidden="true">💧</span>
          </slot>
          <div class="brand-meta">
            <p class="brand-name">{{ companyName }}</p>
            <p class="brand-tag">Sustainable water solutions you can trust.</p>
          </div>
        </div>
        <p class="brand-desc">
          We deliver end-to-end hydro-services—from surveys and drilling to pump installations,
          testing, and maintenance—tailored to your site and budget.
        </p>
      </section>

      <!-- Quick Links -->
      <nav class="footer-col" aria-labelledby="footer-links">
        <h2 id="footer-links" class="footer-title">Quick Links</h2>
        <ul class="footer-list" role="list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <!-- Policies -->
      <nav class="footer-col" aria-labelledby="footer-legal">
        <h2 id="footer-legal" class="footer-title">Legal</h2>
        <ul class="footer-list" role="list">
          <li><router-link to="/privacy">Privacy Policy</router-link></li>
          <li><router-link to="/terms">Terms of Service</router-link></li>
          <li><router-link to="/cookies">Cookie Policy</router-link></li>
        </ul>
      </nav>

      <!-- Contact -->
      <section class="footer-col" aria-labelledby="footer-contact">
        <h2 id="footer-contact" class="footer-title">Contact</h2>
        <address class="contact" itemscope itemtype="https://schema.org/Organization">
          <meta itemprop="name" :content="companyName" />
          <p class="contact-line">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0zm-9 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
              <span itemprop="streetAddress">123 Water Way</span>,
              <span itemprop="addressLocality">Nairobi</span>,
              <span itemprop="addressCountry">KE</span>
            </span>
          </p>
          <p class="contact-line">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M22 16.92v3a2 2 0 0 1-2.18 2C9.48 21.25 2.75 14.52 2.08 4.18A2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.09.74.24 1.47.45 2.17a2 2 0 0 1-.45 2.11L8.59 9.47a14 14 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.7.21 1.43.36 2.17.45A2 2 0 0 1 22 16.92z"/></svg>
            <a :href="`tel:${phone}`" itemprop="telephone">{{ displayPhone }}</a>
          </p>
          <p class="contact-line">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6a2 2 0 0 1 2-2Zm0 5.2 8 5 8-5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.2Z"/></svg>
            <a :href="`mailto:${email}`" itemprop="email">{{ email }}</a>
          </p>

          <div class="socials">
            <a v-if="whatsapp" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="22" height="22" alt="WhatsApp" />
            </a>
            <a v-if="facebook" :href="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3C10.5 7.7 11.9 6 14.7 6c1.3 0 2.6.2 2.6.2v2.8H16c-1.3 0-1.8.8-1.8 1.7V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12"/></svg>
            </a>
            <a v-if="instagram" :href="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm6.5-.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.5 6.75Z"/><circle cx="12" cy="12" r="3.5"/></svg>
            </a>
            <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.1V24h-4v-7.1c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.9V24h-4V8z"/></svg>
            </a>
          </div>
        </address>
      </section>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p>&copy; {{ year }} {{ companyName }}. All rights reserved.</p>
      <ul class="bottom-links" role="list">
        <li><router-link to="/privacy">Privacy</router-link></li>
        <li><router-link to="/terms">Terms</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    companyName: { type: String, default: 'Company Name' },
    phone: { type: String, default: '+254700000000' }, // E.164 preferred
    email: { type: String, default: 'info@example.com' },
    whatsapp: { type: String, default: '254700000000' }, // without +
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    whatsappText: { type: String, default: 'Hi! I’d like to know more about your services.' }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    displayPhone() {
      // Simple display formatting; adjust as needed
      return this.phone.startsWith('+') ? this.phone : `+${this.phone}`;
    },
    whatsappUrl() {
      return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappText)}`;
    }
  }
};
</script>

<style scoped>
.site-footer {
  background: #0a1f3f; /* Deep blue */
  color: #e6eefc;
  border-top: 1px solid rgba(255,255,255,0.08);
}

/* Layout */
.footer-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

/* Columns */
.footer-col {
  min-width: 0;
}
.footer-title {
  margin: 0 0 10px;
  font-size: 1rem;
  color: #ffffff;
}

/* Brand */
.brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-mark {
  width: 40px; height: 40px;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #0d6efd, #4aa3ff);
  color: #fff; border-radius: 10px;
  font-size: 22px;
  box-shadow: 0 6px 20px rgba(13,110,253,.25);
}
.brand-name {
  margin: 0;
  font-weight: 700;
  color: #fff;
}
.brand-tag {
  margin: 0;
  color: #c7d7f7;
  font-size: 0.95rem;
}
.brand-desc {
  margin-top: 10px;
  color: #c7d7f7;
  line-height: 1.6;
}

/* Lists */
.footer-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}
.footer-list a,
.bottom-links a {
  color: #e6eefc;
  text-decoration: none;
  opacity: 0.95;
  transition: color .2s ease, opacity .2s ease;
}
.footer-list a:hover,
.bottom-links a:hover {
  color: #ffffff;
  opacity: 1;
  text-decoration: underline;
}

/* Contact */
.contact {
  font-style: normal;
}
.contact-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
  color: #d8e4fb;
}
.contact-line a {
  color: inherit;
  text-decoration: none;
}
.contact-line a:hover {
  text-decoration: underline;
}

/* Socials */
.socials {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.socials a {
  width: 34px; height: 34px;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  color: #fff;
  transition: transform .15s ease, background .2s ease, opacity .2s ease;
}
.socials a:hover {
  background: rgba(255,255,255,0.18);
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 18px;
  border-top: 1px solid rgba(255,255,255,0.08);
  max-width: 1200px;
  margin: 0 auto;
  color: #c7d7f7;
  font-size: 0.95rem;
}
.bottom-links {
  list-style: none;
  display: flex;
  gap: 12px;
  margin: 0; padding: 0;
}

/* A11y utility */
.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
}

@media (max-width: 640px) {
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>