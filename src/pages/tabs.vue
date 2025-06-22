<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="tabs: TabItem[], activeTab: string, @tab-change event" />
    <pre>
      {{ `<Vue3Tabs
  :tabs="[
    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' }
  ]"
  v-model:activeTab="activeTab"
  @tab-change="handleTabChange"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="tabs-demo">
      <Vue3Tabs :tabs="basicTabs" v-model:activeTab="activeTab" @tab-change="handleTabChange" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Icons</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="icon: string for tab icon" />
    <pre>
      {{ `<Vue3Tabs
  :tabs="[
    { id: 'home', label: 'Home', icon: 'home', content: 'Home content' },
    { id: 'user', label: 'User', icon: 'user', content: 'User content' },
    { id: 'settings', label: 'Settings', icon: 'settings', content: 'Settings content' }
  ]"
  v-model:activeTab="activeTabWithIcons"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="tabs-demo">
      <Vue3Tabs :tabs="tabsWithIcons" v-model:activeTab="activeTabWithIcons" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Disabled Tabs</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="disabled: boolean to disable specific tabs" />
    <pre>
      {{ `<Vue3Tabs
  :tabs="[
    { id: 'active', label: 'Active Tab', content: 'This tab is active' },
    { id: 'disabled', label: 'Disabled Tab', content: 'This tab is disabled', disabled: true }
  ]"
  v-model:activeTab="activeTabDisabled"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="tabs-demo">
      <Vue3Tabs :tabs="disabledTabs" v-model:activeTab="activeTabDisabled" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Custom Content</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="Use slots for custom tab content" />
    <pre>
      {{ `<Vue3Tabs :tabs="customTabs" v-model:activeTab="activeTabCustom">
  <template #tab1>
    <div class="custom-content">
      <h3>Custom Tab 1</h3>
      <p>This is custom content for tab 1</p>
      <button>Custom Button</button>
    </div>
  </template>
  <template #tab2>
    <div class="custom-content">
      <h3>Custom Tab 2</h3>
      <p>This is custom content for tab 2</p>
      <input type="text" placeholder="Custom input" />
    </div>
  </template>
</Vue3Tabs>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="tabs-demo">
      <Vue3Tabs :tabs="customTabs" v-model:activeTab="activeTabCustom">
        <template #tab1>
          <div class="custom-content">
            <h3>Custom Tab 1</h3>
            <p>This is custom content for tab 1</p>
            <button>Custom Button</button>
          </div>
        </template>
        <template #tab2>
          <div class="custom-content">
            <h3>Custom Tab 2</h3>
            <p>This is custom content for tab 2</p>
            <input type="text" placeholder="Custom input" />
          </div>
        </template>
      </Vue3Tabs>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Vertical Tabs</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="orientation: 'vertical' for vertical layout" />
    <pre>
      {{ `<Vue3Tabs
  :tabs="verticalTabs"
  v-model:activeTab="activeTabVertical"
  orientation="vertical"
/>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="tabs-demo vertical-demo">
      <Vue3Tabs :tabs="verticalTabs" v-model:activeTab="activeTabVertical" orientation="vertical" />
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeTab = ref('tab1')
  const activeTabWithIcons = ref('home')
  const activeTabDisabled = ref('active')
  const activeTabCustom = ref('tab1')
  const activeTabVertical = ref('tab1')

  const basicTabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' },
  ]

  const tabsWithIcons = [
    { id: 'home', label: 'Home', icon: 'home', content: 'Home content' },
    { id: 'user', label: 'User', icon: 'user', content: 'User content' },
    { id: 'settings', label: 'Settings', icon: 'settings', content: 'Settings content' },
  ]

  const disabledTabs = [
    { id: 'active', label: 'Active Tab', content: 'This tab is active' },
    { id: 'disabled', label: 'Disabled Tab', content: 'This tab is disabled', disabled: true },
  ]

  const customTabs = [
    { id: 'tab1', label: 'Custom Tab 1' },
    { id: 'tab2', label: 'Custom Tab 2' },
  ]

  const verticalTabs = [
    { id: 'tab1', label: 'Vertical Tab 1', content: 'Vertical content 1' },
    { id: 'tab2', label: 'Vertical Tab 2', content: 'Vertical content 2' },
    { id: 'tab3', label: 'Vertical Tab 3', content: 'Vertical content 3' },
  ]

  const handleTabChange = (tabId: string) => {
    console.log('Tab changed to:', tabId)
  }

  const warningEn = `Tips:
- tabs array contains objects with id, label, content, icon (optional), and disabled (optional).
- activeTab controls which tab is currently active.
- @tab-change event fires when user clicks a tab.
- orientation can be 'horizontal' (default) or 'vertical'.
- Use slots for complex custom content instead of content property.
- disabled tabs cannot be clicked or activated.
- Icons are displayed next to tab labels when provided.
- Tabs are fully responsive and accessible.`
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

  .tabs-demo {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }

  .vertical-demo {
    min-height: 300px;
  }

  .custom-content {
    padding: 20px;
  }

  .custom-content h3 {
    margin-top: 0;
    color: #333;
  }

  .custom-content button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .custom-content input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 200px;
  }
</style>
