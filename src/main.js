import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---


// Vue.prototype.$apiHeader = headers
// Vue.prototype.$apiURL = apiURL

createApp(App).use(router).mount('#app')