import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- insert this line


createApp(App).use(router).mount('#app')
