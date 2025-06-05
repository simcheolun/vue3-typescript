<template>
    <div class="component-container">

        <Vue3Quote type="default" style="margin-top: 5px;">Textbox Component - Type</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="type?: text | password | number" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input type="..."/>` }}            
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="text" width="200px" placeholder="Please Input text" />
            <Vue3Input type="password" width="200px" placeholder="Please Input password" />
            <Vue3Input type="number" width="200px" placeholder="Please Input number" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[text,password,number] Component - Round</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="round?: string" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input round="4px"/>` }}            
         {{ `<Vue3Input /> // default round` }}            
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="text" width="200px" round="" placeholder="no round" />
            <Vue3Input type="text" width="200px" placeholder="default" />
            <Vue3Input type="text" width="200px" round="10px" placeholder="10px" />
            <Vue3Input type="text" width="200px" round="15px" placeholder="15px" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[text,password,number] Component - width</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="width?: string" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input width="100px" />` }}            
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="text" width="100px" placeholder="width 100px" />
            <Vue3Input type="password" width="150px" placeholder="width 150px" />
            <Vue3Input type="number" width="200px" placeholder="width 200px" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[text,password,number] Component - Size</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="size?: 'default' | 'sm' | 'lg'" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input size="..."/>` }}
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="text" width="200px" size="sm" placeholder="Small Textbox" />
            <Vue3Input type="text" width="200px" size="default" placeholder="Default Textbox" />
            <Vue3Input type="text" width="200px" size="lg" placeholder="Large Textbox" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[text,password,number] Component - disabled</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="disabled?: boolean" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input disabled/>` }}
         {{ `<Vue3Input :disabled="true"/>` }}
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="text" width="200px" placeholder="Textbox" disabled />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[text,password,number] Component - icon</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="left-icon?: string , right-icon?: string" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input left-icon="fas fa-square-plus"/>` }}            
         {{ `<Vue3Input right-icon="fas fa-square-plus"/>` }}            
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="password" width="200px" left-icon="fas fa-square-plus" placeholder="Left icon" />
            <Vue3Input type="password" width="200px" right-icon="fas fa-square-plus" placeholder="Right icon" />
        </div>

        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[text] Component - minLength , maxLength</Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="minLen?: string | number , maxLen?: string | number" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input minLen="1" maxLen="3"/> // string` }}            
         {{ `<Vue3Input :minLen="1" :maxLen="3"/> // number` }}                       
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="password" width="200px" minLen="1" maxLen="3" placeholder="please Input" />
            <Vue3Input type="password" width="200px" minLen="1" maxLen="3" placeholder="please Input" />
        </div>


        <Vue3Quote type="default" style="margin-top: 20px;">Textbox[number] Component - type > min , max , comma
        </Vue3Quote>
        <Vue3RowSplit margin="5px" label="" />
        <Vue3Info content="min?: string | number , max?: string | number , comma?:boolean" />
        <Vue3RowSplit margin="5px" label="" />
        <pre>
         {{ `<Vue3Input min="1" max="3"/> // string` }}            
         {{ `<Vue3Input :min="1" :max="3"/> // number` }}                       
         {{ `<Vue3Input comma/>` }}                       
         </pre>
        <Vue3RowSplit margin="5px" label="" />
        <div class="buttons">
            <Vue3Input type="number" width="200px" min="1" max="3" placeholder="limit: 1 ~ 3" />
            <Vue3Input type="number" width="200px" min="1" max="9999" placeholder="limit: 1 ~ 9999" />
            <Vue3Input type="number" width="200px" min="1" max="9999" comma placeholder="limit: 1 ~ 9,999 and comma" />
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