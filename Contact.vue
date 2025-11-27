<template>
  <section class="contact" aria-labelledby="contact-heading">
    <h1 id="contact-heading">Contact Us</h1>
    <p>We’d love to hear from you! Fill out the form below:</p>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm" novalidate>
      <label class="sr-only" for="name">Your Name</label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        v-model.trim="name"
        required
        autocomplete="name"
      />

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

      <label class="sr-only" for="message">Your Message</label>
      <textarea
        id="message"
        placeholder="Your Message"
        v-model.trim="message"
        required
        rows="6"
      ></textarea>

      <button type="submit" class="primary-btn">Send Message</button>
    </form>

    <!-- FAQ Section -->
    <div class="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>

      <div
        v-for="(faq, index) in faqs"
        :key="faq.question"
        class="faq-item"
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
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      faqs: [
        {
          question: 'How do I request an estimate?',
          answer: 'Click the "Get a Free Estimate" button and fill out the form.',
          open: false
        },
        {
          question: 'How long does it take to get a response?',
          answer: 'We usually respond within 24 hours.',
          open: false
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, all initial consultations are free.',
          open: false
        }
      ]
    };
  },
  methods: {
    submitForm() {
      // Replace with real submission logic as needed
      alert(`Message sent by ${this.name}`);
    },
    toggle(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
}

.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0);
  white-space: nowrap; border: 0;
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
</style>