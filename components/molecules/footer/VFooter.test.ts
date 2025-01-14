import { footerData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import VFooter from './VFooter.vue'

describe('default Layout', () => {
  const footer = mount(VFooter, {
    props: {
      data: footerData,
    },
  })
  const data = footer.props('data')
  const footerBackToTopButton = footer.get(`button[aria-label="${data.scrollTopButton.title}"]`)
  it('should render correct HTML', () => {
    expect(footer.html()).toMatchSnapshot()
  })
  it('display a accessible back top top button', () => {
    expect(footerBackToTopButton).not.toBeUndefined()
  })

  it(`should contain "${data.scrollTopButton.title}" in back to top button`, () => {
    expect(footerBackToTopButton.get('span').text()).toStrictEqual(data.scrollTopButton.title)
  })

  it(`should contain a navigation footer with ${data.footerNav.length} items`, () => {
    expect(footer.findAll('nav li')).toHaveLength(data.footerNav.length)
  })
})
