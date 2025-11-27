
<template>
  <div class="layout">
    <Navbar @openEstimate="showModal = true" />
    <main>
      <router-view @openEstimate="showModal = true" />
    </main>
    <Footer />
    <EstimateModal :show="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import EstimateModal from '@/components/EstimateModal.vue';

export default {
  name: 'Layout',
  components: { Navbar, Footer, EstimateModal },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style>
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
