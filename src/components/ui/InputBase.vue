<template>
  <div class="input-wrapper">
    <label for="base-input">{{ label }}</label>
    <input :value="modelValue" v-bind="$attrs" />
  </div>
</template>
<script setup lang="ts">
//withDefaults
const props = defineProps<{
  label: String
  modelValue: String | Number
}>()
</script>
