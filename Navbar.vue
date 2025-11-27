<template>
  <header class="site-header" :class="{ 'has-shadow': scrolled }">
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <!-- Brand/Logo -->
      <div class="brand">
        <router-link to="/" class="brand-link" aria-label="Go to home">
          <slot name="logo">
            <span class="brand-mark" aria-hidden="true">💧</span>
            <span class="brand-text">{{ brand }}</span>
          </slot>
        </router-link>
      </div>

      <!-- Desktop nav -->
      <ul class="nav-links desktop" role="menubar">
        <li role="none"><router-link role="menuitem" to="/" exact-active-class="active">Home</router-link></li>
        <li role="none"><router-link role="menuitem" to="/services" active-class="active">Services</router-link></li>
        <li role="none"><router-link role="menuitem" to="/projects" active-class="active">Projects</router-link></li>
        <li role="none"><router-link role="menuitem" to="/about" active-class="active">About</router-link></li>
        <li role="none"><router-link role="menuitem" to="/contact" active-class="active">Contact</router-link></li>
      </ul>

      <!-- CTA -->
      <button class="cta desktop" @click="$emit('openEstimate')" aria-label="Get an estimate">
        Get an Estimate
      </button>

      <!-- Mobile hamburger -->
      <button
        class="hamburger"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="toggleMenu"
      >
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
        <span class="sr-only">Toggle menu</span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide">
      <div
        v-show="menuOpen"
        id="mobile-menu"
        class="mobile-menu"
        @keydown.esc.prevent="closeMenu"
      >
        <ul class="nav-links mobile" role="menu">
          <li role="none"><router-link role="menuitem" to="/" exact-active-class="active" @click.native="closeMenu">Home</router-link></li>
          <li role="none"><router-link role="menuitem" to="/services" active-class="active" @click.native="closeMenu">Services</router-link></li>
          <li role="none"><router-link role="menuitem" to="/projects" active-class="active" @click.native="closeMenu">Projects</router-link></li>
          <li role="none"><router-link role="menuitem" to="/about" active-class="active" @click.native="closeMenu">About</router-link></li>
          <li role="none"><router-link role="menuitem" to="/contact" active-class="active" @click.native="closeMenu">Contact</router-link></li>
        </ul>
        <button class="cta mobile" @click="onEstimateClick">Get an Estimate</button>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    brand: { type: String, default: 'A B C D — X Y Z' }
  },
  data() {
    return {
      menuOpen: false,
      scrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  watch: {
    $route() {
      // Close mobile menu when route changes
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.style.overflow = '';
    },
    onEstimateClick() {
      this.$emit('openEstimate');
      this.closeMenu();
    },
    onScroll() {
      this.scrolled = window.scrollY > 8;
    }
  }
};
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #0a1f3f; /* deep blue */
  color: #fff;
  transition: box-shadow .2s ease, background .2s ease;
}
.site-header.has-shadow {
  box-shadow: 0 6px 20px rgba(0,0,0,.2);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
}

/* Brand */
.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
}
.brand-mark {
  width: 36px; height: 36px;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #0d6efd, #4aa3ff);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(13,110,253,.25);
}
.brand-text {
  font-weight: 700;
  letter-spacing: .2px;
}

/* Links */
.nav-links {
  list-style: none;
  padding: 0; margin: 0;
}
.nav-links.desktop {
  display: none;
}
.nav-links a {
  color: #e6eefc;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background .15s ease, color .15s ease;
}
.nav-links a:hover {
  background: rgba(255,255,255,0.08);
}
.nav-links a.active {
  color: #fff;
  background: rgba(255,255,255,0.16);
}

/* CTA */
.cta {
  border: 1px solid transparent;
  background: #ff7f32; /* accent */
  color: #0f172a;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .15s ease, filter .15s ease;
}
.cta:hover { transform: translateY(-1px); filter: brightness(.98); }
.cta.desktop { display: none; }

/* Hamburger */
.hamburger {
  grid-column: 3;
  width: 44px; height: 44px;
  display: inline-flex;
  align-items: center; justify-content: center;
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 10px;
  cursor: pointer;
  transition: background .15s ease, transform .15s ease;
}
.hamburger:hover {
  background: rgba(255,255,255,.08);
}
.bar {
  width: 20px; height: 2px; background: currentColor;
  display: block; margin: 2px 0;
}

/* Mobile menu */
.mobile-menu {
  background: #0a1f3f;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.nav-links.mobile {
  display: grid;
  gap: 2px;
  padding: 10px 12px;
}
.nav-links.mobile a {
  padding: 12px 10px;
  border-radius: 8px;
}
.cta.mobile {
  margin: 10px 12px 14px;
  width: calc(100% - 24px);
}

/* Animation */
.slide-enter-active, .slide-leave-active {
  transition: max-height .22s ease, opacity .2s ease;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  max-height: 420px; /* enough for menu items + CTA */
  opacity: 1;
}

/* Desktop breakpoint */
@media (min-width: 900px) {
  .navbar {
    grid-template-columns: auto 1fr auto;
  }
  .nav-links.desktop { display: flex; gap: 8px; justify-content: center; }
  .cta.desktop { display: inline-flex; align-items: center; }
  .hamburger { display: none; }
  .mobile-menu { display: none; }
}

/* A11y utility */
.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
}
</style>