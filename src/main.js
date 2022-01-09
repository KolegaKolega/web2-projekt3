import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AwardsCard from "./components/AwardsCard";

const app = createApp(App)
app.use(router)
app.component("awards-card", AwardsCard);
app.mount("#app");
