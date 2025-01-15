import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import Default from './default.vue'

describe('default Layout', () => {
  const layout = mount(Default)
  it('should display footer element', () => {
    const footer = layout.find('footer')
    expect(footer).toBeDefined()
  })
})
