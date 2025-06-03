<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Button Component - Type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Check v-model="modelData" label="checked"/>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Check v-model="modelData1" type="success" label="checked"/>
            <Vue3Check v-model="modelData2" label="not checked" />
            <Vue3Check label="this disabled" :disabled="true"/>
        </div>

        <Vue3RowSplit margin="20px" label="" />
        <Vue3Info :content="langEn ? warningEn : warningKr" @click="langEn = !langEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const langEn = ref(true)

const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `
const warningKr = `※ 경고: 본 라이브러리는 ISC 라이선스 하에 배포되며, 해당 라이선스 조건을 따릅니다.  
이 라이브러리는 "있는 그대로(AS IS)" 제공되며, 어떠한 보증도 제공하지 않습니다.  
라이브러리를 사용할 경우 발생할 수 있는 모든 책임은 사용자 본인에게 있습니다.  
사용자는 ISC 라이선스 조항을 숙지하고 동의한 것으로 간주됩니다.`
const modelData1 = ref(true)
const modelData2 = ref(false)
const types = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'talk'
]
const icons = [
    'fas fa-square-plus',
    'fas fa-image',
    'fas fa-trash-can',
    'fas fa-envelope-open',
    'fas fa-file-lines',
    'fas fa-pen-to-square',
    'fas fa-star',
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