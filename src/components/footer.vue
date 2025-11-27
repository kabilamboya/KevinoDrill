<template>
  <footer>
    <div class="footer-container">
      <!-- Contact Info -->
      <div class="footer-column">
        <h3>Contact Info</h3>
        <p>P.O BOX 82-40100 Paw Akuche</p>
        <p>Along Kisumu Rd, Opp. Torly’s Hotel</p>
        <p>+254 722 146 077 / +254 721 957 386</p>
        <p><a href="mailto:info@kevinodrilling.co.ke">info@kevinodrilling.co.ke</a></p>
      </div>

      <!-- Quick Links -->
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>

      <!-- Other Services -->
      <div class="footer-column">
        <h3>Other Services</h3>
        <ul>
          <li>Rehabilitation of boreholes</li>
          <li>Building and Construction</li>
          <li>Civil works</li>
        </ul>
      </div>
    </div>

    <!-- Social Media -->
    <div class="footer-social">
      <a href="#" aria-label="TikTok"><font-awesome-icon :icon="['fab','tiktok']" /></a>
      <a href="#" aria-label="Facebook"><font-awesome-icon :icon="['fab','facebook-f']" /></a>
      <a href="#" aria-label="YouTube"><font-awesome-icon :icon="['fab','youtube']" /></a>
      <a href="https://wa.me/254722146077" aria-label="WhatsApp"><font-awesome-icon :icon="['fab','whatsapp']" /></a>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Kevino Drilling & Construction Company Limited</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1 1 250px;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.footer-social a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.footer-social a:hover {
  color: var(--mint);
}
</style>
