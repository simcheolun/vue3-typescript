<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="v-model: boolean, label: string, type: string, disabled: boolean"
    />
    <pre>
      {{ `<vue3Check v-model="checked" label="Accept terms and conditions" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="checkbox-demo">
      <vue3Check v-model="checked" label="Accept terms and conditions" />
      <p>Checked: {{ checked }}</p>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Types</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'"
    />
    <pre>
      {{ `<vue3Check v-model="checked" type="primary" label="Primary" />
<vue3Check v-model="checked" type="success" label="Success" />
<vue3Check v-model="checked" type="warning" label="Warning" />
<vue3Check v-model="checked" type="danger" label="Danger" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="checkbox-demo">
      <vue3Check
        v-model="modelData1"
        v-for="(item, index) in types"
        :key="index"
        :type="item"
        :label="item"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Disabled</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="disabled: boolean to disable the checkbox" />
    <pre>
      {{ `<vue3Check v-model="checked" disabled label="Disabled checkbox" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="checkbox-demo">
      <vue3Check
        disabled
        v-model="modelData1"
        v-for="(item, index) in types"
        :key="index"
        :type="item"
        :label="item"
      />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Description</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="description: string for additional text" />
    <pre>
      {{ `<vue3Check
  v-model="newsletter"
  label="Subscribe to newsletter"
  description="Receive updates about new features and releases"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="checkbox-demo">
      <vue3Check
        v-model="newsletter"
        label="Subscribe to newsletter"
        description="Receive updates about new features and releases"
      />
    </div>

    <!-- <Vue3Quote type="default" style="margin-top: 20px">Component - Indeterminate State</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="indeterminate: boolean for partial selection state" />
    <pre>
      {{ `<vue3Check
  v-model="selectAll"
  label="Select all"
  :indeterminate="indeterminate"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="checkbox-demo">
      <vue3Check v-model="selectAll" label="Select all" :indeterminate="indeterminate" />
      <div class="sub-checkboxes">
        <vue3Check v-model="item1" label="Item 1" />
        <vue3Check v-model="item2" label="Item 2" />
        <vue3Check v-model="item3" label="Item 3" />
      </div>
    </div> -->

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'

  const checked = ref(false)
  const modelData1 = ref(true)
  const newsletter = ref(false)
  const selectAll = ref(false)
  const indeterminate = ref(false)
  const item1 = ref(false)
  const item2 = ref(false)
  const item3 = ref(false)

  const types = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'talk']

  // Watch for changes in individual items to update select all state
  watch([item1, item2, item3], ([val1, val2, val3]) => {
    const allChecked = val1 && val2 && val3
    const someChecked = val1 || val2 || val3

    selectAll.value = allChecked
    indeterminate.value = someChecked && !allChecked
  })

  // Watch for changes in select all to update individual items
  watch(selectAll, newVal => {
    item1.value = newVal
    item2.value = newVal
    item3.value = newVal
    indeterminate.value = false
  })

  const warningEn = `Tips:
- v-model is required for two-way data binding.
- label provides the text displayed next to the checkbox.
- type controls the visual appearance (default, primary, success, warning, danger, info, talk).
- disabled prop prevents user interaction.
- description adds additional explanatory text.
- indeterminate shows a partial selection state.
- All standard HTML checkbox attributes are supported.
- Supports keyboard navigation (Space key to toggle).
- Fully accessible with proper ARIA attributes.
- Can be styled with CSS for custom appearance.`
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

  .checkbox-demo {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }

  .checkbox-demo p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }

  .sub-checkboxes {
    margin-top: 10px;
    margin-left: 20px;
  }
</style>
