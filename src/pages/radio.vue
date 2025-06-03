<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Button Component - Type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Check v-model="modelData" type="..." label="checked"/>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Radio v-model="modelData" type="danger" :list="labels" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Button Component - Disabled</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="disabled?: boolean > true" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Check v-model="modelData" disabled label="checked"/>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Radio disabled v-model="modelData" type="default" :list="[labels[0]]" />
            <Vue3Radio disabled v-model="modelData" type="primary" :list="[labels[0]]" />
            <Vue3Radio disabled v-model="modelData" type="success" :list="[labels[0]]" />
            <Vue3Radio disabled v-model="modelData" type="warning" :list="[labels[0]]" />
            <Vue3Radio disabled v-model="modelData" type="dangher" :list="[labels[0]]" />
            <Vue3Radio disabled v-model="modelData" type="info" :list="[labels[0]]" />
            <Vue3Radio disabled v-model="modelData" type="talk" :list="[labels[0]]" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Button Component - Disabled</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="disabled?: boolean > true" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Radio v-model="modelData" type="primary" :list="[
                    { type: 'Male' },
                    { type: 'Female' },
                ]" keyData="type" />` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Radio v-model="modelData" type="primary" :list="MultiLabels" keyData="type" />
        </div>

        <Vue3RowSplit margin="20px" label="" />
        <Vue3Info :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided "AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `
const modelData = ref('Male')
const labels = [
    'Male',
    'Female',
]

const MultiLabels = [
    { type: 'Male' },
    { type: 'Female' },
]
</script>

<style scoped>
.component-container {
    width: 100%;
    margin-bottom: 50px;
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