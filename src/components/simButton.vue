<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  type?: 'info' | 'primary' | 'success' | 'warning' | 'yellow'
  round?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fontSize?: string
}>(), {
  label: 'button',
  type: 'primary',
  round: '0px',
  size: 'sm',
  fontSize: '13px',
})
const emit = defineEmits<{
  (e: 'click'): void
}>()
function emitEvent() {
  emit('click')
}
</script>

<template>
  <button :class="['sim-button-' + type, 'sim-button-size-' + size]"
    :style="`--type:${type};--round:${round};--fontSize:${fontSize}`" @click="emitEvent">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped lang="scss">
.sim-body {}

.sim-button-info,
.sim-button-primary,
.sim-button-success,
.sim-button-warning,
.sim-button-yellow {
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: var(--round);
  transition: background-color 0.1s ease-in-out, transform 0.1s ease-in-out;
  font-size: var(--fontSize);
}

.sim-button-info {
  background-color: hsl(0, 0%, 96%);
  color: #222;

  &:hover {
    background-color: hsl(0, 0%, 91%);
  }

  &:active {
    transform: scale(0.95);
    background-color: hsl(0, 0%, 86%);
  }
}

.sim-button-primary {
  background-color: hsl(212, 78%, 42%);
  color: #fff;

  &:hover {
    background-color: hsl(212, 78%, 37%);
  }

  &:active {
    transform: scale(0.95);
    background-color: hsl(212, 78%, 32%);
  }
}

.sim-button-success {
  background-color: hsl(98, 100%, 40%);
  color: #fff;

  &:hover {
    background-color: hsl(98, 100%, 37.5%);
  }

  &:active {
    transform: scale(0.95);
    background-color: hsl(98, 100%, 35%);
  }
}

.sim-button-warning {
  background-color: hsl(0, 100%, 65%);
  color: #fff;

  &:hover {
    background-color: hsl(0, 100%, 62.5%);
  }

  &:active {
    transform: scale(0.95);
    background-color: hsl(0, 100%, 60%);
  }
}

.sim-button-yellow {
  background-color: hsl(55, 100%, 50%);
  color: #222;

  &:hover {
    background-color: hsl(55, 100%, 47.5%);
  }

  &:active {
    transform: scale(0.95);
    background-color: hsl(55, 100%, 45%);
  }
}

.sim-button-size-sm {
  max-height: 25px;
  padding: 5px 10px;
}

.sim-button-size-md {
  max-height: 35px;
  padding: 10px 15px;
}

.sim-button-size-lg {
  max-height: 45px;
  padding: 15px 20px;
}

.sim-button-size-xl {
  max-height: 55px;
  padding: 20px 25px;
}
</style>
