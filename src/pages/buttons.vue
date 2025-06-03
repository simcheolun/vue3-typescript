<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Button Component - Type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Button type='...' @click="..."></Vue3Button>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button>Default</Vue3Button>
            <Vue3Button type="primary">Primary</Vue3Button>
            <Vue3Button type="success">Success</Vue3Button>
            <Vue3Button type="warning">Warning</Vue3Button>
            <Vue3Button type="danger">Danger</Vue3Button>
            <Vue3Button type="info">Info</Vue3Button>
            <Vue3Button type="talk">Talk</Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Button Component - Size</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="size?: 'default' | 'sm' | 'lg'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Button size='...'></Vue3Button>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="sm">Small</Vue3Button>
            <Vue3Button size="default">Default</Vue3Button>
            <Vue3Button size="lg">Large</Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Button Component - Disabled</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="disabled?: boolean > true" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Button disabled></Vue3Button>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="default" type="default" disabled>DEFAULT</Vue3Button>
            <Vue3Button size="default" type="primary" disabled>PRIMARY</Vue3Button>
            <Vue3Button size="default" type="success" disabled>SUCCESS</Vue3Button>
            <Vue3Button size="default" type="warning" disabled>WARNING</Vue3Button>
            <Vue3Button size="default" type="danger" disabled>DANGER</Vue3Button>
            <Vue3Button size="default" type="info" disabled>INFO</Vue3Button>
            <Vue3Button size="default" type="talk" disabled>TALK</Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Button Component - Round</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="round?: string > '...'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Button round="0px">0px</Vue3Button>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="default" type="primary" round="0px">0px</Vue3Button>
            <Vue3Button size="default" type="primary" round="3px">3px</Vue3Button>
            <Vue3Button size="default" type="primary" round="5px">5px</Vue3Button>
            <Vue3Button size="default" type="primary" round="10px">10px</Vue3Button>
            <Vue3Button size="default" type="primary" round="15px">15px</Vue3Button>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Button Component - Circle</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="round?: string > '...'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
                {{ `<Vue3Button round="0px">0px</Vue3Button>` }}
            </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Button size="lg" circle :type="types[item]" :icon="icons[item]" v-for="item in [0, 1, 2, 3, 4, 5, 6]"
                :key="item">
            </Vue3Button>
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
    width:100%;
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