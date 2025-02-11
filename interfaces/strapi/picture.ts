import type { StrapiBaseInterface } from '@/interfaces'

export interface StrapiPictureInterface extends StrapiBaseInterface {
  alternativeText: string
  url: string
  provider: string
}
