<template>
  <div class="hour-list">
    <div v-for="(hour, index) in hours" :key="index" class="hour">
      {{ hour }}
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/variables';
.hour {
  width: $width-of-day-row;
  border: $border-gray44;
  margin-top: 1px;
  padding: 2rem;
}
</style>
