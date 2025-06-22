<template>
  <div class="main-page">
    <div>
      <vue3Menu :menu="Menus" @menu-click="handleMenuClick" />
    </div>

    <!-- <Vue3Menu :menus="Menus" type="primary" width="200px" @sub-click="handleMenuClick" /> -->
    <div style="flex: 1">
      <div v-if="ActiveMenu == 'Guide'" style="flex: 1">
        <GuideViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Button'" style="flex: 1">
        <ButtonViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Check'" style="flex: 1">
        <CheckViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Radio'" style="flex: 1">
        <RadioViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Quote'" style="flex: 1">
        <QuoteViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Input'" style="flex: 1">
        <InputViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Select'" style="flex: 1">
        <SelectViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Label'" style="flex: 1">
        <LabelViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Info'" style="flex: 1">
        <InfoViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Split'" style="flex: 1">
        <SplitViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Table'" style="flex: 1">
        <TableViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3GraphBar'" style="flex: 1">
        <GraphBarViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Dialog'" style="flex: 1">
        <DialogViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3CalendarData'" style="flex: 1">
        <CalendarFunctionViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Calendar'" style="flex: 1">
        <CalendarViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3HoverLens'" style="flex: 1">
        <HoverLens />
      </div>
      <div v-if="ActiveMenu == 'Vue3BackTop'" style="flex: 1">
        <backTopViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Carousel'" style="flex: 1">
        <CarouselViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Icons'" style="flex: 1">
        <IconsViews />
      </div>
      <div v-if="ActiveMenu == 'Vue3Tabs'" style="flex: 1">
        <TabsViews />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ButtonViews from './buttons.vue'
  import CheckViews from './checkbox.vue'
  import RadioViews from './radio.vue'
  import QuoteViews from './quote.vue'
  import InputViews from './input.vue'
  import SelectViews from './select.vue'
  import LabelViews from './label.vue'
  import InfoViews from './info.vue'
  import SplitViews from './split.vue'
  import TableViews from './table.vue'
  import GraphBarViews from './graphbar.vue'
  import GraphBarVTViews from './graphbarVT.vue'
  import DialogViews from './dialog.vue'
  import CalendarFunctionViews from './calendarFunction.vue'
  import CalendarViews from './calendar.vue'
  import GuideViews from './guide.vue'
  import HoverLens from './hoverLens.vue'
  import backTopViews from './backTop.vue'
  import CarouselViews from './carousel.vue'
  import IconsViews from './icons.vue'
  import TabsViews from './tabs.vue'

  // const onSubmenuExpand = (index, expanded) => {
  //   console.log(`Submenu ${index} ${expanded ? 'expanded' : 'collapsed'}`)
  // }

  const router = useRouter()
  const ActiveMenu = ref('Guide')

  const handleMenuClick = (item: any) => {
    if (item.type == 'menu') {
      ActiveMenu.value = item.item.key
      router.push({ path: '/', query: { m: item.item.key } })
    }
    if (item.type == 'submenu') {
      ActiveMenu.value = item.subItem.key
      router.push({ path: '/', query: { m: item.item.key, s: item.subItem.key } })
    }
  }

  const Menus = [
    {
      key: 'Guide',
      label: 'Guide',
      icon: '',
      children: [],
    },

    { key: 'Vue3Button', label: 'Vue3Button' },
    { key: 'Vue3Check', label: 'Vue3Check' },
    { key: 'Vue3Label', label: 'Vue3Label' },
    { key: 'Vue3Quote', label: 'Vue3Quote' },
    { key: 'Vue3Radio', label: 'Vue3Radio' },
    { key: 'Vue3Input', label: 'Vue3Input' },
    { key: 'Vue3Select', label: 'Vue3Select' },
    { key: 'Vue3Info', label: 'Vue3Info' },
    { key: 'Vue3Split', label: 'Vue3Split' },
    { key: 'Vue3Table', label: 'Vue3Table' },
    { key: 'Vue3GraphBar', label: 'Vue3GraphBar' },
    { key: 'Vue3Dialog', label: 'Vue3Dialog' },
    { key: 'Vue3CalendarData', label: 'Vue3CalendarData' },
    { key: 'Vue3Calendar', label: 'Vue3Calendar' },
    { key: 'Vue3HoverLens', label: 'Vue3HoverLens' },
    { key: 'Vue3BackTop', label: 'Vue3BackTop' },
    { key: 'Vue3Carousel', label: 'Vue3Carousel' },
    { key: 'Vue3Icons', label: 'Vue3Icons' },
    { key: 'Vue3Tabs', label: 'Vue3Tabs' },
  ]
</script>

<style scoped>
  body {
    font-family: Consolas, 'Courier New', monospace;
  }

  .main-page {
    /* text-align: center; */
    width: 100%;
    display: flex;
    gap: 10px;
  }
</style>
