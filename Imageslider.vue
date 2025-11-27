
<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" alt="display image" /> 
      </div>
    </div>

    <!-- Controls -->
    <div class="controls">
      <button @click="prevSlide">&#10094;</button>
      <button @click="nextSlide">&#10095;</button>
    </div>

    <!-- Dots -->
    <div class="dots">
      <span v-for="(slide, index) in slides" :key="index"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
import slider2 from '@/assets/images/slider2.jpg';
import slider3 from '@/assets/images/slider3.jpg';
import slider4 from '@/assets/images/slider4.jpg';

export default {
  name: 'ImageSlider',
  data() {
    return {
      currentIndex: 0,
      slides: [slider2,slider3,slider4]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    setInterval(this.nextSlide, 5000); // Auto-slide every 5 seconds
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 450px;
}
.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.slide {
  position: relative;
  width: 100%;
  flex-shrink: 0;
}
.slide button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
.slide img {
  width: 100%;
  height: 450px; /* fixed height for slider */
  object-fit: cover; /* crop image nicely */
  display: block;
}
.overlay {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff;
  max-width: 400px;
}
.overlay h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.overlay p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}
.overlay button {
  background: var(--secondary-green);
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.controls button {
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.dots {
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
}
.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.dots .active {
  background: var(--primary-blue);
}
@media (max-width: 768px) {
  .overlay {
    left: 5%;
    max-width: 90%;
    text-align: center;
  }
  .overlay h2 {
    font-size: 1.5rem;
  }
  .overlay p {
    font-size: 1rem;
  }
}
</style>
