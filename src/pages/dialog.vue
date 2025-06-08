<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - example</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="info" content="Please refer to the code example." />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `    let showDialog:boolean = ref(true)
                const dialogOptions = reactive({
                round: '5px',
                overay: 'none',
                beforeClose: true,
                width: '600px',
                height: '350px',
            })
            <Vue3Dialog v-model:show="showDialog" :options="dialogOptions">
                v-movel:show = ${showDialog}
            </Vue3Dialog>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div>
            <Vue3Dialog v-model:show="showDialog" :options="dialogOptions">
                content
            </Vue3Dialog>
        </div>
        <Vue3Quote type="default" style="margin-top: 5px;">
            <Vue3Button @click="dialogSwitch()">Dialog show => {{ showDialog }}</Vue3Button>
        </Vue3Quote>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - overay Style</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="info" content="overay: tans , moho , transMoho , none" />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `const dialogOptions = reactive({
                ...
                overay: 'none',
                ...
            })
            <Vue3Dialog v-model:show="showDialog" :options="dialogOptions">
                v-movel:show = ${showDialog}
            </Vue3Dialog>` }}
        </pre>
        <Vue3RawSplit margin="5px" label="" />
        <div class="buttons" style="height:150px">
            <div style="width:33%;height:100%;position: relative;overflow: hidden;">
                성자신손 오백 년은 우리 황실이요
                산고수려 동반도는 우리 본국일세

                애국하는 열심의기 북악같이 높고
                충군하는 일편단심 동해같이 깊어
                <div style="position: absolute; background-color: rgba(0, 0, 0, 0.5);width:100%;height:100%;top:0px;">
                </div>
            </div>
            <div style="width:33%;height:100%;position: relative;overflow: hidden;">
                성자신손 오백 년은 우리 황실이요
                산고수려 동반도는 우리 본국일세

                애국하는 열심의기 북악같이 높고
                충군하는 일편단심 동해같이 깊어
                <div style="position: absolute; backdrop-filter: saturate(180%) blur(5px);width:100%;height:100%;top:0px;">
                </div>
            </div>
            <div style="width:33%;height:100%;position: relative;overflow: hidden;">
                성자신손 오백 년은 우리 황실이요
                산고수려 동반도는 우리 본국일세

                애국하는 열심의기 북악같이 높고
                충군하는 일편단심 동해같이 깊어
                <div style="position: absolute; background-color: rgba(0, 0, 0, 0.5);backdrop-filter: saturate(180%) blur(5px);width:100%;height:100%;top:0px;">
                </div>
            </div>
            <div style="width:33%;height:100%;position: relative;overflow: hidden;">
                성자신손 오백 년은 우리 황실이요
                산고수려 동반도는 우리 본국일세

                애국하는 열심의기 북악같이 높고
                충군하는 일편단심 동해같이 깊어
                <div style="position: absolute; width:100%;height:100%;top:0px;">
                </div>
            </div>
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - options</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Table :data="componentOptions" tableBorder="all" th-bold>
            <Vue3TableColumn prop="name" label="Attributes" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="type" label="type" cellAlign="left" width="300px" />
            <Vue3TableColumn prop="default" label="Default" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="info" label="Info" cellAlign="left" />
        </Vue3Table>

        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info type="info" :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `

const componentOptions = [
    { name: 'round', type: 'string', default: '0px', info: '모서리 둥글기' },
    { name: 'overay', type: 'trans | moho | transMoho | none', default: 'trans', info: '오버레이 스타일' },
    { name: 'beforeClose', type: 'boolean', default: false, info: '오버레이클릭 창닫기' },
    { name: 'width', type: 'string', default: '500px', info: '창 너비' },
    { name: 'height', type: 'string', default: '350px', info: '창 높이' }
]


const dialogOptions = reactive({
    round: '5px',
    overay: 'moho',
    beforeClose: true,
    width: '600px',
    height: '350px',
})

let showDialog = ref(false)

function dialogSwitch() {
    showDialog.value = !showDialog.value
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