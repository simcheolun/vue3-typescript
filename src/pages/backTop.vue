<template>
  <div class="component-container">
    <Vue3BackTop
      :options="{
        position: 'trb',
        visibilityHeight: 200,
        right: '50px',
        bottom: '30px',
        round: '50%',
        type: 'dark',
      }"
    />
  </div>
  <div>
    <div
      v-for="(i, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      :key="index"
      style="height: 250px"
    ></div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const warningEn = ``
  const modelData1 = ref(true)
  const types = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'talk']
  const options = {
    position: 'trb',
    visibilityHeight: 200,
    right: '50px',
    bottom: '30px',
    round: '50%',
    type: 'dark',
  }
</script>

<style scoped></style>
