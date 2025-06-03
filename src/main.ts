/**
 * 주입
 */
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue3UIExLight from 'vue3-uiex-light'
import 'vue3-uiex-light/dist/style.css'

/**
 * app
 */
const app = createApp(App)

/**
 * 설정
 */
app.use(Vue3UIExLight)
app.use(createPinia())
app.use(router)

app.mount('#app')
