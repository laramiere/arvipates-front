import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import VHeader from './VHeader.vue'

describe('vHeader', () => {
  it('can mount the VHeader component and have brand logo', () => {
    const wrapper = mount(VHeader)
    const addressLink = wrapper.find('.c-top-bar__info a')
    const googleAddressLink = 'https://www.google.com/maps/place/Rte+des+Hottes,+74440+Verchaix/@46.0920687,6.6682631,17z/data=!3m1!4b1!4m6!3m5!1s0x478c01f50bf3c017:0xe6a09dc2f11a4224!8m2!3d46.092065!4d6.670838!16s%2Fg%2F11ld14t6rv?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D'
    expect(addressLink.attributes('href')).toBe(googleAddressLink)
  })
})
