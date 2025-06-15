<template>
    <div class="component-container">
        <Vue3Quote type="default" style="margin-top: 5px;">Component - 지정월의 모든 날 및 공휴 및 기념일 (1 ~ 말일)</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="Vue3CalendarData(y:number,m:number)" />
        <pre>
            {{ `//JavaStript
            console.log('Calendar Info',Vue3Solar2Lunar(2025,11)` }}
        </pre>
        <Vue3Info type="primary" :content="``" />
        <Vue3RawSplit margin="5px" label="" />

        <Vue3Quote type="default" style="margin-top: 20px;">Component - 양력 > 음력</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="Vue3CalendarData(y:number,m:numberd:number)" />
        <pre>
            {{ `//JavaStript
            console.log(Vue3Solar2Lunar(2025,12,3))` }}
        </pre>
        <Vue3Info type="primary" :content="Solar2LunarString" />

        <Vue3Quote type="default" style="margin-top: 20px;">Component - 음력 > 양력</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" content="Vue3Lunar2Solar(y:number,m:numberd:number)" />
        <pre>
            {{ `//JavaStript
            console.log(Vue3Lunar2Solar(2025,1,1))` }}
        </pre>
        <Vue3Info type="primary" :content="Lunar2SolarStr" />



    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Vue3CalendarData, Vue3Solar2Lunar, Vue3Lunar2Solar } from 'vue3-uiex-light-ts';
const warningEn = ``

const calendarInfo = ref([]);
calendarInfo.value = Vue3CalendarData(2025, 1);

const Solar2Lunar = Vue3Solar2Lunar(1977,11,7)
const Solar2LunarString = `{
  lYear: 2025,           // 음력 년
    lMonth: 10,            // 음력 월
    lDay: 14,              // 음력 일
    animal: "뱀",          // 십이지 동물 띠 (뱀띠)
    cYear: "二〇二五年",     // 한자 년도
    cMonth: "十月",         // 한자 월
    cDay: "十四",           // 한자 일
    nYear: 2025,           // 양력 년
    nMonth: 12,            // 양력 월
    nDay: 3,               // 양력 일
    kDay: "열나흘"          // 한글 음력 일
    kMonth: "십월"          // 한글 음력 월
    kWeek: "수요일"         // 한글 음력 요일
    kYear: "이공이오년"     // 한글 음력 년
    gzYear: "을사",        // 간지(천간지지) 년
    gzMonth: "정해",       // 간지 월
    gzDay: "병오",         // 간지 일
    isToday: false,        // 오늘 날짜 여부
    isLeap: false,         // 음력 윤달 여부
    nWeek: 3,              // 숫자 요일 (0:일, 1:월, ..., 3:수)
    cWeek: "星期三",        // 한자 요일
    isTerm: false,         // 절기 여부
    term: "",              // 절기 이름 (예: 입춘, 입하 등)
    lWeek: "水",           // 음력 요일 한자
    eMonth: "Dec",         // 영문 월
    eWeek: "Wed",          // 영문 요일
    kWeek: "수요일",       // 한글 요일
    lholiday: [],          // 음력 명절 배열
    sholiday: [],          // 양력 공휴일 배열
    sMemorialDay: [        // 양력 기념일 배열
        { 
        day: "12-3", 
        label: "12·3 국민주권 수호의 날", 
        info: "불법적 계엄 시도에 맞서 시민들이 자유와 민주주의를 지켜낸 날." 
        }
    ],
    lMemorialDay: []       // 음력 기념일 배열
}`

const Lunar2Solar = Vue3Lunar2Solar(1977, 9,26)
const Lunar2SolarStr = ` {
    lYear: 2025,           // 음력 년
        lMonth: 1,             // 음력 월
        lDay: 1,               // 음력 일
        animal: "뱀",          // 십이지 동물 띠 (뱀띠)
        cYear: "二〇二五年",     // 한자 년도
        cMonth: "正月",          // 한자 음력 월 (정월)
        cDay: "初一",            // 한자 음력 일 (초하루)
        nYear: 2025,           // 양력 년
        nMonth: 1,             // 양력 월
        nDay: 29,              // 양력 일
        gzYear: "갑진",         // 간지 년
        gzMonth: "정축",         // 간지 월
        gzDay: "무술",           // 간지 일
        isToday: false,        // 오늘 날짜 여부
        isLeap: false,         // 음력 윤달 여부
        nWeek: 3,              // 숫자 요일 (0:일요일, 3:수요일)
        cWeek: "星期三",        // 한자 요일 (수요일)
        isTerm: false,         // 절기 여부
        term: "",              // 절기 이름 (없음)
        lWeek: "水",           // 음력 요일 한자 (수요일)
        eMonth: "Jan",         // 영문 월
        eWeek: "Wed",          // 영문 요일
        kWeek: "수요일",       // 한글 요일
        lholiday: [],          // 음력 명절 배열 (없음)
        sholiday: [],          // 양력 공휴일 배열 (없음)
        sMemorialDay: [],      // 양력 기념일 배열 (없음)
        lMemorialDay: []       // 음력 기념일 배열 (없음)
}`
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