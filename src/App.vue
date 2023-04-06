<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Week</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
        <RouterLink to="/my-tasks">Task's List - Basic</RouterLink>
        <RouterLink to="/time-report">TimeReport</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/scss/main.scss';
</style>
