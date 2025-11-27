// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home.vue";
import About from "@/pages/about.vue";
import Services from "@/pages/services.vue";
import Projects from "@/pages/projects.vue";
import Contact from "@/pages/contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});

