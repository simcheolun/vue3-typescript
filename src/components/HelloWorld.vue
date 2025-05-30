<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated } from 'vue';
import { ref } from 'vue'

onUnmounted(() => { })

onBeforeMount(() => { })

onMounted(() => { })

onUpdated(() => { })

defineProps<{
  msg: string
}>()

/**
 * 클릭이벤트에 사용되는 함수선언
 */
function handlerClick() {
  alert('Alert Message')
}


let size = ref('default')
let sizes = [
  'sm',
  'default',
  'lg'
]
let type = ref('default')
let types = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'talk'
]
let circle = ref(false)

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <h3>
      <blockquote>Button Components - Custom test</blockquote>
      <div>
        <select v-model="size">
          <option v-for="item in sizes" :key="item">
            {{ item }}
          </option>
        </select>
        <select v-model="type">
          <option v-for="item in types" :key="item">
            {{ item }}
          </option>
        </select>

        <label>
          <input type="checkbox" v-model="circle" />circle
        </label>
      </div>
      <div class="components-area">
        <Vue3Button :size="size" :type="type" :circle="circle">PRIMARY</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        <Vue3Button 
          size="${size}"
          type="${type}">
          Button Label
        </Vue3Button>`}}
       </pre>
    </h3>


    <h3>
      <blockquote>Button Components - Type</blockquote>
      <div class="components-area">
        <Vue3Button size="default" type="primary" ccc>PRIMARY</Vue3Button>
        <Vue3Button size="default" type="danger">DANGER</Vue3Button>
        <Vue3Button size="default" type="warning">WARNING</Vue3Button>
        <Vue3Button size="default" type="info">INFO</Vue3Button>
        <Vue3Button size="default" type="default">DEFAULT</Vue3Button>
        <Vue3Button size="default" type="talk">TALK</Vue3Button>
        <Vue3Button size="default" type="success">SUCCESS</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        // type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'talk'

        <Vue3Button 
          size="default"
          type="default">
          Button Label
        </Vue3Button>`}}
       </pre>
    </h3>
    <h3>
      <blockquote>Button Components - Round</blockquote>
      <div class="components-area">
        <Vue3Button size="default" type="success" round="5px">5PX</Vue3Button>
        <Vue3Button size="default" type="success" round="10px">10PX</Vue3Button>
        <Vue3Button size="default" type="success" round="15px">15px</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        <Vue3Button size="default" type="success" round="5px">5PX</Vue3Button>
        <Vue3Button size="default" type="success" round="10px">10px</Vue3Button>
        <Vue3Button size="default" type="success" round="15px">15px</Vue3Button>`
        }}
       </pre>
    </h3>
    <h3>
      <blockquote>Button Components - Circle</blockquote>
      <div class="components-area">
        <Vue3Button size="lg" :circle="true" :type="[
          'default', 'primary', 'success', 'warning', 'danger', 'info', 'talk'
        ][item]" v-for="item in [0, 1, 2, 3, 4, 5, 6]" :key="item">
          {{ item }}
        </Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        // circle?: true

         <Vue3Button size="lg" 
        :circle="true" 
        :type="[
          'default', 'primary','success','warning','danger','info','talk'
          ][item]" 
          v-for="item in [0,1,2,3,4,5,6]" 
          :key="item">
          \{\{item\}\}
        </Vue3Button>`
        }}
       </pre>
    </h3>
    <h3>
      <blockquote>Button Components - Size</blockquote>
      <div class="components-area">
        <Vue3Button size="sm" type="default">SMALL</Vue3Button>
        <Vue3Button size="default" type="default">DEFAULT</Vue3Button>
        <Vue3Button size="lg" type="default">LARGE</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        // size?: 'sm' | 'default' | 'lg'

        <Vue3Button size="sm" type="default">SMALL</Vue3Button>
        <Vue3Button size="default" type="default">DEFAULT</Vue3Button>
        <Vue3Button size="lg" type="default">LARGE</Vue3Button>`
        }}
       </pre>
    </h3>
    <h3>
      <blockquote>Button Components - Event</blockquote>
      <div class="components-area">
        <Vue3Button size="default" type="default" @click="handlerClick">Alert Message</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        <Vue3Button 
          size="default"
          type="default" 
          @click="handlerClick">
          Alert Message
        </Vue3Button>
        
        function handlerClick(){ 
          alert('Alert Message') 
        }`}}
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
  display: flex;
  padding: 0 0.5em;
  border-left: .25em solid #d1d9e0;
  margin: 5px 0px;
  color: #59636e;
}

.components-area {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.components-code {
  font-family: Consolas, 'Courier New', monospace;
  margin-top: 10px;
  border: 0;
  color: #eee;
  background-color: #011627;
  padding: 20px;
  text-align: left;
  font-size: 14px;
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
