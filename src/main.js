import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faFacebookF, faYoutube, faWhatsapp, faTiktok, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

library.add(faFacebookF, faYoutube, faWhatsapp, faTiktok, faInstagram, faLinkedinIn)

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Global Theme
import "@/assets/theme.css"

// CREATE THE APP INSTANCE
const app = createApp(App)

// REGISTER YOUR GLOBAL COMPONENTS *HERE* (on the app instance)
app.component("font-awesome-icon", FontAwesomeIcon)

// USE ROUTER
app.use(router)

// MOUNT APP
app.mount("#app")
