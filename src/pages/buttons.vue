<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - Type</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'" />
        <pre>
            {{ `<Vue3Button type='...'></Vue3Button>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="default" :type="item" v-for="(item, index) in types" :key="index">
                {{ item }}
            </Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - Size</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="size?: 'default' | 'sm' | 'lg'" />
        <pre>
            {{ `<Vue3Button size='...'></Vue3Button>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="sm">Small</Vue3Button>
            <Vue3Button size="default">Default</Vue3Button>
            <Vue3Button size="lg">Large</Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - Disabled</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="disabled?: boolean > true" />
        <pre>
            {{ `<Vue3Button disabled></Vue3Button>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="default" disabled :type="item" v-for="(item, index) in types" :key="index">
                {{ item }}
            </Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - Round</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="round?: string > '...'" />
        <pre>
            {{ `<Vue3Button round="0px">0px</Vue3Button>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="default" type="primary" round="0px">0px</Vue3Button>
            <Vue3Button size="default" type="primary" round="3px">3px</Vue3Button>
            <Vue3Button size="default" type="primary" round="5px">5px</Vue3Button>
            <Vue3Button size="default" type="primary" round="10px">10px</Vue3Button>
            <Vue3Button size="default" type="primary" round="15px">15px</Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - Circle</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="circle?: boolean" />
        <pre>
            {{ `<Vue3Button circle></Vue3Button>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="lg" circle :type="item" :icon="icons[index]" v-for="(item, index) in types" :key="index">
            </Vue3Button>
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

const types = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'talk',
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

function aaa() {
    alert('aaa')
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