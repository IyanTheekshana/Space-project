import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import MainNav from "./components/MainNav";

const app = createApp(App);
app.use(router);
app.component("main-nav", MainNav);
app.mount("#app");
