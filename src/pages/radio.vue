<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Type</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'"
    />
    <pre>
            {{ `<Vue3Check v-model="modelData" type="..." label="checked"/>` }}
        </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="danger" :list="labels" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Disabled</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="disabled?: boolean > true" />
    <pre>
            {{ `<Vue3Check v-model="modelData" disabled label="checked"/>` }}
        </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio disabled v-model="modelData" type="default" :list="[labels[0]]" />
      <Vue3Radio disabled v-model="modelData" type="primary" :list="[labels[0]]" />
      <Vue3Radio disabled v-model="modelData" type="success" :list="[labels[0]]" />
      <Vue3Radio disabled v-model="modelData" type="warning" :list="[labels[0]]" />
      <Vue3Radio disabled v-model="modelData" type="danger" :list="[labels[0]]" />
      <Vue3Radio disabled v-model="modelData" type="info" :list="[labels[0]]" />
      <Vue3Radio disabled v-model="modelData" type="talk" :list="[labels[0]]" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - example button</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="button?: boolean > true" />
    <pre>
            {{ `<Vue3Radio button v-model="modelData" type="primary" :list="[
                { type: 'Male' },
                { type: 'Female' },
            ]" keyData="type" />` }}
        </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" button :list="MultiLabels" keyData="type" />
    </div>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="primary" button :list="MultiLabels" keyData="type" />
    </div>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="success" button :list="MultiLabels" keyData="type" />
    </div>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="warning" button :list="MultiLabels" keyData="type" />
    </div>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="danger" button :list="MultiLabels" keyData="type" />
    </div>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="info" button :list="MultiLabels" keyData="type" />
    </div>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Radio v-model="modelData" type="talk" button :list="MultiLabels" keyData="type" />
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const warningEn = ``
  const modelData = ref('Male')
  const labels = ['Male', 'Female']

  const MultiLabels = [{ type: 'Male' }, { type: 'Female' }]
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
