<template>
    <div class="main-page">
        <Vue3Menu :menus="Menus" type="primary" width="200px" @sub-click="handleMenuClick" />
        <ButtonViews v-if="ActiveMenu == 'Vue3Button'" style="flex:1"/>
        <CheckViews v-if="ActiveMenu == 'Vue3Check'" style="flex:1"/>
        <RadioViews v-if="ActiveMenu == 'Vue3Radio'" style="flex:1"/>
        <QuoteViews v-if="ActiveMenu == 'Vue3Quote'" style="flex:1"/>
        <InputViews v-if="ActiveMenu == 'Vue3Input'" style="flex:1"/>
        <SelectViews v-if="ActiveMenu == 'Vue3Select'" style="flex:1"/>
        <LabelViews v-if="ActiveMenu == 'Vue3Label'" style="flex:1"/>
        <InfoViews v-if="ActiveMenu == 'Vue3Info'" style="flex:1"/>
        <SplitViews v-if="ActiveMenu == 'Vue3Split'" style="flex:1"/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ButtonViews from './buttons.vue'
import CheckViews from './checkbox.vue'
import RadioViews from './radio.vue'
import QuoteViews from './quote.vue'
import InputViews from './input.vue'
import SelectViews from './select.vue'
import LabelViews from './label.vue'
import InfoViews from './info.vue'
import SplitViews from './split.vue'
const Menus = [
    {
        item: { label: 'Components', key: 'components', icon: 'fas fa-square-check' },
        list: [
            { label: 'Vue3Button', key: 'Vue3Button' },
            { label: 'Vue3Check', key: 'Vue3Check' },
            { label: 'Vue3Label', key: 'Vue3Label' },
            { label: 'Vue3Quote', key: 'Vue3Quote' },
            { label: 'Vue3Radio', key: 'Vue3Radio' },
            { label: 'Vue3Input', key: 'Vue3Input' },
            { label: 'Vue3Select', key: 'Vue3Select' },
            { label: 'Vue3Info', key: 'Vue3Info' },
            { label: 'Vue3Split', key: 'Vue3Split' },
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