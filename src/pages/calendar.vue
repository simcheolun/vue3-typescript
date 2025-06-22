<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="v-model:options: CalendarOptions, lunar: boolean, memorial: boolean, holiday: boolean"
    />
    <pre>{{ content1 }}</pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="calendar-demo">
      <vue3Calendar v-model:options="basicCalendarOptions">
        <template #default="{ data }">
          <div class="custom-day" v-if="data">
            {{ data.sDay }}
          </div>
        </template>
      </vue3Calendar>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Lunar Calendar</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="lunar: boolean to show lunar calendar" />
    <pre>
     {{ content2 }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="calendar-demo">
      <vue3Calendar v-model:options="lunarOptions">
        <template #default="{ data }">
          <div class="custom-day" v-if="data">
            <small v-if="data.lDay">({{ data.lDay }})</small>
          </div>
        </template>
      </vue3Calendar>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Memorial Days</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="sMemorial: array for solar memorial days, lMemorial: array for lunar memorial days"
    />
    <pre
      >{{ content3 }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="calendar-demo">
      <vue3Calendar v-model:options="memorialOptions">
        <template #default="{ data }">
          <div class="custom-day" v-if="data">
            <div v-if="data.sMemorialDay && data.sMemorialDay.length > 0" class="memorial">
              {{ data.sMemorialDay[0].label }}
            </div>
          </div>
        </template>
      </vue3Calendar>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - With Holidays</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="holiday: boolean to show holidays, term: boolean to show solar terms"
    />
    <pre
      >{{ content4 }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="calendar-demo">
      <vue3Calendar v-model:options="holidayOptions">
        <template #default="{ data }">
          <div class="custom-day" v-if="data">
            <div v-if="data.sholiday && data.sholiday.length > 0" class="holiday">
              {{ data.sholiday[0] }}
            </div>
          </div>
        </template>
      </vue3Calendar>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Data Properties</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="Available data properties in template slot" />
    <pre>
data properties:
- sYear, sMonth, sDay: Solar year, month, day
- lYear, lMonth, lDay: Lunar year, month, day
- isToday: boolean for today
- eMonth, eWeek: English month and week names
- sholiday, lholiday: Solar and lunar holidays
- sMemorialDay, lMemorialDay: Memorial days
- nWeek: Week number (0-6, Sunday-Saturday)
- currentMonth: boolean for current month
- isTerm: boolean for solar term
- term: solar term name
- subStituteHD: substitute holiday flag
    </pre>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const basicCalendarOptions = ref({
    y: 2025,
    m: 6,
    lunar: false,
    memorial: false,
    holiday: false,
    term: false,
    dateController: true,
  })

  const lunarOptions = ref({
    y: 2025,
    m: 6,
    lunar: true,
    memorial: false,
    holiday: false,
    term: false,
    dateController: true,
  })

  const memorialOptions = ref({
    y: 2025,
    m: 6,
    lunar: true,
    memorial: true,
    holiday: false,
    term: false,
    dateController: true,
    sMemorial: [
      {
        day: '2025-6-2',
        label: 'My Birthday',
        info: 'My special day',
        color: '#ff5533',
      },
    ],
    lMemorial: [
      {
        day: '2025-5-8',
        label: 'Lunar Birthday',
        info: 'Lunar calendar birthday',
        color: '#0000ff',
      },
    ],
  })

  const holidayOptions = ref({
    y: 2025,
    m: 6,
    lunar: true,
    memorial: true,
    holiday: true,
    term: true,
    dateController: true,
  })

  const warningEn = `Tips:
- v-model:options is required for calendar configuration.
- y and m set the year and month to display.
- lunar enables lunar calendar display.
- memorial shows custom memorial days.
- holiday displays public holidays.
- term shows solar terms (24 solar terms).
- dateController enables month/year navigation.
- sMemorial and lMemorial arrays define custom memorial days.
- Use template slot for custom day content.
- All data properties are reactive and update automatically.
- Calendar supports both solar and lunar date systems.
- Fully responsive and accessible.`

  const content1 = `<vue3Calendar v-model:options="calendarOptions">
  <template #default="{ data }">
    <!-- Custom content -->
  </template>
</vue3Calendar>`
  const content2 = `<vue3Calendar v-model:options="lunarOptions">
        <template #default="{ data }">
          <div>
            {{ data.sDay }} ({{ data.lDay }})
          </div>
        </template>
      </vue3Calendar>`

  const content3 = `<vue3Calendar v-model:options="memorialOptions">
  <template #default="{ data }">
    <div>
      {{ data.sDay }}
      <div v-if="data.sMemorialDay.length > 0" class="memorial">
        {{ data.sMemorialDay[0].label }}
      </div>
    </div>
  </template>
</vue3Calendar>`
  const content4 = `<vue3Calendar v-model:options="holidayOptions">
  <template #default="{ data }">
    <div>
      {{ data.sDay }}
      <div v-if="data.sholiday.length > 0" class="holiday">
        {{ data.sholiday[0] }}
      </div>
    </div>
  </template>
</vue3Calendar>`
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
    padding: 20px;
    border-radius: 5px;
    margin: 10px 0;
  }

  .calendar-demo {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }

  .custom-day {
    text-align: center;
    font-size: 12px;
  }

  .memorial {
    font-size: 8px;
    color: #ff5533;
    font-weight: bold;
  }

  .holiday {
    font-size: 8px;
    color: #dc3545;
    font-weight: bold;
  }
</style>
