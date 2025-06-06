/**
 * 주입
 */
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue3UIExLightTs from 'vue3-uiex-light-ts'
import 'vue3-uiex-light-ts/dist/style.css'

/**
 * app
 */
const app = createApp(App)

/**
 * 설정
 */
app.use(Vue3UIExLightTs)
app.use(createPinia())
app.use(router)

app.mount('#app')
