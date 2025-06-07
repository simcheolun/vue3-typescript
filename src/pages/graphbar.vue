<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - options</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info content="disabled?: boolean > true" />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3GraphBar height="15px" showInfo="" :options="[
                { value: 1560000, label: '매출', type: 'primary' },
                { value: 700000, label: '수익', type: 'success' },
                { value: 500000, label: '세금', type: 'warning' },
                { value: 500000, label: '차액', type: 'danger' },
                { value: 250000, label: '공과금', type: 'info' },
                { value: 150000, label: '급여', type: 'talk' },
            ]" />`}}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="button s">
            <Vue3GraphBar  height="15px" :options="options" />
        </div>

        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { nextTick } from "process";
import { computed, ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided "AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `

const options = ref(initOptions())

function initOptions() {
    return [
        { value: 960000, label: '매출', type: 'primary' },
        { value: 700000, label: '수익', type: 'success' },
        { value: 500000, label: '세금', type: 'warning' },
        { value: 500000, label: '차액', type: 'danger' },
        { value: 250000, label: '공과금', type: 'info' },
        { value: 450000, label: '급여', type: 'talk' },
    ]
}
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