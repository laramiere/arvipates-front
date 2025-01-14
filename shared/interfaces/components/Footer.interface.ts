import type {
  Link,
  Picture,
  SocialLinkPictoName,
} from '@/shared/interfaces'

export interface FooterSocialLink {
  ariaLabel: string
  link: string
  picto: SocialLinkPictoName
}

export interface FooterInterface {
  logo: {
    href: string
    picture: Picture
  }
  scrollTopButton: {
    title: string
  }
  socialLink: {
    title: string
    items: FooterSocialLink[]
  }
  footerNav: Link[]
}
