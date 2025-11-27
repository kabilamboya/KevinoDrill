<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="modal-overlay"
      @mousedown.self="close"
      role="presentation"
    >
      <div
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="headingId"
        :aria-describedby="descId"
        ref="dialog"
        @keydown.tab.prevent="handleTab"
        @keydown.esc.prevent="close"
      >
        <h2 :id="headingId">Get a Free Estimate</h2>
        <p :id="descId" class="modal-desc">
          Tell us a bit about your site. We’ll review and get back to you shortly.
        </p>

        <form @submit.prevent="onSubmit" novalidate>
          <!-- Location -->
          <label class="label" for="location">Location</label>
          <input
            id="location"
            ref="firstField"
            type="text"
            placeholder="e.g., Nakuru, Kenya"
            v-model.trim="location"
            :aria-invalid="Boolean(errors.location)"
            :aria-describedby="errors.location ? 'location-error' : null"
            required
            autocomplete="address-level2"
          />
          <small v-if="errors.location" id="location-error" class="error-text">{{ errors.location }}</small>

          <!-- Depth -->
          <label class="label" for="depth">Estimated Depth (m)</label>
          <input
            id="depth"
            type="number"
            placeholder="e.g., 120"
            v-model.number="depth"
            :aria-invalid="Boolean(errors.depth)"
            :aria-describedby="errors.depth ? 'depth-error' : null"
            required
            inputmode="numeric"
            min="10"
            max="1000"
            step="1"
          />
          <small v-if="errors.depth" id="depth-error" class="error-text">{{ errors.depth }}</small>

          <!-- Actions -->
          <div class="actions">
            <button type="submit" class="primary-btn" :disabled="submitting">
              <span v-if="submitting">Submitting…</span>
              <span v-else>Submit</span>
            </button>
            <button @click="close" type="button" class="secondary-btn">Close</button>
          </div>
        </form>

        <!-- Focus sentry for simple trap -->
        <button ref="endSentry" class="sentry" aria-hidden="true" tabindex="0"></button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'EstimateModal',
  props: {
    modelValue: { type: Boolean, default: false } // use v-model
  },
  emits: ['update:modelValue', 'submit'],
  data() {
    return {
      location: '',
      depth: null,
      submitting: false,
      errors: { location: '', depth: '' },
      headingId: 'estimate-heading',
      descId: 'estimate-desc'
    };
  },
  computed: {
    isOpen() {
      return this.modelValue;
    }
  },
  watch: {
    isOpen(open) {
      // Lock background scroll and manage focus
      document.body.style.overflow = open ? 'hidden' : '';
      this.$nextTick(() => {
        if (open && this.$refs.firstField) this.$refs.firstField.focus();
      });
    }
  },
  mounted() {
    if (this.isOpen && this.$refs.firstField) {
      this.$refs.firstField.focus();
      document.body.style.overflow = 'hidden';
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    },
    validate() {
      this.errors = { location: '', depth: '' };
      let valid = true;

      if (!this.location) {
        this.errors.location = 'Please enter the site location.';
        valid = false;
      } else if (this.location.length < 3) {
        this.errors.location = 'Location should be at least 3 characters.';
        valid = false;
      }

      if (this.depth == null || this.depth === '') {
        this.errors.depth = 'Please enter an estimated depth.';
        valid = false;
      } else if (isNaN(this.depth)) {
        this.errors.depth = 'Depth must be a number.';
        valid = false;
      } else if (this.depth < 10 || this.depth > 1000) {
        this.errors.depth = 'Depth should be between 10 and 1000 meters.';
        valid = false;
      }

      return valid;
    },
    async onSubmit() {
      if (!this.validate()) return;

      this.submitting = true;
      try {
        // Simulate async submit; replace with real API if/when available
        await new Promise((r) => setTimeout(r, 900));
        // Emit payload to parent if needed
        this.$emit('submit', {
          location: this.location,
          depth: Number(this.depth)
        });
        // Basic UX feedback
        alert(`Estimate requested for ${this.location}, depth: ${this.depth}m`);
        // Reset and close
        this.location = '';
        this.depth = null;
        this.close();
      } catch (e) {
        alert('Sorry, there was a problem submitting your request. Please try again.');
      } finally {
        this.submitting = false;
      }
    },
    // Very simple focus trap: loop between first input and a hidden end sentry
    handleTab(e) {
      const first = this.$refs.firstField;
      const end = this.$refs.endSentry;
      if (!first || !end) return;

      // If focus is on end sentry and user presses Tab, go back to first
      if (document.activeElement === end) {
        first.focus();
      } else {
        // Move to end sentry so next Tab returns to first
        end.focus();
      }
    }
  }
};
</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 12, 27, 0.6);
  display: grid;
  place-items: center;
  z-index: 999;
  padding: 16px;
}

/* Modal */
.modal {
  background: #fff;
  padding: 22px 20px 20px;
  border-radius: 12px;
  width: 420px;
  max-width: 100%;
  box-shadow: 0 16px 48px rgba(2, 12, 27, 0.3);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  position: relative;
}
.modal h2 {
  margin: 0 0 6px;
  color: #004080;
  font-size: 1.45rem;
  text-align: center;
}
.modal-desc {
  margin: 0 0 14px;
  font-size: 0.95rem;
  color: #475569;
  text-align: center;
}

/* Labels */
.label {
  display: block;
  font-weight: 600;
  margin: 8px 0 6px;
  color: #0f172a;
}

/* Inputs */
input {
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #cfd4dc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:focus {
  border-color: #ff7f32;
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 127, 50, 0.15);
}
[aria-invalid="true"] {
  border-color: #dc3545;
}
.error-text {
  display: block;
  color: #dc3545;
  margin-top: 2px;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* Buttons */
.actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 14px;
}
.primary-btn {
  background: #004080;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  min-width: 120px;
}
.primary-btn:hover { background: #0059b3; transform: translateY(-1px); }
.primary-btn[disabled] { opacity: 0.7; cursor: not-allowed; transform: none; }
.secondary-btn {
  background: #ff7f32;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  min-width: 120px;
}
.secondary-btn:hover { background: #e66a1f; transform: translateY(-1px); }

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Focus trap sentry (invisible) */
.sentry {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: 0;
  overflow: hidden; clip: rect(0, 0, 0, 0);
  border: 0;
  bottom: 10px; right: 10px;
}
</style>