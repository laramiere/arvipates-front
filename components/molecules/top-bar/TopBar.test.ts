import type { TopBarInterface } from '@/interfaces'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TopBar from './TopBar.vue'

const topBarData: TopBarInterface = {
  address: {
    city: 'VERCHAIX',
    createdAt: 'jiuofe',
    documentId: 'nujcioe',
    id: 12,
    href: 'toto.fr',
    lat: 43.564,
    lng: 2.34,
    publishedAt: 'njiogez78',
    street: 'Les Hottes Ouest',
    title: 'Arvipate',
    updatedAt: 'hudizeao',
    zipcode: '74440',
  },
  SocialLink: {
    id: 2,
    title: 'Nous suivre sur les reseaux',
    cta: [{
      external: true,
      href: 'toto.fr',
      id: 1,
      picto: 'Facebook',
      title: 'visiter sur facebook',
      visible: true,
    }],
  },
}

describe('topBar', () => {
  const topBar = mount(TopBar, {
    props: {
      topBar: topBarData,
    },
  })
  const { SocialLink, address } = topBar.props('topBar')

  it('should render correct HTML', () => {
    expect(topBar.html()).toMatchSnapshot()
  })

  it(`should have ${SocialLink.cta.length} social link`, () => {
    expect(topBar.findAll('.c-top-bar__social nav li')).toHaveLength(SocialLink.cta.length)
  })

  it(`should have accessible social link like ${SocialLink.cta[0].title}`, () => {
    expect(topBar.get(`[aria-label="${SocialLink.cta[0].title}"]`)).toBeDefined()
  })

  it(`should have link to google map with address content`, () => {
    const label = 'Visualisez itinéraire dans un nouvel onglet'
    expect(topBar.get(`a[aria-label="${label}"]`).text()).toStrictEqual(`${address.street} - ${address.zipcode} ${address.city.toUpperCase()}`)
  })
})
