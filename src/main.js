import './assets/main.css';
// import './assets/dashboard.css';
// import './assets/main.js';
import { setupRouterGuard } from './middleware/index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import animationDirective from './directives/animationDirective';
import Toast, { POSITION } from 'vue-toastification';
import { useToast } from "vue-toastification";
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';
import Particles from 'vue3-particles'
import {setloading,isLoading} from './utils/extra.js'







const options = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,

  };

  

const app = createApp(App);
setupRouterGuard(router);
app.use(createPinia());
app.use(router);
app.use(Toast, options);
app.use(Particles);
app.directive('animate', animationDirective);


// Make toast globally available
const toast = useToast();
app.config.globalProperties.$toast = toast;

app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;

app.mount('#app');
