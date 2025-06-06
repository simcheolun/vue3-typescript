<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - Type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Label type="..." >label</Vue3Label>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="">
            <Vue3Label v-for="(item, index) in types" :key="index" :type="item">{{ item }}</Vue3Label>
        </div>

        <Vue3Quote type="default" style="margin-top: 5px;">Component - Text Case</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="textCase?: 'default' | 'capi' | 'uppe'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Label textCase="..." >label</Vue3Label>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="">
            <Vue3Label v-for="(item, index) in types" :key="index" :type="item" textCase="capi">{{ item }}</Vue3Label>
        </div>
        <Vue3RowSplit margin="5px" label="" />
        <div class="">
            <Vue3Label v-for="(item, index) in types" :key="index" :type="item" textCase="uppe">{{ item }}</Vue3Label>
        </div>


        <Vue3Quote type="default" style="margin-top: 5px;">Component - Size</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="size?: 'sm' | 'default' | 'lg'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Label textCase="..." >label</Vue3Label>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="">
            <Vue3Label v-for="(item, index) in sizes" :key="index" :type="item" textCase="capi" :size="item">{{ item }}
            </Vue3Label>
        </div>
        <Vue3RowSplit margin="5px" label="" />


        <Vue3Quote type="default" style="margin-top: 5px;">Component - Ellips</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="ellipLines?: string | number" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Label width="50px" ellipLines="1">this vue3 label</Vue3Label>` }}
            {{ `<Vue3Label width="150px" ellipLines="2">
                this vue3 label<br>
                this vue3 label<br>
                this vue3 label<br>
            </Vue3Label>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="">
            <Vue3Label width="50px" ellipLines="1">this vue3 label</Vue3Label>
            <Vue3Label width="150px" ellipLines="2">
                this vue3 label<br>
                this vue3 label<br>
                this vue3 label<br>
            </Vue3Label>
        </div>
        <Vue3RowSplit margin="5px" label="" />



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