import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import VButtonBurger from './VButtonBurger.vue'

const wrapper = mount(VButtonBurger, {
  props: {
    label: 'Ouvrir le menu',
  },
})

describe('vButtonBurger', () => {
  it('should diplay correctHTML', () => {
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<button data-v-d02c27e8="" class="relative size-12 rounded-full border border-ble-200 bg-ble-100" aria-label="Ouvrir le menu">
        <div data-v-d02c27e8="" class="absolute left-1/2 top-1/2 h-4 w-6 -translate-x-1/2 -translate-y-1/2"><span data-v-d02c27e8="" class="absolute left-0 block h-[2px] w-6 rounded-global bg-ble-200 opacity-100"></span><span data-v-d02c27e8="" class="absolute left-0 block h-[2px] w-6 rounded-global bg-ble-200 opacity-100"></span><span data-v-d02c27e8="" class="absolute left-0 block h-[2px] w-6 rounded-global bg-ble-200 opacity-100"></span></div>
      </button>"
    `)
  })

  it('should be accessible', () => {
    const button = wrapper.get('[aria-label="Ouvrir le menu"]')
    expect(button).toBeDefined()
  })

  it('should emit click event', async () => {
    await wrapper.get('[aria-label="Ouvrir le menu"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
