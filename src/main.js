// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import router from './router'
import './style.css'



const pinia = createPinia();
pinia.use(piniaPersist);



const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')