<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Install</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `npm install vue3-uiex-light-ts` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Development Environment</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `{
                "dependencies": {
                    "vue": "^3.0.0"
                },
                "devDependencies": {
                    "@types/node": "^22.15.24"
                }
            }` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Use</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `import { createApp } from 'vue'
            import App from './App.vue'

            import Vue3UIExLightTs from 'vue3-uiex-light-ts'
            import 'vue3-uiex-light-ts/dist/style.css'

            const app = createApp(App)
            app.use(Vue3UIExLightTs)
            app.mount('#app')` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Supported Components</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `Vue3Button
            Vue3Check
            Vue3Label
            Vue3Quote
            Vue3Radio
            Vue3Input
            Vue3Select
            Vue3Info
            Vue3Split
            Vue3Table
            Vue3GraphBar
            Vue3Dialog
            Vue3CalendarData
            Vue3Calendar
            Vue3HoverLens` }}
        </pre>

        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info type="primary" :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = ``

const types = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'talk',
]
const sizes = [
    'sm',
    'default',
    'lg',
]
</script>

<style scoped>
.component-container {
    width: 100%;
    height: 100vh !important;
    overflow: hidden;
    overflow-y: auto;
    padding: 50px;
}

pre {
    font-family: Consolas, 'Courier New', monospace;
    background-color: #011627;
    color: #f4d03f;
    padding-top: 20px;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>