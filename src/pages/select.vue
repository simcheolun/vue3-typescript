<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="v-model: any, list: any[], label: string, keyData: string, size: string, disabled: boolean"
    />
    <pre>
      {{ `<vue3Select
  v-model="selectedValue"
  :list="[
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
  ]"
  label="name"
  keyData="value"
  size="default"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="select-demo">
      <vue3Select
        v-model="selectedValue"
        :list="basicOptions"
        label="name"
        keyData="value"
        size="default"
        width="200px"
      />
      <p>Selected: {{ selectedValue }}</p>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Sizes</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="size: 'sm' | 'default' | 'lg'" />
    <pre>
      {{ `<vue3Select size="sm" />
<vue3Select size="default" />
<vue3Select size="lg" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="select-demo">
      <vue3Select
        v-model="modelData1"
        :list="basicOptions"
        label="name"
        keyData="value"
        size="sm"
        width="150px"
      />
      <vue3Select
        v-model="modelData1"
        :list="basicOptions"
        label="name"
        keyData="value"
        size="default"
        width="150px"
      />
      <vue3Select
        v-model="modelData1"
        :list="basicOptions"
        label="name"
        keyData="value"
        size="lg"
        width="150px"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Disabled</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="disabled: boolean to disable the select" />
    <pre>
      {{ `<vue3Select disabled />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="select-demo">
      <vue3Select
        v-model="modelData1"
        :list="basicOptions"
        label="name"
        keyData="value"
        size="default"
        width="200px"
        disabled
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Placeholder</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="placeholder: string for placeholder text" />
    <pre>
      {{ `<vue3Select
  v-model="selectedValue"
  :list="options"
  label="name"
  keyData="value"
  placeholder="Select an option..."
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="select-demo">
      <vue3Select
        v-model="selectedValue"
        :list="basicOptions"
        label="name"
        keyData="value"
        placeholder="Select an option..."
        width="200px"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Multiple Selection</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="multiple: boolean for multiple selection" />
    <pre>
      {{ `<vue3Select
  v-model="multipleValues"
  :list="options"
  label="name"
  keyData="value"
  :multiple="true"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="select-demo">
      <vue3Select
        v-model="multipleValues"
        :list="basicOptions"
        label="name"
        keyData="value"
        :multiple="true"
        width="200px"
      />
      <p>Selected: {{ multipleValues }}</p>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Search</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="searchable: boolean for search functionality" />
    <pre>
      {{ `<vue3Select
  v-model="selectedValue"
  :list="options"
  label="name"
  keyData="value"
  :searchable="true"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="select-demo">
      <vue3Select
        v-model="selectedValue"
        :list="searchableOptions"
        label="name"
        keyData="value"
        :searchable="true"
        width="200px"
      />
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const selectedValue = ref(null)
  const modelData1 = ref(null)
  const multipleValues = ref([])

  const basicOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 },
  ]

  const searchableOptions = [
    { name: 'Apple', value: 'apple' },
    { name: 'Banana', value: 'banana' },
    { name: 'Cherry', value: 'cherry' },
    { name: 'Date', value: 'date' },
    { name: 'Elderberry', value: 'elderberry' },
    { name: 'Fig', value: 'fig' },
    { name: 'Grape', value: 'grape' },
  ]

  const warningEn = `Tips:
- v-model is required for two-way data binding.
- list contains objects with display and value properties.
- label specifies which property to display in the dropdown.
- keyData specifies which property to use as the value.
- size can be 'sm', 'default', or 'lg'.
- disabled prop prevents user interaction.
- placeholder provides helpful text when no option is selected.
- multiple prop allows selecting multiple options.
- searchable prop enables filtering options by typing.
- width prop controls the select width.
- All standard HTML select attributes are supported.
- Supports keyboard navigation and accessibility features.`
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
    padding: 20px;
    border-radius: 5px;
    margin: 10px 0;
  }

  .select-demo {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }

  .select-demo p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
</style>
