<script setup lang="ts">
import { ref } from 'vue'
import type { Day, TimeRecord } from '@/types/Task'
import type { Ref } from 'vue'
import { prepareISODateString } from '@/helpers/DateHelpers'
import HoursList from '@/components/HoursList.vue'
import { getCurrentInstance } from 'vue'
import { useGetDaysOfWeeksDate } from '@/composables/useGetDaysOfWeeksDate'

const app = getCurrentInstance()
const axios = app?.appContext.config.globalProperties.$axios
const timeRecords: Ref<TimeRecord[]> = ref([])
const getDisplayDate = (day: Day) => `${day.day} ${day.month} ${day.year}`
const getToday = (day: Day) => day.day === new Date().getDate()
const { weekdaysDates } = useGetDaysOfWeeksDate()

const tasksPerDay = (date: string): TimeRecord[] => {
  return timeRecords.value.filter((task) => task.workDate === date && task.workDescription)
}

const getTimeRecords = async () => {
  const result = await axios.get('/tasks-time/')
  timeRecords.value = result.data
}

try {
  getTimeRecords()
} catch (err) {
  console.log(err)
}
</script>
<template>
  <div class="days-wrapper">
    <div class="hours">
      <div class="title">Time</div>
      <HoursList :is-hours-column="true" />
    </div>
    <div class="day" v-for="(day, index) in weekdaysDates" :key="index">
      <div class="title" :class="{ 'is-today': getToday(day) }">
        <span>{{ day.weekday }}</span>
        <span>{{ getDisplayDate(day) }}</span>
      </div>
      <HoursList :tasks="tasksPerDay(prepareISODateString(day.year, day.monthNumeric, day.day))" />
    </div>
  </div>
  <!-- <ModalBase :is-visible="visible" /> -->
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables/variables';
.days-wrapper {
  display: flex;
  justify-content: center;
  & > div {
    margin: 1px;
  }
}

.day {
  width: $width-of-day-row;
  box-sizing: content-box;
}
.title {
  border: $border-gray44;
  text-align: left;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  box-sizing: border-box;
  height: 80px;
  &.is-today {
    border: rgb(184, 78, 78) solid 2px;
  }

  :last-child {
    color: $bg-gray44;
    font-weight: 100;
    font-size: 10px;
  }
  & > span {
    display: block;
  }
}
</style>
