<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type: string, size: string, disabled: boolean, round: string, circle: boolean"
    />
    <pre>
      {{ `<Vue3Button type="primary" size="default">
  Click me
</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button type="primary" size="default"> Click me </Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Types</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'"
    />
    <pre>
      {{ `<Vue3Button type="default">Default</Vue3Button>
<Vue3Button type="primary">Primary</Vue3Button>
<Vue3Button type="success">Success</Vue3Button>
<Vue3Button type="warning">Warning</Vue3Button>
<Vue3Button type="danger">Danger</Vue3Button>
<Vue3Button type="info">Info</Vue3Button>
<Vue3Button type="talk">Talk</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button size="default" :type="item" v-for="(item, index) in types" :key="index">
        {{ item }}
      </Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Sizes</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="size: 'default' | 'sm' | 'lg'" />
    <pre>
      {{ `<Vue3Button size="sm">Small</Vue3Button>
<Vue3Button size="default">Default</Vue3Button>
<Vue3Button size="lg">Large</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button size="sm">Small</Vue3Button>
      <Vue3Button size="default">Default</Vue3Button>
      <Vue3Button size="lg">Large</Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Disabled</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="disabled: boolean to disable the button" />
    <pre>
      {{ `<Vue3Button disabled>Disabled Button</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button size="default" disabled :type="item" v-for="(item, index) in types" :key="index">
        {{ item }}
      </Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Round</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="round: string for border radius" />
    <pre>
      {{ `<Vue3Button round="0px">0px</Vue3Button>
<Vue3Button round="10px">10px</Vue3Button>
<Vue3Button round="20px">20px</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button size="default" type="primary" round="0px">0px</Vue3Button>
      <Vue3Button size="default" type="primary" round="3px">3px</Vue3Button>
      <Vue3Button size="default" type="primary" round="5px">5px</Vue3Button>
      <Vue3Button size="default" type="primary" round="10px">10px</Vue3Button>
      <Vue3Button size="default" type="primary" round="15px">15px</Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Circle</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="circle: boolean for circular button" />
    <pre>
      {{ `<Vue3Button circle icon="fas fa-plus"></Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button
        size="lg"
        circle
        :type="item"
        :icon="icons[index]"
        v-for="(item, index) in types"
        :key="index"
      >
      </Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Icon</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="icon: string for button icon" />
    <pre>
      {{ `<Vue3Button icon="fas fa-download">Download</Vue3Button>
<Vue3Button icon="fas fa-upload">Upload</Vue3Button>
<Vue3Button icon="fas fa-save">Save</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button icon="fas fa-download">Download</Vue3Button>
      <Vue3Button icon="fas fa-upload">Upload</Vue3Button>
      <Vue3Button icon="fas fa-save">Save</Vue3Button>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Loading State</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="loading: boolean for loading state" />
    <pre>
      {{ `<Vue3Button loading>Loading...</Vue3Button>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3Button loading>Loading...</Vue3Button>
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  const warningEn = `Tips:
- type prop controls button appearance (default, primary, success, warning, danger, info, talk).
- size prop controls button size (sm, default, lg).
- disabled prop prevents button interaction.
- round prop sets border radius (e.g., '5px', '10px').
- circle prop creates circular button (use with icon).
- icon prop adds FontAwesome icon to button.
- loading prop shows loading spinner.
- All standard HTML button attributes are supported.
- Supports keyboard navigation and accessibility features.
- Fully responsive and customizable with CSS.`

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
    padding: 20px;
    border-radius: 5px;
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }
</style>
