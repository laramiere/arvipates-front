import { InstaData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import Insta from './Insta.vue'

describe('insta', () => {
  const wrapper = mount(Insta, {
    props: {
      instaData: InstaData,
    },
  })
  const instaDataItemsLength = wrapper.props('instaData').items.length

  it('should render correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it(`should display a grid of ${instaDataItemsLength} images`, () => {
    const images = wrapper.findAll('.c-insta__content img')
    expect(images).toHaveLength(instaDataItemsLength)
  })

  it('should display a h2 title', () => {
    const title = wrapper.find('section h2')
    expect(title).toBeDefined()
  })
})
