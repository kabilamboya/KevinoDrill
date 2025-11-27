<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Re-emit the event to App.vue -->
    <Navbar @open-estimate="$emit('open-estimate')" />

    <main class="flex-grow-1">
      <slot />
    </main>

    <Footer />

    <!-- Keep ONLY scroll-to-top button -->
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="back-to-top"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import Navbar from "@/components/navBar.vue"
import Footer from "@/components/footer.vue"

// Remove EstimateQuote import — modal belongs in App.vue only
// import EstimateQuote from "@/components/gestimate.vue"

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))

// Enable emitting from layout
defineEmits(['open-estimate'])
</script>

<style scoped>
main {
  padding: 1rem;
}
.back-to-top {
  background: green;
  width: 15px;
}
</style>
