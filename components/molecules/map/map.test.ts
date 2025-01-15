import { mount } from '@vue/test-utils'

import { describe, expect, it, vi } from 'vitest'
import Map from './Map.vue'

vi.mock('leaflet', () => {
  return {
    default: {
      map: vi.fn().mockReturnValue({
        setView: vi.fn(),
      }),
    },
  }
})
describe('map', () => {
  const wrapper = mount(Map)

  it('should render the correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have title for accessibility', () => {
    expect(wrapper.get('[aria-label="carte interactive"] h2.sr-only').text()).toBe('Carte interactive')
  })
})
