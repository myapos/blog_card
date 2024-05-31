<template>
  <div
    class="blog-card flex flex-col gap-[--gap] justify-between w-[--card-container-width]
      border-neutral-200 bg-white rounded-[--radius] h-auto mx-auto mt-[--card-margin-top] shadow-lg
      mb-4"
    tabindex="0"
  >
    <card-image :src="imgSrc" :alt="alt" tabindex="0" :aria-hidden="alt ? 'false' : 'true'" />
    <section class="card-content gap-[--gap] p-4 flex flex-col items-start" tabindex="0">
      <card-tag :tag="tag" tabindex="0" />
      <card-header :header="header" tabindex="0" />
      <card-description :description="description" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardDescription from './CardDescription.vue'
import CardTag from './CardTag.vue'
import CardImage from './CardImage.vue'
import CardHeader from './CardHeader.vue'
export default defineComponent({
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
})
</script>
