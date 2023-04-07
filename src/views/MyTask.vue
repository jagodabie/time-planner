<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import type { Task } from '@/types/Task'
import { ref } from 'vue'
import ModalBase from '@/components/ui/ModalBase.vue'
const app = getCurrentInstance()
const axios = app?.appContext.config.globalProperties.$axios
const myTasks: Ref<Task[]> = ref([])
const visible: Ref<Boolean> = ref(false)
const selectedTask: Ref<Task | null> = ref(null)

//TODO composable useCreate promise
const getTasks = async () => {
  const response = await axios.get('/tasks/')
  myTasks.value = response.data
}
const handleModalVisibility = () => {
  visible.value = !visible.value
}

const handleClick = (task: Task) => {
  selectedTask.value = task
  handleModalVisibility()
}
const submitForm = () => {
  console.log('submit')
}

try {
  getTasks()
} catch (err) {
  console.log(err)
}
</script>
<template>
  <ul>
    <li v-for="(task, index) in myTasks" :key="index" @click="handleClick(task)">
      <span>{{ task.title }}</span>
      <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
    </li>
  </ul>
  <ModalBase :is-visible="!!visible" @close="handleModalVisibility">
    <template v-slot:modal-header> {{ selectedTask?.title }} </template>
    <template v-slot:modal-body>
      <form @submit.prevent="submitForm">
        <InputBase />
        <button type="button" @click="visible = false">Cancel</button>
        <button type="submit">Accept</button>
      </form>
    </template>
  </ModalBase>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  list-style: none;
}
li {
  font: normal 700 18px/1 sans-serif;
  background-color: rgb(10, 25, 41);
  color: rgb(219, 205, 205);
  width: 30%;
  padding: 1.2rem;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  box-sizing: border-box;
  height: 60px;

  &:hover {
    background-color: rgb(10, 25, 41, 0.9);
    border: solid 1px;
    box-sizing: border-box;
  }
}
span {
  margin-right: 20px;
  background-color: inherit;
}
button {
  padding: 0.3rem 2.2rem;
  margin: 0.5rem;
}
</style>
