<template>
    <div class="main-page">
        <Vue3Menu :menus="Menus" type="dark" width="200px" @sub-click="handleMenuClick" />
        <ButtonViews v-if="ActiveMenu == 'Vue3Button'" style="flex:1"/>
        <CheckViews v-if="ActiveMenu == 'Vue3Check'" style="flex:1"/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ButtonViews from './buttons.vue'
import CheckViews from './checkbox.vue'
const Menus = [
    {
        item: { label: 'Components', key: 'components', icon: 'fas fa-square-check' },
        list: [
            { label: 'Vue3Button', key: 'Vue3Button' },
            { label: 'Vue3Check', key: 'Vue3Check' },
            { label: 'Vue3Label', key: 'Vue3Label' },
            { label: 'Vue3Quote', key: 'Vue3Quote' },
            { label: 'Vue3Radio', key: 'Vue3Radio' },
            { label: 'Vue3Select', key: 'Vue3Select', disabled: true },
            { label: 'Vue3Info', key: 'Vue3Info' },
        ]
    },
]

let ActiveMenu = ref('Vue3Button')
function handleMenuClick(data: any) {
    ActiveMenu.value = data
}

</script>

<style scoped>
body {
    font-family: Consolas, 'Courier New', monospace;
}

.main-page {
    /* text-align: center; */
    display: flex;
    gap: 10px;
}


</style>