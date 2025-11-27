<template>
  <!-- Layout contains Navbar, Footer, and emits open-estimate -->
  <DefaultLayout @open-estimate="openGlobalModal">
    <router-view />
  </DefaultLayout>

  <!-- ONE global modal only -->
  <EstimateModal ref="estimateModal" />
</template>

<script setup>
import { ref } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EstimateModal from "@/components/gestimate.vue";

const estimateModal = ref(null);

function openGlobalModal() {
  // Calls the modal's own method
  estimateModal.value?.openForm();
}
</script>
