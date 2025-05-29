/**
 * 주입
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue3TsLib from 'vue3-ts-lib'
// import  'vue3-ts-lib/main.scss'
// import 'vue3-ts-lib'
/**
 * app
 */
const app = createApp(App)

/**
 * 설정
 */
app.use(Vue3TsLib)
app.use(createPinia())
app.use(router)

app.mount('#app')
