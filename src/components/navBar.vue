<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-4">
    <div class="container">
      <router-link class="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img src="/kevinlogo.jpg" alt="Company Logo" class="me-2" style="height:34px; width:auto; border-radius:4px;" />
        Kevino Drilling & Construction
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navCollapse">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/services">Services</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/projects">Projects</router-link></li>

          <!-- Corrected the estimate button list item -->
          <li class="nav-item ms-lg-3">
            <button class="btn btn-primary" @click="$emit('open-estimate')">
              Get a Free Estimate
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineEmits(['open-estimate']);
</script>