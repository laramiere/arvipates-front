import type { StrapiBaseInterface } from '@/interfaces'

export interface FooterInterface extends StrapiBaseInterface {
  SocialLink: {
    title: string
    cta: {
      title: string
      href: string
      external: boolean
      picto: string
    }[]
  }
  navigation_items: {
    pageTitle: string
    pageLink: string
    visilbe: boolean
  }[]
}
