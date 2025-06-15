<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - type</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`${optionsView}`" />
        <pre>
            {{ `<Vue3Calendar v-model:options="calendarOptions">
                <template #default="{ data }">
                    커스텀 내용 
                </template>
</Vue3Calendar>` }}
</pre>
        <Vue3Info type="primary" :content="templateInfo" />
        <Vue3RawSplit margin="5px" label="" />
        <div>
            <Vue3Calendar v-model:options="calendarOptions">
                <template #default="{ data }">
                    <!-- 커스텀 내용 -->
                </template>
            </Vue3Calendar>

        </div>



        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info type="primary" :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = ``
const calendarOptions = ref({
    y: 2025, //new Date().getFullYear(),
    m: 6,//new Date().getMonth()+1,
    lunar: true,
    memorial: true,
    holiday: true,
    term: true,
    dateController: true,
    sMemorial: [
        {
            day: "2025-6-2",
            label: "나의 기념일(양력)",
            info: "미숙이가 태어난 날.",
            // color: '#ff5533'
        },
    ],
    lMemorial: [
        {
            day: "2025-5-8",
            label: "나의 기념일(음력)",
            info: "성숙이가 탄생한 날.",
            // color: "#0000ff"
        },
    ]
})
const optionsView = `
const calendarOptions = ref({
    y: 2025,
    m: 6,
    lunar: true,
    memorial: true,
    holiday: true,
    term: true,
    dateController: true,
    sMemorial: [                            //커스텀 기념일 양력
        {
        day: "2025-6-2",
        label: "나의 기념일(양력)",
                info: "미숙이가 태어난 날.",
                color: '#ff5533'
        },
    ],
    lMemorial: [                           //커스텀 기념일 음력
        {
        day: "2025-5-8",
        label: "나의 기념일(음력)",
                info: "성숙이가 탄생한 날.",
                color: "#0000ff"
        },
    ]
})`
const templateInfo = `
data반환값
example: < template #default="{ data }">...</template >
data value:
    { 
        "sYear": 2025,                  // 년 양력
        "sMonth": 6,                    // 월 양력
        "sDay": 4,                      // 일 양력
        "lYear": 2025,                  // 년 음력
        "lMonth": 5,                    // 월 음력
        "lDay": 9,                      // 일 음력
        "isToday": false,               // 오늘판단
        "eMonth": "Jun",                // 월(English)
        "eWeek": "Wed",                 // 요일(English)
        "sholiday": [],                 // 양력연휴
        "lholiday": [],                 // 음력연휴
        "sMemorialDay": [],             // 양력기념일
        "lMemorialDay": [],             // 음력기념일
        "nWeek": 3,                     // 0~6,일~토
        "currentMonth": true,           // 이번달판단
        "isTerm": false,                // 절기판단
        "term": "",                     // 절기
        "subStituteHD": 0               // 대체휴일 == 1
        }
        `

</script>

<style scoped>
.component-container {
    width: 100%;
    height: 100vh !important;
    overflow: hidden;
    overflow-y: auto;
    padding: 50px;
}

pre {
    font-family: Consolas, 'Courier New', monospace;
    background-color: #011627;
    color: #f4d03f;
    padding-top: 20px;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>