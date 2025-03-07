import type { RichtextContentType, StrapiComponentBaseInterface, StrapiPictureInterface } from '@/interfaces'

export interface FullWysiwygInterface extends StrapiComponentBaseInterface {
  title?: string
  content: RichtextContentType[]
  picture?: StrapiPictureInterface
  picturePosition: 'left' | 'right'
}
