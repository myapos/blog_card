<template>
  <section class="flex flex-wrap justify-center md:flex-row gap-2">
    <template v-for="card in cards" :key="card.id">
      <blog-card
        :imgSrc="card.src"
        :alt="card.alt"
        :header="card.header"
        :tag="card.tag"
        :description="card.description"
      />
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlogCard from './BlogCard.vue'
import img1 from '../assets/pascal-bullan-yL1WPHngUUA-unsplash.jpg'
import img2 from '../assets/peter-thomas--44HYKxIEfo-unsplash.jpg'
import img3 from '../assets/peter-thomas-QsjKrm2eeM4-unsplash.jpg'
import img4 from '../assets/sander-traa-rr2Z2VKELdA-unsplash.jpg'
import img5 from '../assets/spacejoy-YqFz7UMm8qE-unsplash.jpg'

export default defineComponent({
  name: 'CardList',
  components: { BlogCard },
  data() {
    return {
      cards: [
        {
          id: 1,
          src: img1,
          alt: 'A person dives into a serene, turquoise lake surrounded by lush, dense forest. The water splashes around them as they enter, capturing a moment of summer adventure and natural beauty.',
          header: "Embrace the Wild: Dive into Nature's Tranquil Waters",
          tag: '#NatureEscape',
          description:
            "Discover the thrill of diving into the cool, refreshing waters of a hidden forest lake. Surrounded by towering trees and the tranquil sounds of nature, this serene escape is the perfect summer adventure. Embrace the wild, and let the natural beauty of this picturesque setting rejuvenate your spirit. Dive in and experience a moment of pure bliss in nature's untouched sanctuary."
        },
        {
          id: 2,
          src: img2,
          alt: 'A cozy red cabin nestled among dense, lush forest greenery, sitting beside a clear, flowing river. The serene landscape exudes tranquility and the charm of secluded, off-the-grid living.',
          header: 'Find Your Sanctuary: A Riverside Cabin Retreat',
          tag: '#RiversideLiving',
          description:
            'Escape to the tranquility of a riverside cabin, hidden deep within a lush forest. This picturesque retreat offers the perfect blend of cozy comfort and natural beauty, ideal for those seeking solitude and peace. Surrounded by towering trees and the soothing sounds of a flowing river, immerse yourself in nature and rediscover the simple joys of off-the-grid living. Find your sanctuary in this enchanting woodland hideaway.'
        },
        {
          id: 3,
          src: img3,
          alt: 'A tranquil pond with white water lilies floating on its surface, surrounded by lush greenery reflected in the calm water.',
          header: 'Serenity in Bloom: A Water Lily Wonderland',
          tag: 'TranquilBeauty',
          description:
            "Immerse yourself in the peaceful beauty of a water lily-covered pond. Each delicate white bloom floats gracefully on the water's surface, surrounded by lush green lily pads. The serene reflections of the surrounding greenery enhance the tranquility of this picturesque scene. Experience the calming effect of nature’s elegance and let the serenity of this water lily wonderland soothe your soul."
        },
        {
          id: 4,
          src: img4,
          alt: 'A dog joyfully sprinting across a grassy yard, its ears flapping in the wind, tail wagging with excitement.',
          header: 'Playful Dog and Bicycle in the Yard',
          tag: '#dog #bicycle #yard #playful',
          description:
            'Experience the joy of a lively dog running in the yard, its fur dancing in the wind as it races alongside a parked bicycle. The vibrant green grass sets the stage for this playful interaction, capturing a moment of pure fun and movement in a serene outdoor setting.'
        },
        {
          id: 5,
          src: img5,
          alt: 'Cozy and Stylish Living Room Inspiration',
          header: 'Playful Dog and Bicycle in the Yard',
          tag: 'LivingRoomDecor',
          description:
            'Transform your living space into a cozy retreat with this stylish living room setup. Featuring a comfortable couch, chic chair, elegant coffee table, and a soft rug, this room exudes comfort and sophistication. Adorned with potted plants, decorative pillows, and framed pictures, the blend of modern and traditional styles creates a welcoming and relaxing atmosphere perfect for unwinding or entertaining guests. Let this well-appointed living room inspire your own home decor.'
        }
      ]
    }
  }
})
</script>
