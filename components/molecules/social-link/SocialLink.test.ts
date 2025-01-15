import { footerData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SocialLink from './SocialLink.vue'

describe('socialLink', () => {
  const wrapper = mount(SocialLink, {
    props: {
      social: footerData.socialLink,
    },
  })
  const data = wrapper.props('social')

  it('should render correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it(`should display ${data.title} title`, () => {
    expect(wrapper.get('.c-social-link > p').text()).toStrictEqual(data.title)
  })
  it(`should display ${data.items.length} social Link`, () => {
    data.items.forEach((link) => {
      expect(wrapper.get(`a[aria-label="${link.ariaLabel}"]`)).not.toBeUndefined()
    })
  })
})
