import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.use(store)
app.mount('#app')
