<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="data: string[] (required), options: { delay?, showItems?, height, type? }"
    />
    <pre>{{ basicExample }}</pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="carousel-demo">
      <Vue3Carousel :data="carouselData" :options="basicOptions" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Dot Navigation</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type: 'dot' - Shows dots at bottom for direct slide selection"
    />
    <pre>{{ dotExample }}</pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="carousel-demo">
      <Vue3Carousel :data="carouselData" :options="dotOptions" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Arrow Navigation</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="type: 'arrow' - Shows left/right arrows for manual navigation"
    />
    <pre>{{ arrowExample }}</pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="carousel-demo">
      <Vue3Carousel :data="carouselData" :options="arrowOptions" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Manual Only</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="delay: 0 for manual-only mode" />
    <pre>{{ manualExample }}</pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="carousel-demo">
      <Vue3Carousel :data="carouselData.slice(0, 2)" :options="manualOptions" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - No Navigation</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="type: 'none' - No navigation UI, auto-scroll only" />
    <pre>{{ noneExample }}</pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="carousel-demo">
      <Vue3Carousel :data="carouselData" :options="noneOptions" />
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Options Properties</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="Available options properties" />
    <pre>{{ optionsDoc }}</pre>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const carouselData = [
    'https://img.lovepik.com/bg/20240103/Free-HD-3D-Maze-Wallpaper-Background_2677289_wh860.jpg!/fw/860',
    'https://png.pngtree.com/thumb_back/fw800/background/20230525/pngtree-3d-graphics-dark-labyrinth-wallpaper-hd-image_2628673.jpg',
    'https://img.pikbest.com/ai/illus_our/20230427/64ec735c2cf433fe1433a06baad494d8.jpg!w700wp',
  ]

  // Options configurations
  const basicOptions = ref({
    delay: 3,
    height: '220px',
    type: 'dot',
  })

  const dotOptions = ref({
    delay: 3,
    height: '200px',
    type: 'dot',
  })

  const arrowOptions = ref({
    delay: 2,
    height: '200px',
    type: 'arrow',
  })

  const manualOptions = ref({
    delay: 0,
    height: '180px',
    type: 'arrow',
  })

  const noneOptions = ref({
    delay: 2,
    height: '200px',
    type: 'none',
  })

  // Code examples
  const basicExample = `<Vue3Carousel 
  :data="carouselData"
  :options="{ delay: 3, height: '220px', type: 'dot' }"
/>`

  const dotExample = `<Vue3Carousel 
  :data="carouselData"
  :options="{ delay: 3, height: '200px', type: 'dot' }"
/>`

  const arrowExample = `<Vue3Carousel 
  :data="carouselData"
  :options="{ delay: 2, height: '200px', type: 'arrow' }"
/>`

  const manualExample = `<Vue3Carousel 
  :data="carouselData"
  :options="{ delay: 0, height: '180px', type: 'arrow' }"
/>`

  const noneExample = `<Vue3Carousel 
  :data="carouselData"
  :options="{ delay: 2, height: '200px', type: 'none' }"
/>`

  const optionsDoc = `options: {
  delay?: number,       // Auto-scroll delay in seconds (0 = manual only)
  showItems?: 1,        // Number of items to show (currently fixed to 1)
  height: string,       // Carousel height (e.g., '200px', '50vh')
  type?: 'dot' | 'arrow' | 'none'  // Navigation type
}

Navigation Types:
- 'dot': Shows clickable dots at bottom for direct slide selection
- 'arrow': Shows left/right arrow buttons for manual navigation
- 'none': No navigation UI, relies on auto-scroll and touch/drag`

  const warningEn = `Tips:
- data prop is required and should be an array of image URLs.
- delay: 0 disables auto-scrolling (manual only).
- showItems is currently fixed to 1 (single item view).
- type can be 'dot', 'arrow', or 'none' for navigation UI.
- height sets the carousel container height.
- Supports touch/drag navigation on mobile devices.
- Images are displayed with object-fit: cover for consistent sizing.
- Auto-scroll pauses when user interacts with navigation.
- Navigation arrows use Vue3Icons component internally.`
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

  .carousel-demo {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }
</style>
