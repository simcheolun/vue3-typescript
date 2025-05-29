/**
 * 주입
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue3UIExLib from 'vue3-uiex-lib'
import 'vue3-uiex-lib/dist/style.css'


/**
 * app
 */
const app = createApp(App)

/**
 * 설정
 */
app.use(Vue3UIExLib)
app.use(createPinia())
app.use(router)

app.mount('#app')
