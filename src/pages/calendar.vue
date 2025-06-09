<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - type</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="type?: default , primary , success , danger , info , talk" />
        <pre>
                            {{ `<Vue3Info type="..."> this vue3 info panel </Vue3Info>` }}
                        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div>
            <Vue3Calendar v-model:options="calendarOptions">
                <template #default="{ data }">
                    <!-- 현재 {{ data.sDay }} 일 -->
                </template>
    
            </Vue3Calendar>
    
        </div>
    
    
    
        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info type="primary" :content="warningEn" />
    
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `
const calendarOptions = ref({
  y: 2025,
  m: 5,
})
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