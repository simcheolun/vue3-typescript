<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - height</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="height?: string" />
    <pre>
            {{ `<Vue3GraphBar height="15px" />` }}
        </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div>
      <Vue3GraphBar
        :options="[
          { value: 960000, label: '매출', type: 'primary' },
          { value: 700000, label: '수익', type: 'success' },
        ]"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - showInfo</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="showInfo?: boolean" />
    <pre>
            {{ `<Vue3GraphBar showInfo />` }}
        </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div>
      <Vue3GraphBar
        showInfo
        :options="[
          { value: 960000, label: '매출', type: 'primary' },
          { value: 700000, label: '수익', type: 'success' },
        ]"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - options Structure</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      :content="`
        options : [
            {
                value: string | number
                label: string | number
                type: primary , success , warning , danger , info , talk
            }
        ]
        `"
    />

    <Vue3Quote type="default" style="margin-top: 20px">Component - example</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <pre>
            {{ `const options = ref([
                { value: 960000, label: '매출', type: 'primary' },
                { value: 700000, label: '수익', type: 'success' },
                { value: 500000, label: '세금', type: 'warning' },
                { value: 500000, label: '차액', type: 'danger' },
                { value: 250000, label: '공과금', type: 'info' },
                { value: 450000, label: '급여', type: 'talk' },
            ])
            <Vue3GraphBar showInfo height="25px" :options="options" />`}}
        </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="button s">
      <Vue3GraphBar showInfo height="25px" :options="options" />
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { nextTick } from 'process'
  import { computed, ref } from 'vue'
  const warningEn = ``

  const options = ref(initOptions())

  function initOptions() {
    return [
      { value: 960000, label: '매출', type: 'primary' },
      { value: 700000, label: '수익', type: 'success' },
      { value: 500000, label: '세금', type: 'warning' },
      { value: 500000, label: '차액', type: 'danger' },
      { value: 250000, label: '공과금', type: 'info' },
      { value: 450000, label: '급여', type: 'talk' },
    ]
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
