<template>
  <div class="credits" data-gfe-screenshot-exclude="true">
    A challenge by
    <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank"
      >GreatFrontEnd Projects</a
    >. Built by
    <a :href="`https://www.greatfrontend.com/projects/u/${username}`" target="_blank">{{
      author
    }}</a
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
<style scoped>
.credits {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: #777;
  font-size: 11px;
}

.credits a {
  color: #000;
  font-weight: bold;
}
</style>
