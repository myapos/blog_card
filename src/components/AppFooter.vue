<template>
  <div
    class="credits fixed bottom-6 left-1/2 translate-x-[-50%] text-xs text-[--footer-text-color]
      text-center"
    data-gfe-screenshot-exclude="true"
  >
    A challenge by
    <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank"
      >GreatFrontEnd Projects</a
    >. Built by
    <a
      :href="`https://www.greatfrontend.com/projects/u/${username}`"
      target="_blank"
      class="font-bold text-black"
      >{{ author }}</a
    >.
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppFooter',
  props: {
    author: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
})
</script>
