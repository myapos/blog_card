<template>
  <div class="text-base font-medium text-neutral-600 line-clamp-2" tabindex="0">
    {{ description }}
  </div>
  <card-read-more :description="description" tabindex="0" />
</template>

<script lang="ts">
import CardReadMore from './CardReadMore.vue'
export default {
  name: 'CardDescription',
  components: { CardReadMore },
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
