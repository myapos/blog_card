<template>
  <div class="blog-card border-neutral-200 bg-white" tabindex="0">
    <card-image :src="imgSrc" :alt="alt" tabindex="0" :aria-hidden="alt ? 'false' : 'true'" />
    <section class="card-content" tabindex="0">
      <card-tag :tag="tag" tabindex="0" />
      <card-header :header="header" tabindex="0" />
      <card-description :description="description" />
    </section>
  </div>
</template>

<script lang="ts">
import CardDescription from './CardDescription.vue'
import CardTag from './CardTag.vue'
import CardImage from './CardImage.vue'
import CardHeader from './CardHeader.vue'
export default {
  name: 'BlogCard',
  components: { CardDescription, CardTag, CardImage, CardHeader },
  props: {
    imgSrc: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      required: true,
      default: ''
    },
    tag: {
      type: String,
      required: true
    },
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-card {
  width: 340px;
  margin-top: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: var(--gap);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: start;
}
</style>
