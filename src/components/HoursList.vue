<template>
  <div class="hour-list">
    <div v-for="(hour, index) in hours" :key="index" class="hour">
      <span v-if="props.isHoursColumn">{{ hour }}</span>
      <span v-if="taskPerHour(hour)">{{ taskPerHour(hour) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimeRecord } from '@/types/Task'

const props = defineProps({
  isHoursColumn: Boolean,
  tasks: Array<TimeRecord>
})

const hours: string[] = [
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22'
]

const taskPerHour = (hour: string): string => {
  return props.tasks?.find((el) => el.tasksHour.includes(Number(hour)))?.workDescription ?? ''
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/variables/variables';

.hour {
  width: $width-of-day-row;
  margin-top: 1px;
  height: 80px;
  border: $border-gray44;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-direction: column;
}
.hour > span {
  display: block;
}
p {
  color: red;
}
</style>
