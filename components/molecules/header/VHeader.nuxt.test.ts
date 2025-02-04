import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import VHeader from './VHeader.vue'

describe('vHeader', () => {
  const header = mount(VHeader)
  it('should render good HTML structur', () => {
    expect(header.html()).toMatchSnapshot()
  })
})
