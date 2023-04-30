<script setup lang="ts">
import type { Ref } from 'vue'
import type { Task } from '@/types/Task'
import { ref } from 'vue'
import ModalBase from '@/components/ui/ModalBase.vue'
import InputBase from '@/components/ui/InputBase.vue'
import TasksList from '@/components/TasksList.vue'

const visible: Ref<Boolean> = ref(false)
const selectedTask: Ref<Task | null> = ref(null)
//TODO composable useCreate promise
const time: Ref<string> = ref('')

const handleModalVisibility = () => {
  visible.value = !visible.value
}

const handleClick = (task: Task) => {
  selectedTask.value = task
  handleModalVisibility()
}
const submitForm = () => {
  // HTTP request
  console.log('submit')

  visible.value = false
}
</script>
<template>
  <Suspense>
    <TasksList @task-click="handleClick($event)" />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  <ModalBase :is-visible="!!visible" @close="handleModalVisibility">
    <template v-slot:modal-header> {{ selectedTask?.title }} </template>
    <template v-slot:modal-body>
      <form @submit.prevent="submitForm">
        <InputBase label="Time spent" v-model="time" />
        <button type="button" @click="visible = false">Cancel</button>
        <button type="submit">Accept</button>
      </form>
    </template>
  </ModalBase>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables/variables';
@import '@/assets/scss/mixin/mixins';
button {
  padding: 0.4rem 1.2rem;
  border: solid 1px $button;
  border-radius: 5px;
  margin: 2px;
  background-color: $button;
  &:hover {
    background-color: $button-hover;
  }
  &:focus-visible,
  &:focus {
    outline: solid 1px;
  }
}
</style>
