<template>
  <div 
    class="floating-actions"
    :style="rootVars"
    aria-label="Floating actions"
  >
    <!-- WhatsApp -->
    <a
      v-if="showWhatsApp && whatsapp"
      class="fab fab-whatsapp"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img
        :src="whatsAppIcon"
        alt="WhatsApp"
        width="32"
        height="32"
        loading="lazy"
      />
    </a>

    <!-- Call -->
    <a
      v-if="showCall && phone"
      class="fab fab-call"
      :href="`tel:${normalizedPhone}`"
      aria-label="Call us"
      title="Call us"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2c-3.2-.35-6.23-1.86-8.57-4.2s-3.85-5.37-4.2-8.57A2 2 0 0 1 9 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.11 6.11l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>

    <!-- Back to Top -->
    <button
      v-if="showBackToTop"
      class="fab fab-top"
      v-show="isBeyondThreshold"
      @click="scrollToTop"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "FloatingActions",
  props: {
    phone: String,
    whatsapp: String,
    whatsappText: {
      type: String,
      default: "Hi! I'd like to learn more about your services."
    },
    showBackToTop: { default: true },
    showCall: { default: true },
    showWhatsApp: { default: true },

    threshold: { type: Number, default: 300 },
    right: { type: Number, default: 20 },
    edge: { type: Number, default: 20 },
    size: { type: Number, default: 52 },
    gap: { type: Number, default: 12 },

    whatsAppIcon: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/733/733585.png"
    }
  },

  data() {
    return {
      isBeyondThreshold: false
    };
  },

  computed: {
    normalizedPhone() {
      return this.phone;
    },
    whatsappUrl() {
      const text = encodeURIComponent(this.whatsappText);
      return `https://wa.me/${this.whatsapp}?text=${text}`;
    },
    rootVars() {
      return {
        "--fab-right": `${this.right}px`,
        "--fab-edge": `${this.edge}px`,
        "--fab-size": `${this.size}px`,
        "--fab-gap": `${this.gap}px`
      };
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.isBeyondThreshold = window.scrollY > this.threshold;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.floating-actions {
  position: fixed;
  right: var(--fab-right);
  bottom: 0;
  z-index: 1000;
}

/* Base style */
.fab {
  position: fixed;
  right: var(--fab-right);
  width: var(--fab-size);
  height: var(--fab-size);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.15s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,.25);
}

/* Order: WhatsApp → Call → Back-to-top */
.fab-whatsapp {
  bottom: var(--fab-edge);
  background: #25d366;
}

.fab-call {
  bottom: calc(var(--fab-edge) + var(--fab-size) + var(--fab-gap));
  background: #0d6efd;
}

.fab-top {
  bottom: calc(var(--fab-edge) + (var(--fab-size) + var(--fab-gap)) * 2);
  background: #333;
}

.fab:hover {
  transform: translateY(-3px);
}
</style>
