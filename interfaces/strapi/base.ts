import type { ComponentNameType } from '@/interfaces'

export type StrapiComponentName = ComponentNameType
export interface StrapiBaseInterface {
  createdAt: string
  documentId: string
  id: number
  publishedAt: string
  updatedAt: string
}

export interface StrapiComponentBaseInterface {
  __component: StrapiComponentName
  id: number
}
export interface StrapiAddressInterface extends StrapiBaseInterface {
  title: string
  street: string
  zipcode: string
  city: string
  lat: number
  lng: number
  href: string
}
export interface StrapiNavigationItemInterface extends StrapiBaseInterface {
  pageTitle: string
  pageLink: string
  visible: boolean
}

export interface StrapiCtaInterface {
  id: number
  title: string
  href: string
  external: boolean
  visible: boolean
  picto: string
}
export interface StrapiSocialLinkInterface {
  id: number
  title: string
  cta: StrapiCtaInterface[]
}
