import { createApp } from "vue";
import App from "~/App.vue";
//Vue Router
import index from "./router";

import "~/styles/tailwind.css";
import "~/styles/main.scss";
import "~/styles/nprogress.scss";

const app = createApp(App);

app.use(index);

app.mount("#app");
