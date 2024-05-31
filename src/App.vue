<template>
  <main>
    <blog-card
      :imgSrc="imgSrc"
      alt="top 5 living room inspirations"
      header="Top 5 living room inspirations"
      tag="Interior"
      description="Curated vibrants Colors for your living, make it pop & calm in the same time."
    />

    <!-- uncomment to test a card list approach -->
    <!-- <card-list /> -->
  </main>
  <app-footer author="Myron Apostolakis" username="myapos-598" />
</template>

<script lang="ts">
import AppFooter from './components/AppFooter.vue'
import BlogCard from './components/BlogCard.vue'
import CardList from './components/CardList.vue'
import imgSrc from './assets/spacejoy-YqFz7UMm8qE-unsplash.jpg'

export default {
  name: 'App',
  components: { AppFooter, BlogCard, CardList },
  data() {
    return { imgSrc }
  }
}
</script>
