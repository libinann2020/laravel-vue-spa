import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import Index from "./Index.vue";
import http from "./http";
import auth from "./auth.js";
import router from "./router";

const app = createApp(Index);
app.router = router;

app.component("index", Index);
app.use(router).use(http).use(auth).mount("#app");
