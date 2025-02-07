import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SocialLink from './SocialLink.vue'

describe('socialLink', () => {
  const wrapper = mount(SocialLink, {
    props: {
      social: {
        title: 'test',
        id: 1,
        cta: [{
          external: true,
          href: 'toto',
          id: 1,
          picto: 'Facebook',
          title: 'facebook',
          visible: true,
        }],
      },
    },
  })
  const data = wrapper.props('social')

  it('should render correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it(`should display test title`, () => {
    expect(wrapper.get('.c-social-link > p').text()).toStrictEqual('test')
  })
  it(`should display 1 social Link`, () => {
    data.cta.forEach((link) => {
      expect(wrapper.get(`a[aria-label="${link.title}"]`)).not.toBeUndefined()
    })
  })
})
