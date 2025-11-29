<template>
  <transition name="toast-fade">
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue"

const message = ref("")
const visible = ref(false)

function showToast(text) {
  message.value = text
  visible.value = true

  setTimeout(() => {
    visible.value = false
  }, 3000)
}

defineExpose({ showToast })
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #28a745; /* Success green */
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 99999;
}

/* Fade animation */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity .3s ease, transform .3s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
