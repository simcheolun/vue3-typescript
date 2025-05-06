<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated } from 'vue';
import SimButton from './simButton.vue';
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

/**
 * 변수선언 및 기본값 설정
 */
let message = ref('ㅊㅇㄷㄷ')
/**
 * 클릭이벤트에 사용되는 함수선언
 */
function handlerClick() {
  alert(message.value)
}


// destroyed 
onUnmounted(() => {
  console.log('컴포넌트가 언마운트되었습니다');
})

onBeforeMount(() => {

})

// created
onMounted(() => {
  console.log('컴포넌트가 마운트되었습니다');
})

// updated
onUpdated(() => {
  console.log('컴포넌트가 업데이트되었습니다');
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <blockquote>Button Components - BASE</blockquote>
      <div class="components-area">
        <SimButton @click="handlerClick">PRIMARY</SimButton>
        <SimButton type="info">INFO</SimButton>
        <SimButton type="success">SUCCESS</SimButton>
        <SimButton type="warning">WARNING</SimButton>
        <SimButton type="yellow">YELLOW</SimButton>
      </div>
    </h3>
    <h3>
      <blockquote>Button Components - ROUND</blockquote>
      <div class="components-area">
        <SimButton round="5px">PRIMARY</SimButton>
        <SimButton round="5px" type="info">INFO</SimButton>
        <SimButton round="5px" type="success">SUCCESS</SimButton>
        <SimButton round="5px" type="warning">WARNING</SimButton>
        <SimButton round="5px" type="yellow">YELLOW</SimButton>
      </div>
    </h3>
    <h3>
      <blockquote>Button Components - SIZE</blockquote>
      <div class="components-area">
        <SimButton round="5px" size="sm">PRIMARY-SM</SimButton>
        <SimButton round="5px" size="md">PRIMARY-MD</SimButton>
        <SimButton round="5px" size="lg">PRIMARY-LG</SimButton>
        <SimButton round="5px" size="xl">PRIMARY-XL</SimButton>

      </div>
    </h3>
    <h3>
      <blockquote>Button Components - CODE</blockquote>
      <pre class="components-code">
{{ `<SimButton 
  round="5px" 
  type="success"
  size="md">
  SUCCESS
</SimButton>`}}
        </pre>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  margin-top: 40px;
}

blockquote {
  padding: 0 0.5em;
  border-left: .25em solid #d1d9e0;
  margin: 5px 0px;
  color: #59636e;
}

.components-area {
  margin-top: 15px;
  display: flex;
  gap: 15px;
}

.components-code {
  border: 0;
  color: #eee;
  background-color: #011627;
  padding: 20px;
  text-align: left;
  font-size: 13px;
}


.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
