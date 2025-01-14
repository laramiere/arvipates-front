import { sliderData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import SliderContent from './SliderContent.vue'

describe('sliderContent', () => {
  const itemNumber: number = sliderData.slides.length
  const wrapper = mount(SliderContent, {
    props: {
      items: sliderData.slides,
    },
  })

  it('should render the correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it(`should have ${itemNumber} displayed images`, () => {
    const slides = wrapper.findAll('.c-slider__item img')
    expect(slides).toHaveLength(itemNumber)
  })
})
