<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info type="info" :content="`
        width: string > '150px'
        width: string > '150px'
        `" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Info type="..."> this vue3 info panel </Vue3Info>` }}
        </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div>
            <Vue3Info style="margin-top: 5px;" width="100%" :content="conttent1"></Vue3Info>
            <Vue3RowSplit margin="5px" label="2절" style="width: 250px;" color="#555" lineColor="#333" weight="1px" align="center" />
            <Vue3Info style="margin-top: 5px;" width="100%" :content="conttent2"></Vue3Info>
        </div>


        <Vue3RowSplit margin="20px" label="" />
        <Vue3Info type="info" :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `

const conttent1 = ref(`
성자신손 오백 년은 우리 황실이요
산고수려 동반도는 우리 본국일세

애국하는 열심의기 북악같이 높고
충군하는 일편단심 동해같이 깊어
`)
const conttent2 = ref(`
천만인의 오직 한 맘 나라 사랑하여
사농공상 귀천없이 직분만 다하세

우리나라 우리황제 황천이 도우사
군민공락 만만세에 태평독립하세
`)
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