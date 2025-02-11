import type { StrapiComponentBaseInterface, StrapiPictureInterface } from '@/interfaces'

export interface PictureWallInterface extends StrapiComponentBaseInterface {
  title: string
  link: string
  pictures: StrapiPictureInterface[]
  floatingPicture: StrapiPictureInterface
}
