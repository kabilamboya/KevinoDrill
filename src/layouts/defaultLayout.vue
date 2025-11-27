<template>
  <div class="layout">
    <Navbar @open-estimate="showModal = true" />

    <main>
      <slot />
    </main>

    <Footer />

    <EstimateModal
      :show="showModal"
      @close="showModal = false"
    />

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
import EstimateModal from "@/components/gestimate.vue"

const showModal = ref(false)
const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
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

/* Example styling — tweak as you like */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #0a7a2a;
  color: white;
  font-size: 18px;
}
</style>
