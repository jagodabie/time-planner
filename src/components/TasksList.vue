<script setup lang="ts">
import { getMyTasks } from '@/services/TasksService'
import type { Task } from '@/types/Task'
import { ref, type Ref } from 'vue'
const myTasks: Ref<Task[]> = ref([])
const error: Ref<Error | null> = ref(null)

const emit = defineEmits<{
  (e: 'taskClick', task: Task): void
}>()

try {
  myTasks.value = await getMyTasks()
} catch (err: any) {
  error.value = err
  myTasks.value = []
}
</script>
<template>
  <div v-if="error" class="error-message">
    Something went wrong: {{ error.message.toLocaleLowerCase() }}
  </div>
  <Suspense v-else>
    <template #default>
      <ul>
        <li v-for="(task, index) in myTasks" :key="index" @click="emit('taskClick', task)">
          <span>{{ task.title }}</span>
          <font-awesome-icon icon="fa-solid fa-plus" />
        </li>
      </ul>
    </template>
  </Suspense>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables/variables';
@import '@/assets/scss/mixin/mixins';
ul {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  list-style: none;
}
li {
  font: normal 700 18px/1 sans-serif;
  background-color: $button;
  color: rgb(219, 205, 205);
  width: 95%;
  padding: 1.2rem;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  box-sizing: border-box;
  height: 60px;

  @include tablet {
    width: 50%;
  }

  @include desktop {
    width: 30%;
  }

  &:hover {
    background-color: rgb(10, 25, 41, 0.9);
    border: solid 1px;
    box-sizing: border-box;
  }
}

span + svg,
li > span {
  background-color: inherit;
}

li > span > button {
  padding: 0.3rem 2.2rem;
  margin: 0.5rem;
}
</style>
