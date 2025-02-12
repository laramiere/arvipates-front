import type { StrapiBaseInterface, StrapiSocialLinkInterface } from '@/interfaces'

export interface FooterInterface extends StrapiBaseInterface {
  SocialLink?: StrapiSocialLinkInterface
  navigation_items?: {
    pageTitle: string
    pageLink: string
    visilbe: boolean
  }[]
}
