<template>
  <app-link>Read More <app-right-arrow /></app-link>
</template>

<script lang="ts">
import AppLink from '@/ui/AppLink.vue'
import AppRightArrow from '@/ui/AppRightArrow.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardReadMore',
  components: { AppLink, AppRightArrow }
})
</script>
