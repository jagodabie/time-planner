<template>
  <div class="tasks-list">
    <div v-for="(task, index) in tasks" :key="index" class="task" :class="{}">
      {{ task.workDescription }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimeRecord } from '@/types/Task'
const props = defineProps({
  tasks: Array<TimeRecord>
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/variables';
.task {
  width: $width-of-day-row;
  border: $border-gray44;
  margin-top: 1px;
  padding: 2rem;
}
</style>
