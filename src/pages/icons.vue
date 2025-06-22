<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="name: string (required), size: string, color: string" />
    <pre>
      {{ `<Vue3Icons name="home" size="24px" color="#333" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="icons-demo">
      <Vue3Icons name="home" size="24px" color="#333" />
      <Vue3Icons name="user" size="24px" color="#007bff" />
      <Vue3Icons name="settings" size="24px" color="#28a745" />
      <Vue3Icons name="search" size="24px" color="#dc3545" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Different Sizes</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="size: string for different icon sizes" />
    <pre>
      {{ `<Vue3Icons name="star" size="16px" />
<Vue3Icons name="star" size="24px" />
<Vue3Icons name="star" size="32px" />
<Vue3Icons name="star" size="48px" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="icons-demo">
      <Vue3Icons name="star" size="16px" color="#ffc107" />
      <Vue3Icons name="star" size="24px" color="#ffc107" />
      <Vue3Icons name="star" size="32px" color="#ffc107" />
      <Vue3Icons name="star" size="48px" color="#ffc107" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Different Colors</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="color: string for different icon colors" />
    <pre>
      {{ `<Vue3Icons name="heart" size="24px" color="#dc3545" />
<Vue3Icons name="heart" size="24px" color="#28a745" />
<Vue3Icons name="heart" size="24px" color="#007bff" />
<Vue3Icons name="heart" size="24px" color="#6c757d" />` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="icons-demo">
      <Vue3Icons name="heart" size="24px" color="#dc3545" />
      <Vue3Icons name="heart" size="24px" color="#28a745" />
      <Vue3Icons name="heart" size="24px" color="#007bff" />
      <Vue3Icons name="heart" size="24px" color="#6c757d" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Common Icons</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="Available icon names" />
    <pre>
      {{
        `Common icons: home, user, settings, search, star, heart, 
edit, delete, add, close, menu, arrow-up, arrow-down, 
check, warning, info, error, download, upload`
      }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="icons-grid">
      <div class="icon-item">
        <Vue3Icons name="home" size="24px" />
        <span>home</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="user" size="24px" />
        <span>user</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="settings" size="24px" />
        <span>settings</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="search" size="24px" />
        <span>search</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="edit" size="24px" />
        <span>edit</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="delete" size="24px" />
        <span>delete</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="add" size="24px" />
        <span>add</span>
      </div>
      <div class="icon-item">
        <Vue3Icons name="close" size="24px" />
        <span>close</span>
      </div>
    </div>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  const warningEn = `Tips:
- name prop is required and should be a valid icon name.
- size can be any valid CSS size (px, em, rem, %).
- color can be any valid CSS color (hex, rgb, named colors).
- Icons are scalable and maintain quality at any size.
- You can use CSS classes to style icons further.
- Icons support hover and focus states for interactivity.`
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

  .icons-demo {
    margin: 20px 0;
    display: flex;
    gap: 20px;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }

  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    background: white;
  }

  .icon-item span {
    font-size: 12px;
    color: #666;
  }
</style>
