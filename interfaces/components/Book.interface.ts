import type {
  StrapiComponentBaseInterface,
  StrapiPictureInterface,
  StrapiRichTextBlock,
} from '@/interfaces'

export interface BookInterface extends StrapiComponentBaseInterface {
  title: string
  content: StrapiRichTextBlock[]
  background: StrapiPictureInterface
  zenchefBackgroundColor: string
  zenchefId: string
  mainComponent: boolean
}
