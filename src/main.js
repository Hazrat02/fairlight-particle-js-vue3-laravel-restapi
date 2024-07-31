import './assets/main.css';
// import './assets/main.js';
// import Backgrounds from './components/Bgs.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';


// import { loadFull } from "tsparticles";

// import { Engine } from "tsparticles-engine";




import App from './App.vue';
import router from './router';

import Particles from 'vue3-particles'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Particles);

// app.use(Particles);
// app.component('Bgs', Backgrounds);
app.mount('#app');
