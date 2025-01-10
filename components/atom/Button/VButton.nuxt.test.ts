import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import VButton from './VButton.vue'

const slotContent = 'Mon Bouton'

describe('vButton', () => {
  const wrapper = mount(VButton, {
    slots: {
      default: slotContent,
    },
  })

  it('should render the correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can mount the VButton component', () => {
    expect(wrapper.text()).toBe(slotContent)
  })

  it('should emit click event', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
