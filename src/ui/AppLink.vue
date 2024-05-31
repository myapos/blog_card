<template>
  <a
    v-if="!disabled"
    href="."
    target="_blank"
    class="focus:outline-none focus:ring-2 ring-gray-200 rounded-md p-1 focus:indigo-800 text-base text-indigo-700 hover:indigo-800"
  >
    <slot></slot>
  </a>
  <div v-else class="text-neutral-400 cursor-not-allowed">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLink',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
