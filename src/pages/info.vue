<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="type?: default , primary , success , danger , info , talk" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Info type="..."> this vue3 info panel </Vue3Info>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div>
            <Vue3Info style="margin-top: 5px;" v-for="(item, index) in types" :key="index" :type="item" width="100%" :content="item"></Vue3Info>
        </div>

        <Vue3Quote type="default" style="margin-top: 5px;">Component - width</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="width?: string" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Info width="150px"> this vue3 info panel </Vue3Info>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div>
            <Vue3Info style="margin-top: 5px;" width="150px" type="primary" :content="'150px'"></Vue3Info>
            <Vue3Info style="margin-top: 5px;" width="200px" type="primary" :content="'200px'"></Vue3Info>
            <Vue3Info style="margin-top: 5px;" width="100%" type="primary" :content="'100%'"></Vue3Info>
        </div>

        <Vue3RowSplit margin="20px" label="" />
        <Vue3Info :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `

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