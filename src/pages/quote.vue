<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Type</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'"
    />
    <pre>
                {{ `<Vue3Quote type="..."> label </Vue3Quote>` }}
            </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Quote v-for="(item, index) in types" :key="index" :type="item">{{ item }}</Vue3Quote>
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const warningEn = ``

  const types = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'talk']
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
