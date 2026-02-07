
import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/home.vue"
import About from "../pages/about.vue"
import Services from "../pages/services.vue"
import Projects from "../pages/projects.vue"
import ProjectDetail from "../pages/projectDetail.vue"
import Contact from "../pages/contact.vue"

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/services", name: "services", component: Services },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/projects/:slug", name: "project-detail", component: ProjectDetail },
  { path: "/contact", name: "contact", component: Contact },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" }
    }
    return { top: 0 }
  },
})
