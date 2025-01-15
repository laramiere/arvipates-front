import type {
  Link,
  Picture,
  SocialComponentInterface,
} from '@/shared/interfaces'

export interface FooterInterface {
  logo: {
    href: string
    picture: Picture
  }
  scrollTopButton: {
    title: string
  }
  socialLink: SocialComponentInterface
  footerNav: Link[]
}
