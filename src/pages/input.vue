<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Textbox Component - Type</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="type?: text | password | number" />
    <pre>
         {{ `<Vue3Input type="..."/>` }}            
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" width="200px" placeholder="Please Input text" />
      <Vue3Input type="password" width="200px" placeholder="Please Input password" />
      <Vue3Input type="number" width="200px" placeholder="Please Input number" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - Round</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="round?: string" />
    <pre>
         {{ `<Vue3Input round="4px"/>` }}            
         {{ `<Vue3Input /> // default round` }}            
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" width="200px" round="" placeholder="no round" />
      <Vue3Input type="text" width="200px" placeholder="default" />
      <Vue3Input type="text" width="200px" round="10px" placeholder="10px" />
      <Vue3Input type="text" width="200px" round="15px" placeholder="15px" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - width</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="width?: string" />
    <pre>
         {{ `<Vue3Input width="100px" />` }}            
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" width="100px" placeholder="width 100px" />
      <Vue3Input type="password" width="150px" placeholder="width 150px" />
      <Vue3Input type="number" width="200px" placeholder="width 200px" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - Size</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="size?: 'default' | 'sm' | 'lg'" />
    <pre>
         {{ `<Vue3Input size="..."/>` }}
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" width="200px" size="sm" placeholder="Small Textbox" />
      <Vue3Input type="text" width="200px" size="default" placeholder="Default Textbox" />
      <Vue3Input type="text" width="200px" size="lg" placeholder="Large Textbox" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - Border</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="border?: none , default , primary , success , warning , danger , info , talk"
    />
    <pre>
         {{ `<Vue3Input border="..."/>` }}
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" width="100px" size="default" border="none" :placeholder="item" />
      <Vue3Input
        type="text"
        width="100px"
        size="default"
        :border="item"
        :placeholder="item"
        v-for="(item, index) in types"
        :key="index"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - disabled</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="disabled?: boolean" />
    <pre>
         {{ `<Vue3Input disabled/>` }}
         {{ `<Vue3Input :disabled="true"/>` }}
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" width="200px" placeholder="Textbox" disabled />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - icon</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="left-icon?: string , right-icon?: string" />
    <pre>
         {{ `<Vue3Input left-icon="fas fa-square-plus"/>` }}            
         {{ `<Vue3Input right-icon="fas fa-square-plus"/>` }}            
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input
        type="password"
        width="200px"
        left-icon="fas fa-square-plus"
        placeholder="Left icon"
      />
      <Vue3Input
        type="password"
        width="200px"
        right-icon="fas fa-square-plus"
        placeholder="Right icon"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text] Component - minLength , maxLength</Vue3Quote
    >
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="minLen?: string | number , maxLen?: string | number" />
    <pre>
         {{ `<Vue3Input minLen="1" maxLen="3"/> // string` }}            
         {{ `<Vue3Input :minLen="1" :maxLen="3"/> // number` }}                       
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="password" width="200px" minLen="1" maxLen="3" placeholder="please Input" />
      <Vue3Input type="password" width="200px" minLen="1" maxLen="3" placeholder="please Input" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[number] Component - type > min , max , comma
    </Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="min?: string | number , max?: string | number , comma?:boolean"
    />
    <pre>
         {{ `<Vue3Input min="1" max="3"/> // string` }}            
         {{ `<Vue3Input :min="1" :max="3"/> // number` }}                       
         {{ `<Vue3Input comma/>` }}                       
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="number" width="200px" min="1" max="3" placeholder="limit: 1 ~ 3" />
      <Vue3Input type="number" width="200px" min="1" max="9999" placeholder="limit: 1 ~ 9999" />
      <Vue3Input
        type="number"
        width="200px"
        min="1"
        max="9999"
        comma
        placeholder="limit: 1 ~ 9,999 and comma"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px"
      >Textbox[text,password,number] Component - align
    </Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="align?: left , center , right" />
    <pre>
            {{ `<Vue3Input align="..."/>` }}            
         </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Input type="text" align="left" width="200px" placeholder="text" />
      <Vue3Input type="password" align="center" width="200px" placeholder="password" />
      <Vue3Input
        type="number"
        align="right"
        width="200px"
        min="1"
        max="9999"
        placeholder="number"
      />
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const warningEn = ``
  const modelData = ref(1111)
  const types = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'talk']
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
