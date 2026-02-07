<template>
  <section class="contact" aria-labelledby="contact-heading">
    <h1 id="contact-heading">Contact Us</h1>
    <p>We’d love to hear from you! Fill out the form below:</p>

    <div class="contact-grid">
      <div class="contact-image">
        <img src="@/assets/images/teamlead.jpg" alt="Team lead" loading="lazy" />
      </div>

      <!-- Contact Form -->
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="submitForm" novalidate>
      <input type="hidden" name="form-name" value="contact" />
      <p class="sr-only">
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <label class="sr-only" for="name">Your Name</label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        v-model.trim="name"
        required
        autocomplete="name"
      />
      <p v-if="errors.name" class="error-text">{{ errors.name }}</p>

      <label class="sr-only" for="email">Your Email</label>
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        v-model.trim="email"
        required
        autocomplete="email"
        inputmode="email"
      />
      <p v-if="errors.email" class="error-text">{{ errors.email }}</p>

      <label class="sr-only" for="phone">Your Phone</label>
      <input
        id="phone"
        type="tel"
        placeholder="+2547XXXXXXXX"
        v-model.trim="phone"
        required
        autocomplete="tel"
        inputmode="tel"
      />
      <p v-if="errors.phone" class="error-text">{{ errors.phone }}</p>

      <label class="sr-only" for="message">Your Message</label>
      <textarea
        id="message"
        placeholder="Your Message"
        v-model.trim="message"
        required
        rows="6"
      ></textarea>
      <p v-if="errors.message" class="error-text">{{ errors.message }}</p>

        <button type="submit" class="primary-btn">Send Message</button>
      </form>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>

      <div
        v-for="(faq, index) in faqs"
        :key="faq.question"
        class="faq-item" :id="faq.id"
      >
        <button
          @click="toggle(index)"
          class="faq-question"
          :aria-expanded="faq.open ? 'true' : 'false'"
          :aria-controls="`faq-answer-${index}`"
          :id="`faq-question-${index}`"
        >
          <span>{{ faq.question }}</span>
          <span aria-hidden="true">{{ faq.open ? '−' : '+' }}</span>
        </button>
        <p
          v-if="faq.open"
          class="faq-answer"
          :id="`faq-answer-${index}`"
          :aria-labelledby="`faq-question-${index}`"
        >
          {{ faq.answer }}
        </p>
      </div>
    </div>

    <!-- WhatsApp Chat Icon -->
    <a
      class="whatsapp-chat"
      href="https://wa.me/254700000000?text=Hi%20there!%20I%27d%20like%20to%20chat%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        width="32"
        height="32"
        loading="lazy"
      />
    </a>
  </section>
</template>

<script>
import { inject } from "vue"

export default {
  name: "ContactPage",
  inject: ["showToast"],

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      displayEmail: "info@kevinodriling.co.ke",
      errors: { name: "", email: "", phone: "", message: "" },
      faqs: [
        {
          question: "How do I request a free estimate?",
          id: "faq-pricing",
          answer:
            "You can request a free estimate by clicking the \"Get a Free Estimate\" button or contacting us through WhatsApp or our phone number.",
          open: false
        },
        {
          question: 'Which areas do you serve?',
          id: 'faq-survey',
          answer: 'We provide drilling and water services across Kenya, including urban, rural, and remote regions.',
          open: false
        },
        {
          question: 'How long does it take to get a response?',
          id: 'faq-timeline',
          answer: 'We typically respond within a few hours during business hours, and within 24 hours for messages sent after hours.',
          open: false
        },
        {
          question: 'Do you offer site assessments?',
          id: 'faq-drilling',
          answer: 'Yes. We provide free initial consultation and can arrange an on-site assessment depending on the project requirements.',
          open: false
        },
        {
          question: 'What payment options do you accept?',
          id: 'faq-payments',
          answer: 'We accept M-Pesa, bank transfers, and flexible project-based payment arrangements.',
          open: false
        },
        {
          question: 'Are you licensed and insured?',
          id: 'faq-licensed',
          answer: 'Yes. Our team is fully licensed and insured to operate drilling and water service equipment in Kenya.',
          open: false
        },
        {
          question: 'Where can I find your privacy policy?',
          id: 'faq-privacy',
          answer: 'You can view our Privacy Policy at the footer of this website. It explains how we collect and protect your information.',
          open: false
        },
        {
          question: 'Where can I find your terms and conditions?',
          id: 'faq-terms',
          answer: 'Our Terms & Conditions are available in the website footer and outline service rules, warranties, and usage policies.',
          open: false
        }
      ]
    };
  },
  mounted() {
    const hash = window.location.hash.replace("#", "")
    if (!hash) return
    const index = this.faqs.findIndex((f) => f.id === hash)
    if (index >= 0) {
      this.faqs = this.faqs.map((f, i) => ({ ...f, open: i == index }))
      this.$nextTick(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  },

  watch: {
    "$route.hash"(hash) {
      const id = (hash || "").replace("#", "")
      if (!id) return
      const index = this.faqs.findIndex((f) => f.id === id)
      if (index >= 0) {
        this.faqs = this.faqs.map((f, i) => ({ ...f, open: i == index }))
        this.$nextTick(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        })
      }
    },
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    },

    normalizePhone(raw) {
      const trimmed = (raw || "").replace(/\s+/g, "")
      if (!trimmed) return ""
      if (trimmed.startsWith("+")) return trimmed
      if (trimmed.startsWith("0")) return "+254" + trimmed.slice(1)
      if (trimmed.startsWith("254")) return "+" + trimmed
      return trimmed
    },

    validateForm() {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
      const phoneNorm = this.normalizePhone(this.phone)
      const phoneOk = /^\+2547\d{8}$/.test(phoneNorm)

      this.errors.name = this.name ? "" : "Please enter your name."
      this.errors.email = emailOk ? "" : "Please enter a valid email."
      this.errors.phone = phoneOk ? "" : "Use format +2547XXXXXXXX."
      this.errors.message = this.message ? "" : "Please enter a message."

      return emailOk && phoneOk && !this.errors.name && !this.errors.message
    },

    async submitForm() {
      if (!this.validateForm()) return
      const normalizedPhone = this.normalizePhone(this.phone)
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "contact",
            name: this.name,
            email: this.email,
            phone: normalizedPhone,
            message: this.message,
          }),
        })
        this.showToast?.("Thanks for contacting us! We will be in touch with you shortly.")
        this.name = ""
        this.email = ""
        this.phone = ""
        this.message = ""
      } catch (e) {
        this.showToast?.("Sorry, something went wrong. Please try again.")
      }
    },
    toggle(index) {
      this.faqs[index].open = !this.faqs[index].open
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
  margin-top: 12px;
}

.contact-image img {
  width: 100%;
  height: 100%;
  max-height: 460px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 26px rgba(2,12,27,0.12);
}

.contact-email {
  margin-top: 6px;
  color: #004080;
}
.contact-email a {
  color: #004080;
  text-decoration: underline;
}

.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0);
  white-space: nowrap; border: 0;
}

.error-text {
  margin: -4px 0 10px;
  color: #c62828;
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.primary-btn {
  background: #004080; /* Blue */
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.primary-btn:hover {
  background: #ff7f32; /* Orange hover */
}

/* FAQ Styles */
.faq-section {
  margin-top: 40px;
}
.faq-section h2 {
  margin-bottom: 16px;
  color: #004080;
}
.faq-item {
  margin-bottom: 12px;
  scroll-margin-top: 100px;
}
.faq-question {
  width: 100%;
  text-align: left;
  background: #004080;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.faq-question:hover {
  background: #0059b3;
}
.faq-answer {
  padding: 10px;
  background: #f9f9f9;
  border-left: 4px solid #ff7f32;
  margin-top: 8px;
  border-radius: 4px;
}

/* WhatsApp Chat Icon */
.whatsapp-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25d366;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.whatsapp-chat img {
  width: 32px;
  height: 32px;
  display: block;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-image img {
    max-height: 360px;
  }
}
</style>
