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
            {{ modelData }}
            <Vue3Input type="number" v-model="modelData" round="" :min="1" :max="10"/>
            <Vue3Input type="text" size="lg" round="5px" />
            <Vue3Input type="text" round="5px" left-icon="fas fa-square-plus" placeholder="please Input" />
            <Vue3Input type="password" size="sm" round="5px" minLen="1" maxLen="3" left-icon="fas fa-square-plus"
                placeholder="please Input" />
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
const modelData = ref(1111)
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