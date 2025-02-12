import type { StrapiBaseInterface, StrapiCtaInterface, StrapiNavigationItemInterface, TopBarInterface } from '@/interfaces'

export interface HeaderInterface extends StrapiBaseInterface {
  topBar?: TopBarInterface
  navLeft?: {
    id: string
    navigation_items: StrapiNavigationItemInterface[]
  }
  navRight?: {
    id: string
    navigation_items: StrapiNavigationItemInterface[]
  }
  bookCta?: StrapiCtaInterface
}
