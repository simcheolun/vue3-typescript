<script setup lang="ts">
import { Ref, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'

onUnmounted(() => { })

onBeforeMount(() => { })

onMounted(() => { })

onUpdated(() => { })

defineProps<{
  msg: string
}>()


function handlerClick() {
  alert('Alert Message')
}


let buttonLabel = ref('BUTTON')

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
let icons = [
  'fas fa-square-plus',
  'fas fa-image',
  'fas fa-trash-can',
  'fas fa-envelope-open',
  'fas fa-file-lines',
  'fas fa-pen-to-square',
  'fas fa-star',
]
let circle = ref(false)

watch(() => circle.value, (newData, oldData) => {
  if (newData) {
    buttonLabel.value = 'B'
  } else {
    buttonLabel.value = 'BUTTON'
  }
}, { immediate: true })

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <h3>
      <Vue3Quote type="info">Button Components - test</Vue3Quote>
      <div style="display: flex;gap:10px;">

        <Vue3Select v-model="size" :list="sizes" keyData="value" label="label" width="200px" />
        <Vue3Select v-model="type" :list="types" keyData="value" label="label" width="200px" />

        <Vue3Check v-model="circle" label="CIRCLE" />

      </div>
      <div class="components-area">
        <Vue3Button :size="size" :type="type" :circle="circle">{{ buttonLabel }}</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        <Vue3Button size="${size}" type="${type}" ${circle ? 'circle' : ''}>${buttonLabel}</Vue3Button>` }}
       </pre>
    </h3>


    <h3>
      <Vue3Quote type="talk">Button Components - Type</Vue3Quote>
      <div class="components-area">
        <Vue3Button size="default" type="primary">PRIMARY</Vue3Button>
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
      <Vue3Quote type="warning">Button Components - Disabled</Vue3Quote>
      <div class="components-area">
        <Vue3Button size="default" type="primary" disabled>PRIMARY</Vue3Button>
        <Vue3Button size="default" type="danger" disabled>DANGER</Vue3Button>
        <Vue3Button size="default" type="warning" disabled>WARNING</Vue3Button>
        <Vue3Button size="default" type="info" disabled>INFO</Vue3Button>
        <Vue3Button size="default" type="default" disabled>DEFAULT</Vue3Button>
        <Vue3Button size="default" type="talk" disabled>TALK</Vue3Button>
        <Vue3Button size="default" type="success" disabled>SUCCESS</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        // disabled?: boolean > true

        <Vue3Button size="default" type="primary" disabled>PRIMARY</Vue3Button>`}}
       </pre>
    </h3>
    <h3>
      <Vue3Quote type="danger">Button Components - Round</Vue3Quote>
      <div class="components-area">
        <Vue3Button size="default" type="success" round="0px">0px</Vue3Button>
        <Vue3Button size="default" type="success" round="3px">3px</Vue3Button>
        <Vue3Button size="default" type="success" round="5px">5px</Vue3Button>
        <Vue3Button size="default" type="success" round="10px">10px</Vue3Button>
        <Vue3Button size="default" type="success" round="15px">15px</Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
        // icon?: string > null

        <Vue3Button size="default" type="success" round="5px">5PX</Vue3Button>
        <Vue3Button size="default" type="success" round="10px">10px</Vue3Button>
        <Vue3Button size="default" type="success" round="15px">15px</Vue3Button>`
        }}
       </pre>
    </h3>
    <h3>
      <Vue3Quote type="primary">Button Components - Circle</Vue3Quote>
      <div class="components-area">
        <Vue3Button size="lg" circle :type="types[item]" :icon="icons[item]" v-for="item in [0, 1, 2, 3, 4, 5, 6]"
          :key="item">
        </Vue3Button>
      </div>
      <pre class="components-code">
        {{ `
         // circle?: boolean > true
         // icon?: string > null

         <Vue3Button size="lg" circle :type="types[item]" :icon="icons[item]" 
         v-for="item in [0, 1, 2, 3, 4, 5, 6]" :key="item">
        </Vue3Button>`
        }}
       </pre>
    </h3>
    <h3>
      <Vue3Quote type="default">Button Components - Size</Vue3Quote>
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
      <Vue3Quote type="info">Button Components - Event</Vue3Quote>
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

<style scoped lang="scss">
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
  color: #ccc;
  background-color: #011627;
  padding: 20px;
  white-space: pre-wrap;
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
