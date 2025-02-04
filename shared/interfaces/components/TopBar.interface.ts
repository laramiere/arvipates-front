import type { SocialLinkInterface } from '@/shared/interfaces'

export interface TopBarInterface {
  social: SocialLinkInterface[]
  address: {
    street: string
    zipcode: string
    city: string
    gmapLink?: string
  }
}
