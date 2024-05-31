<template>
  <img class="img" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CardImage'
})
</script>

<style scoped>
.img {
  width: 100%;
  height: 288px;
  object-fit: cover;
  border-radius: var(--radius);
}
</style>
