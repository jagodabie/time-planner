<template>
  <transition name="modal">
    <div v-show="isVisible" class="modal">
      <transition name="modal-inner">
        <div v-show="isVisible" class="modal-inner">
          <h1><slot name="modal-header" /></h1>
          <div class="modal-body">
            <slot name="modal-body" />
          </div>
          <div class="modal-footer">
            <slot name="footer" />
          </div>
          <button type="button" @click="emit('close')">Cancel</button>
          <button type="button" @click="emit('confirm')">Accept</button>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script setup lang="ts">
const props = defineProps({
  isVisible: Boolean
})
const emit = defineEmits(['close', 'confirm'])
</script>
<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255, 0.7);
}
.modal-inner {
  width: 500px;
  border: solid 1px;
  padding: 1rem;
}

.modal-body {
  padding: 0.2rem 1rem;
}

button {
  padding: 0.3rem 2.2rem;
  margin: 0.5rem;
}
</style>
