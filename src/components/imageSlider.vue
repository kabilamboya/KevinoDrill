<template>
  <section class="hero-container">
    <!-- Background slideshow -->
    <div
      v-for="(image, index) in slides"
      :key="index"
      class="hero-slide"
      :style="{
        backgroundImage: `url(${image})`,
        opacity: currentSlide === index ? 1 : 0
      }"
    ></div>

    <!-- Overlay content -->
    <div class="hero-content">
      <h1>Elevate projects with our drilling expertise</h1>
      <p>Professional Boreholes • Water Supply • Storage Structures</p>

      <button class="btn btn-primary" @click="$emit('open-estimate')">
        Get a Free Estimate
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue"

import slide1 from "@/assets/slides/slide1.jpg"
import slide2 from "@/assets/slides/slide2.jpg"
import slide3 from "@/assets/slides/slide3.jpg"
import slide4 from "@/assets/slides/slide4.jpg"
import slide5 from "@/assets/slides/slide5.jpg"
import slide6 from "@/assets/slides/slide6.jpg"
import slide7 from "@/assets/slides/slide7.jpg"

export default {
  name: "Sliders",
  setup() {
    const slides = ref([slide1, slide2, slide3, slide4, slide5, slide6, slide7])
    const currentSlide = ref(0)

    onMounted(() => {
      setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length
      }, 4500)
    })

    return { slides, currentSlide }
  }
}
</script>

<style scoped>
.hero-container {
  position: relative;
  height: 75vh;
  width: 100%;
  overflow: hidden;

  /* FIX: ensures next sections are visible */
  margin-bottom: 3rem;
  z-index: 1;
}

.hero-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1.5s ease-in-out;
  opacity: 0;
}

.hero-content {
  position: relative;
  z-index: 10;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25));
  padding: 20px;
}
</style>
