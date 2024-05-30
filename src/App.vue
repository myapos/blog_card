<template>
  <app-footer />
  <blog-card />
</template>

<script lang="ts">
import AppFooter from './components/AppFooter.vue'
import BlogCard from './components/BlogCard.vue'

export default {
  name: 'App',
  components: { AppFooter, BlogCard }
}
</script>
