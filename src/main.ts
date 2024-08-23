import './assets/main.css'
import './assets/fonts/font-smiley.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";

import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')