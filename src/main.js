import './assets/main.css';
// import './assets/main.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import animationDirective from './directives/animationDirective';
import Toast from "vue-toastification";
import 'vue-toastification/dist/index.css';




import App from './App.vue';
import router from './router';

import Particles from 'vue3-particles'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);
app.use(Particles);
app.directive('animate', animationDirective);

app.mount('#app');
