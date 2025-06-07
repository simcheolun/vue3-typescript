<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - Use info</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="info" :content="`label: string`" />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ ` <Vue3RawSplit 
                margin="5px" 
                label="Left Split" 
                style="width: 250px;" 
                color="#555" 
                lineColor="#333"
                weight="1px" 
                align="left" />` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info style="margin-top: 5px;" width="100%" :content="content1"></Vue3Info>
        <div>
            <Vue3RawSplit margin="5px" label="Left Split" style="width: 250px;" color="#555" lineColor="#333"
                weight="1px" align="left" />
            <Vue3RawSplit margin="5px" label="Center Split" style="width: 250px;" color="#555" lineColor="#333"
                weight="1px" align="center" />
            <Vue3RawSplit margin="5px" label="Right Split" style="width: 250px;" color="#555" lineColor="#333"
                weight="1px" align="right" />
            <Vue3Info style="margin-top: 5px;" width="100%" :content="content2"></Vue3Info>
        </div>
        <Vue3Quote type="default" style="margin-top: 20px;">Component - Attributes</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Table :data="componentProfile" table-border="default" size="lg" hover th-bold>
            <Vue3TableColumn prop="keyword" label="keyword" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="info" label="Detail" cellAlign="left" />
            <Vue3TableColumn prop="default" label="Default" cellAlign="right" width="150px" />
        </Vue3Table>

        <!-- <Vue3Table :data="componentProfile" table-border="default" size="lg" hover th-border>
            <Vue3TableColumn prop="title" label="제목" align="left" />
            <Vue3TableColumn prop="info" label="정보" />
            <Vue3TableColumn prop="user" label="사용자" />
            <Vue3TableColumn name="aaa" label="커스텀" />
            <template #aaa="{ scope }">
                <button>asdfasd</button>
            </template>
</Vue3Table> -->


        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info type="info" :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `


const componentProfile = [
    { keyword: 'label', info: 'Label content', default: '--' },
    { keyword: 'color', info: 'Label color', default: '#333' },
    { keyword: 'align', info: 'Label position', default: 'center' },
    { keyword: 'lineColor', info: 'Line color', default: '--' },
    { keyword: 'weight', info: 'Line height', default: '1px' },
    { keyword: 'margin', info: 'this top & bottom margin', default: '10px' },
    { keyword: 'fontSize', info: 'label size', default: '14px' },
]
const content1 = ref(`
성자신손 오백 년은 우리 황실이요
산고수려 동반도는 우리 본국일세

애국하는 열심의기 북악같이 높고
충군하는 일편단심 동해같이 깊어
`)
const content2 = ref(`
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