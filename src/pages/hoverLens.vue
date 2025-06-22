<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Type</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      :content="`
        src:string
        options:{
            scale:number,
            rotate:number,
            width:string
        }
        `"
    />
    <pre>
            {{ `<Vue3HoverLens src='...'
            :options="{ scale: 1.25, rotate: 5, width: '300px' }" />` }}
            </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="buttons">
      <Vue3HoverLens
        src="https://img.lovepik.com/bg/20240103/Free-HD-3D-Maze-Wallpaper-Background_2677289_wh860.jpg!/fw/860"
        :options="{ scale: 1.25, rotate: 5, width: '300px' }"
      />
      <Vue3HoverLens
        src="https://png.pngtree.com/thumb_back/fw800/background/20230525/pngtree-3d-graphics-dark-labyrinth-wallpaper-hd-image_2628673.jpg"
        :options="{ scale: 1.25, rotate: -5, width: '300px' }"
      />
      <Vue3HoverLens
        src="https://img.pikbest.com/ai/illus_our/20230427/64ec735c2cf433fe1433a06baad494d8.jpg!w700wp"
        :options="{ scale: 1.25, rotate: 0, width: '300px' }"
      />
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
