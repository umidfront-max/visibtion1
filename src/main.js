import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { VueMaskDirective } from "v-mask";
const app = createApp(App);

app.directive("mask", VueMaskDirective);
app.use(router);
app.mount("#app");
