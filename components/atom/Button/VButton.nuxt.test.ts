import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import VButton from './VButton.vue'

const slotContent = 'Mon Bouton'

describe('vButton', () => {
  it('can mount the VButton component', () => {
    const wrapper = mount(VButton, {
      slots: {
        default: slotContent,
      },
    })
    expect(wrapper.text()).toBe(slotContent)
  })
  it('should emit click event', async () => {
    const wrapper = mount(VButton, {
      slots: {
        default: slotContent,
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
