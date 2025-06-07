<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - Size</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info content="size?: sm , default , lg " />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Select size="..." />` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Select v-model="modelData1" :list="[
                { name: 'a', data: 1 },
                { name: 'b', data: 2 },
                { name: 'c', data: 3 },
            ]" size="sm" label="name" keyData="data" width="150px" />
            <Vue3Select v-model="modelData1" :list="[
                { name: 'a', data: 1 },
                { name: 'b', data: 2 },
                { name: 'c', data: 3 },
            ]" size="default" label="name" keyData="data" width="150px" />
            <Vue3Select v-model="modelData1" :list="[
                { name: 'a', data: 1 },
                { name: 'b', data: 2 },
                { name: 'c', data: 3 },
            ]" size="lg" label="name" keyData="data" width="150px" />
        </div>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Select v-model="modelData" :list="[
                { name: 'a', data: 1 },
                { name: 'b', data: 2 },
                { name: 'c', data: 3 },
            ]" size="default" label="name" keyData="data" width="150px" />` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - Disabled</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info content="disabled?: boolean" />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Select disabled />` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
             <Vue3Select v-model="modelData1" :list="[
                { name: 'a', data: 1 },
                { name: 'b', data: 2 },
                { name: 'c', data: 3 },
            ]" size="default" label="name" keyData="data" width="150px" disabled/>
        </div>


        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `
const modelData1 = ref(null)
const types = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'talk'
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