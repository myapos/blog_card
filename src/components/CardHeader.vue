<template>
  <header class="text-lg font-semibold text-neutral-900">{{ header }}</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardHeader',
  props: {
    header: {
      type: String,
      required: true
    }
  }
})
</script>
