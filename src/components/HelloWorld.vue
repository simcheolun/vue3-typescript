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
  <div style="display: flex;gap:10px;margin: 10px;">
  
  </div>
  <div style="display: flex;gap:10px;margin: 10px;">
    <Vue3Button size="sm" type="default">SMALL</Vue3Button>
    <Vue3Button size="default" type="default">DEFAULT</Vue3Button>
    <Vue3Button size="lg" type="default">LARGE</Vue3Button>
  </div>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <blockquote>Button Components - BASE</blockquote>
      <div class="components-area">
        <Vue3Button size="default" type="primary">PRIMARY</Vue3Button>
        <Vue3Button size="default" type="danger">DANGER</Vue3Button>
        <Vue3Button size="default" type="warning">WARNING</Vue3Button>
        <Vue3Button size="default" type="info">INFO</Vue3Button>
        <Vue3Button size="default" type="default">DEFAULT</Vue3Button>
        <Vue3Button size="default" type="talk">TALK</Vue3Button>
        <Vue3Button size="default" type="success">SUCCESS</Vue3Button>
      </div>
    </h3>
    <h3>
      <blockquote>Button Components - ROUND</blockquote>
      <div class="components-area">
  
      </div>
    </h3>
    <h3>
      <blockquote>Button Components - SIZE</blockquote>f
      <div class="components-area">
  
  
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
