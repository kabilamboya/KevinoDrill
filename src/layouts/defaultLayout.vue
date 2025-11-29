<template>
  <div class="layout">

    <!-- NAVBAR triggers openEstimate() -->
    <Navbar @open-estimate="openEstimate" />

    <main>
      <slot />
    </main>

    <Footer />

    <!-- Floating Actions -->
    <FloatingActions
      phone="+254722146077"
      whatsapp="254721957386"
    />
  </div>
</template>

<script setup>
import { inject } from "vue"
import Navbar from "@/components/navBar.vue"
import Footer from "@/components/footer.vue"
import FloatingActions from "@/components/floatingActions.vue"

// RECEIVE openEstimate from App.vue
const openEstimate = inject("openEstimate")
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
