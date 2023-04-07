<script setup lang="ts">
const props = defineProps({
  isVisible: Boolean
})
</script>
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
        </div>
      </transition>
    </div>
  </transition>
</template>
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
  border-radius: 5px;
}

.modal-body {
  padding: 0.2rem 1rem;
}
</style>
