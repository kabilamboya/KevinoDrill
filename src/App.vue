<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>

  <!-- Teleport modal -->
  <teleport to="body">
    <EstimateModal ref="estimateModal" />
  </teleport>

  <!-- Teleport toast globally -->
  <teleport to="body">
    <Toast ref="toastRef" />
  </teleport>
</template>

<script setup>
import { ref, provide } from "vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import EstimateModal from "@/components/gestimate.vue"
import Toast from "@/components/Toast.vue"

const estimateModal = ref(null)
const toastRef = ref(null)

function openGlobalModal() {
  estimateModal.value?.openForm()
}

function showGlobalToast(message) {
  toastRef.value?.showToast(message)
}

// Makes modal globally available
provide("openEstimateModal", openGlobalModal)

// Makes toast globally available
provide("showToast", showGlobalToast)
</script>
