<template>
  <DefaultLayout @open-estimate="openGlobalModal">
    <router-view />
  </DefaultLayout>

  <!-- Teleport modal globally -->
  <teleport to="body">
    <EstimateModal ref="estimateModal" />
  </teleport>
</template>

<script setup>
import { ref } from "vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import EstimateModal from "@/components/gestimate.vue"

const estimateModal = ref(null)

function openGlobalModal() {
  estimateModal.value?.openForm()
}
</script>
