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
        aria-hidden="true"
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
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FloatingActions',
  props: {
    phone: { type: String, default: '' },               // E.164 recommended, e.g. +254700000000
    whatsapp: { type: String, default: '' },            // WA number without +, e.g. 254700000000
    whatsappText: { type: String, default: "Hi! I'd like to learn more about your services." },
    showBackToTop: { type: Boolean, default: true },
    showCall: { type: Boolean, default: true },
    showWhatsApp: { type: Boolean, default: true },
    threshold: { type: Number, default: 300 },          // px to show back-to-top
    right: { type: Number, default: 20 },               // px from right
    edge: { type: Number, default: 20 },                // px from bottom for first button
    size: { type: Number, default: 52 },                // button size in px
    gap: { type: Number, default: 12 },                 // gap between buttons in px
    whatsAppIcon: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/733/733585.png'
    }
  },
  data() {
    return {
      isBeyondThreshold: false
    };
  },
  computed: {
    normalizedPhone() {
      // tel: can accept + or local formats; prefer E.164
      return this.phone;
    },
    whatsappUrl() {
      const text = encodeURIComponent(this.whatsappText);
      // wa.me requires number without + and with country code
      return `https://wa.me/${this.whatsapp}?text=${text}`;
    },
    rootVars() {
      // Map props to CSS variables for layout control
      return {
        '--fab-right': `${this.right}px`,
        '--fab-edge': `${this.edge}px`,
        '--fab-size': `${this.size}px`,
        '--fab-gap': `${this.gap}px`
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  },
  beforeUnmount() {
    // If using Vue 2, change to beforeDestroy
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isBeyondThreshold = window.scrollY > this.threshold;
    },
    scrollToTop() {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>

<style scoped>
.floating-actions {
  position: fixed;
  right: var(--fab-right);
  bottom: 0; /* children control their own bottom offsets */
  z-index: 1000;
}

/* Base FAB style */
.fab {
  position: fixed;
  right: var(--fab-right);
  width: var(--fab-size);
  height: var(--fab-size);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  transition: transform .15s ease, opacity .2s ease, background .2s ease;
}

/* Stack from bottom up: WhatsApp (0), Call (1), Top (2) */
.fab-whatsapp { bottom: var(--fab-edge); background: #25d366; }
.fab-call     { bottom: calc(var(--fab-edge) + var(--fab-size) + var(--fab-gap)); background: #0d6efd; color: #fff; }
.fab-top      { bottom: calc(var(--fab-edge) + (var(--fab-size) + var(--fab-gap)) * 2); background: #333; color: #fff; }

.fab:hover { transform: translateY(-2px); }

.fab-whatsapp img {
  width: 32px;
  height: 32px;
  display: block;
}

.fab-call:hover { background: #0b5ed7; }
.fab-top:hover  { background: #1f1f1f; }

/* Smooth show/hide for back-to-top when using v-show */
.fab-top {
  opacity: 1;
}
.fab-top[style*="display: none"] {
  /* v-show sets display:none; no animation needed when hidden */
}
</style>