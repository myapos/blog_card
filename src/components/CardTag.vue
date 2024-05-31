<template>
  <div class="tag border-green-200 border-2 bg-green-50 text-green-700 text-sm rounded-full">
    {{ tag }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CardTag',
  props: {
    tag: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>

<style scoped>
.tag {
  min-width: 67px;
  min-height: 24px;
  padding: 0 0.5rem;
  display: flex;
  place-items: center;
  place-content: center;
}
</style>
