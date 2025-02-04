import { topBarData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TopBar from './TopBar.vue'

describe('topBar', () => {
  const topBar = mount(TopBar, {
    props: {
      topBar: topBarData,
    },
  })
  const { social, address } = topBar.props('topBar')

  it('should render correct HTML', () => {
    expect(topBar.html()).toMatchSnapshot()
  })

  it(`should have ${social.length} social link`, () => {
    expect(topBar.findAll('.c-top-bar__social nav li')).toHaveLength(social.length)
  })

  it(`should have accessible social link like ${social[0].ariaLabel}`, () => {
    expect(topBar.get(`[aria-label="${social[0].ariaLabel}"]`)).toBeDefined()
  })

  it(`should have link to google map with address content`, () => {
    const label = 'Visualisez itinéraire dans un nouvel onglet'
    expect(topBar.get(`a[aria-label="${label}"]`).text()).toStrictEqual(`${address.street} - ${address.zipcode} ${address.city.toUpperCase()}`)
  })
})
