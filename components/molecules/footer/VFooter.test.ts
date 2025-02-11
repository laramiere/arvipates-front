import { footerData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import VFooter from './VFooter.vue'

describe('vFooter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  const handleScrollTopMock = vi.fn()
  const footer = mount(VFooter, {
    props: {
      data: footerData,
    },
    global: {
      mocks: {
        handleScrollTop: handleScrollTopMock,
      },
    },
  })

  // const data = footer.props('data')
  // const footerBackToTopButton = footer.get(`button[aria-label="${data.scrollTopButton.title}"]`)
  // const socialLink = data.socialLink.items

  it('should render correct HTML', () => {
    expect(footer.html()).toMatchSnapshot()
  })

  // it('display a accessible back top top button', () => {
  //   expect(footerBackToTopButton).not.toBeUndefined()
  // })

  // it('should call handleScrollTop function when user click on back to top button', async () => {
  //   await footerBackToTopButton.trigger('click')
  //   expect(handleScrollTopMock).toHaveBeenCalled()
  // })

  // it(`should contain "${data.scrollTopButton.title}" in back to top button`, () => {
  //   expect(footerBackToTopButton.get('span').text()).toStrictEqual(data.scrollTopButton.title)
  // })

  // it(`should contain a navigation footer with ${data.footerNav.length} items`, () => {
  //   expect(footer.findAll('.c-footer__nav li')).toHaveLength(data.footerNav.length)
  // })

  // it(`shoule display social link`, () => {
  //   socialLink.forEach((link) => {
  //     expect(footer.get(`a[aria-label="${link.ariaLabel}"]`)).not.toBeUndefined()
  //   })
  // })
})
