<template>
  <div
    class="min-h[24px] flex min-w-[67px] place-content-center place-items-center rounded-full
      border-2 border-green-200 bg-green-50 text-sm text-green-700 py-0 px-2"
  >
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
