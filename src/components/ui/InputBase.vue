<script setup lang="ts">
import { type Ref, ref } from 'vue'

export interface Props {
  label: string
  modelValue: string | Number
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: '',
})

const floatlabel: Ref<Boolean> = ref(false)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onBlur = () => {
  if (props.modelValue) return
  floatlabel.value = false
}

const handleInput = (event: Event) => {
  const eventTarget = event.target as HTMLInputElement
  emit('update:modelValue', eventTarget.value)
}
</script>
<template>
  <div class="input-wrapper">
    <label>
      <div class="floating-label" :class="{ 'focus-label': floatlabel }">
        <span>{{ label }}</span>
      </div>
      <input
        :value="modelValue"
        v-bind="$attrs"
        @change="handleInput($event)"
        @focus="() => (floatlabel = true)"
        @blur="() => onBlur()"
      />
    </label>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables/variables';
.input-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  min-height: 2rem;
  margin: 1rem;
}
input {
  border: solid 1px $bg-gray;
  border-radius: 5px;
  width: 100%;
  height: 2rem;

  &:active,
  &:focus,
  &:focus-visible {
    border: solid 1px $bg-gray;
    outline: white;
    outline: solid 2px;
  }
}
label {
  height: 100%;
  display: flex;
  justify-content: center;
}

.floating-label {
  color: white;
  display: inline-block;
  position: absolute;
  top: 6px;
  width: 100%;
  background-color: transparent;
  & > span {
    font: normal 0.8rem;
  }
  &:focus,
  &:focus-visible {
    top: -9px;
    font: small-caps 400 0.8rem sans-serif;
    display: inline-block;
  }
}
.focus-label {
  top: -9px;
  font: small-caps 400 0.8rem sans-serif;
  display: inline-block;
}
</style>
