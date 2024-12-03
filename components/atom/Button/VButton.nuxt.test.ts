import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import VButton from './VButton.vue'

describe('vButton', () => {
  const wrapper = mount(VButton)
  it('can mount the VButton component', () => {
    expect(wrapper.text()).toBe('Click')
  })
})
