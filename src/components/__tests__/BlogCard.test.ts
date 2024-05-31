import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import img1 from '@/assets/pascal-bullan-yL1WPHngUUA-unsplash.jpg'
import BlogCard from '../BlogCard.vue'

describe('BlogCard', () => {
  const cardProps = {
    imgSrc: img1,
    alt: 'A person dives into a serene, turquoise lake surrounded by lush, dense forest. The water splashes around them as they enter, capturing a moment of summer adventure and natural beauty.',
    header: "Embrace the Wild: Dive into Nature's Tranquil Waters",
    tag: '#NatureEscape',
    description:
      "Discover the thrill of diving into the cool, refreshing waters of a hidden forest lake. Surrounded by towering trees and the tranquil sounds of nature, this serene escape is the perfect summer adventure. Embrace the wild, and let the natural beauty of this picturesque setting rejuvenate your spirit. Dive in and experience a moment of pure bliss in nature's untouched sanctuary."
  }

  it('renders properly', () => {
    const wrapper = mount(BlogCard, {
      props: cardProps
    })

    expect(wrapper.get('img')).toBeDefined()
    expect(wrapper.get('img').attributes('src')).toEqual(cardProps.imgSrc)
    expect(wrapper.get('img').attributes('alt')).toEqual(cardProps.alt)
    expect(wrapper.text()).toContain(cardProps.header)
    expect(wrapper.text()).toContain(cardProps.description)
    expect(wrapper.text()).toContain(cardProps.tag)
  })
})
