<template>
  <section
    class="hero-slider"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @focusin="pauseAutoplay"
    @focusout="resumeAutoplay"
  >
    <!-- Slides wrapper (horizontal translate) -->
    <div
      class="slides"
      :style="{
        transform: `translateX(-${currentIndex * 100}%)`
      }"
      role="list"
      aria-live="polite"
    >
      <div
        v-for="(img, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${img})` }"
        role="listitem"
        :aria-hidden="index === currentIndex ? 'false' : 'true'"
      >
        <!-- soft per-slide overlay for fade effect -->
        <div class="slide-overlay" :class="{ visible: index === currentIndex }"></div>
      </div>
    </div>

    <!-- Controls (arrows) -->
    <div class="controls" aria-hidden="false">
      <button
        class="control prev"
        @click="prev"
        :aria-label="'Previous slide'"
        @keydown.enter.prevent="prev"
      >
        ‹
      </button>
      <button
        class="control next"
        @click="next"
        :aria-label="'Next slide'"
        @keydown.enter.prevent="next"
      >
        ›
      </button>
    </div>

    <!-- Dots -->
    <div class="dots" role="tablist" aria-label="Slide navigation">
      <button
        v-for="(img, idx) in slides"
        :key="idx"
        class="dot"
        :class="{ active: idx === currentIndex }"
        @click="goTo(idx)"
        :aria-label="`Go to slide ${idx + 1}`"
        :aria-pressed="idx === currentIndex ? 'true' : 'false'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

/**
 * Props
 * - slides: array of background image URLs (required)
 * - interval: autoplay ms
 * - title / subtitle / ctaText
 * - pauseOnHover: boolean (true)
 */
const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 4800
  },
  title: {
    type: String,
    default: 'Elevate projects with our drilling expertise'
  },
  subtitle: {
    type: String,
    default: 'Professional Boreholes • Water Supply • Storage Structures'
  },
  ctaText: {
    type: String,
    default: 'Get a Free Estimate'
  },
  secondaryCtaText: {
    type: String,
    default: ''
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  startIndex: {
    type: Number,
    default: 0
  },
  loop: {
    type: Boolean,
    default: true
  }
})

const currentIndex = ref(Math.max(0, Math.min(props.startIndex, props.slides.length - 1)))
const autoplayTimer = ref(null)
const isPaused = ref(false)

const next = () => {
  const nextIndex = currentIndex.value + 1
  if (nextIndex >= props.slides.length) {
    currentIndex.value = props.loop ? 0 : props.slides.length - 1
  } else {
    currentIndex.value = nextIndex
  }
}
const prev = () => {
  const prevIndex = currentIndex.value - 1
  if (prevIndex < 0) {
    currentIndex.value = props.loop ? props.slides.length - 1 : 0
  } else {
    currentIndex.value = prevIndex
  }
}
const goTo = (i) => {
  currentIndex.value = i
}

const startAutoplay = () => {
  stopAutoplay()
  if (props.interval > 0 && props.slides.length > 1) {
    autoplayTimer.value = setInterval(() => {
      if (!isPaused.value) next()
    }, props.interval)
  }
}
const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}
const pauseAutoplay = () => {
  if (props.pauseOnHover) isPaused.value = true
}
const resumeAutoplay = () => {
  if (props.pauseOnHover) isPaused.value = false
}

onMounted(() => {
  startAutoplay()

  // allow arrow keys left/right for navigation
  const onKey = (e) => {
    if (e.key === 'ArrowRight') {
      next()
    } else if (e.key === 'ArrowLeft') {
      prev()
    }
  }
  window.addEventListener('keydown', onKey)

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKey)
    stopAutoplay()
  })
})

onBeforeUnmount(() => stopAutoplay())

// restart autoplay when slides prop changes length
watch(
  () => props.slides.length,
  () => {
    startAutoplay()
    if (currentIndex.value >= props.slides.length) {
      currentIndex.value = 0
    }
  }
)
</script>

<style scoped>
:root {
  --hero-height: 75vh;
  --overlay-gradient: linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25));
  --dot-size: 10px;
  --dot-gap: 8px;
  --primary-color: #0b63d6; /* adjust to your brand */
}

/* Container */
.hero-slider {
  overflow: hidden;
  margin-bottom: 3rem;
  display: block;
  --transition-speed: 600ms;
  position: absolute;  /* <— critical */
  inset: 0;            /* <— stretch to parent */
  width: 100%;
  height: 100%;
}

/* Slides wrapper: horizontal translate */
.slides {
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform var(--transition-speed) ease-in-out;
  will-change: transform;
}

/* Each slide uses background image (cover) */
.slide {
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  flex-shrink: 0;

  /* an extra soft opacity transition to give the hybrid fade feel */
  transition: opacity 700ms ease-in-out;
  opacity: 0.92;
}

/* per-slide overlay that fades in/out to create soft fade */
.slide-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0,0,0,0.20);
  opacity: 0;
  transition: opacity 700ms ease-in-out;
}
.slide-overlay.visible {
  opacity: 1;
}

/* Controls (arrows) */
.controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
  pointer-events: none;
}
.control {
  pointer-events: auto;
  background: rgba(0,0,0,0.45);
  color: #fff;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  transition: transform 120ms ease, background 160ms ease;
}
.control:hover {
  transform: scale(1.05);
  background: rgba(0,0,0,0.6);
}

/* Dots */
.dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--dot-gap);
  z-index: 22;
  pointer-events: auto;
}
.dot {
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  background: rgba(255,255,255,0.85);
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.65;
  transform-origin: center;
  transition: transform 200ms ease, opacity 200ms ease, background 200ms ease;
}
.dot.active {
  width: calc(var(--dot-size) + 6px);
  height: calc(var(--dot-size) + 6px);
  opacity: 1;
  background: var(--primary-color);
  transform: translateY(-1px);
}

/* Accessibility: focus outline on controls/dots */
.control:focus,
.dot:focus,
.btn:focus {
  outline: 3px solid rgba(255,255,255,0.12);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(11,99,214,0.18);
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .controls { padding: 0 0.5rem; }
  .control { width: 40px; height: 40px; font-size: 1.3rem; }
  .hero-content { padding: 1rem; }
  .hero-title { font-size: 1.4rem; }
}
</style>
