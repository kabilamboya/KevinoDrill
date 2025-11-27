<template>
  <header class="site-header" :class="{ 'has-shadow': scrolled }">
    <nav class="navbar" role="navigation" aria-label="Main Navigation">

      <!-- BRAND -->
      <div class="brand">
        <router-link to="/" class="brand-link" aria-label="Go to Home">
          <img
            src="/kevinlogo.jpg"
            alt="Kevino Drilling Logo"
            class="brand-logo"
          />
          <span class="brand-text">Kevino Drilling & Construction</span>
        </router-link>
      </div>

      <!-- DESKTOP NAV -->
      <ul class="nav-links desktop" role="menubar">
        <li role="none"><router-link role="menuitem" to="/" exact-active-class="active">Home</router-link></li>
        <li role="none"><router-link role="menuitem" to="/about" active-class="active">About</router-link></li>
        <li role="none"><router-link role="menuitem" to="/services" active-class="active">Services</router-link></li>
        <li role="none"><router-link role="menuitem" to="/projects" active-class="active">Projects</router-link></li>
        <li role="none"><router-link role="menuitem" to="/contact" active-class="active">Contact</router-link></li>
      </ul>

      <!-- DESKTOP CTA -->
      <button class="cta desktop" @click="$emit('openEstimate')" aria-label="Get a Free Estimate">
        Get a Free Estimate
      </button>

      <!-- MOBILE BURGER -->
      <button
        class="hamburger"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="toggleMenu"
      >
        <span class="bar" /><span class="bar" /><span class="bar" />
        <span class="sr-only">Toggle menu</span>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div v-show="menuOpen" id="mobile-menu" class="mobile-menu" @keydown.esc.prevent="closeMenu">
        <ul class="nav-links mobile" role="menu">
          <li role="none"><router-link role="menuitem" to="/" exact-active-class="active" @click.native="closeMenu">Home</router-link></li>
          <li role="none"><router-link role="menuitem" to="/about" active-class="active" @click.native="closeMenu">About</router-link></li>
          <li role="none"><router-link role="menuitem" to="/services" active-class="active" @click.native="closeMenu">Services</router-link></li>
          <li role="none"><router-link role="menuitem" to="/projects" active-class="active" @click.native="closeMenu">Projects</router-link></li>
          <li role="none"><router-link role="menuitem" to="/contact" active-class="active" @click.native="closeMenu">Contact</router-link></li>
        </ul>

        <button class="cta mobile" @click="onEstimateClick">Get a Free Estimate</button>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      scrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    $route() {
      this.menuOpen = false;
      document.body.style.overflow = "";
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.style.overflow = this.menuOpen ? "hidden" : "";
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.style.overflow = "";
    },
    onEstimateClick() {
      this.$emit("openEstimate");
      this.closeMenu();
    },
    onScroll() {
      this.scrolled = window.scrollY > 8;
    }
  }
};
</script>

<style scoped>
/* HEADER */
.site-header {
  position: sticky;
  top: 0;
  background: #0a1f3f;
  z-index: 1000;
  transition: box-shadow 0.2s ease;
}
.site-header.has-shadow {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* NAV GRID */
.navbar {
  max-width: 1250px;
  margin: auto;
  padding: 14px 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
}

/* BRAND */
.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #fff;
}
.brand-logo {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  object-fit: cover;
}
.brand-text {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.3px;
}

/* DESKTOP NAV LINKS */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-links.desktop {
  display: none;
}
.nav-links a {
  color: #ced9f2;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  transition: 0.15s ease;
}
.nav-links a:hover {
  background: rgba(255, 255, 255, 0.08);
}
.nav-links a.active {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

/* CTA BUTTON */
.cta {
  background: #ff7f32;
  color: #0f172a;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
}
.cta:hover {
  transform: translateY(-2px);
}
.cta.desktop {
  display: none;
}

/* BURGER */
.hamburger {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
}
.bar {
  width: 20px;
  height: 2px;
  background: #fff;
  margin: 3px 0;
}

/* MOBILE MENU */
.mobile-menu {
  background: #0a1f3f;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.nav-links.mobile {
  padding: 12px;
  display: grid;
  gap: 4px;
}

/* SLIDE ANIMATION */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.22s ease, opacity 0.18s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 420px;
  opacity: 1;
}

/* DESKTOP */
@media (min-width: 900px) {
  .nav-links.desktop {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .cta.desktop {
    display: inline-flex;
  }
  .hamburger {
    display: none;
  }
}
</style>
