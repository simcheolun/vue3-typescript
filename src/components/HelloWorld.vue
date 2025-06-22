<script setup lang="ts">
  const menus = [
    {
      item: { label: 'Components', key: 'components', icon: 'fas fa-square-check' },
      list: [
        { label: 'Vue3Button', key: 'Vue3Button' },
        { label: 'Vue3Check', key: 'Vue3Check' },
        { label: 'Vue3Label', key: 'Vue3Label' },
        { label: 'Vue3Quote', key: 'Vue3Quote' },
        { label: 'Vue3Radio', key: 'Vue3Radio' },
        { label: 'Vue3Select', key: 'Vue3Select' },
        { label: 'Vue3Info', key: 'Vue3Info' },
      ],
    },
    {
      item: { label: 'About', icon: 'fas fa-square-check', disabled: true },
    },
  ]
</script>

<template>
  <Vue3Menu :menus="menus" type="primary" />
</template>

<style scoped lang="scss"></style>
