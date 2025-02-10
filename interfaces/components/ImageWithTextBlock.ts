import type {
  StrapiComponentBaseInterface,
  StrapiCtaInterface,
  StrapiPictureInterface,
  StrapiRichTextBlock,
} from '@/interfaces'

export interface ImageWithTextBlock extends StrapiComponentBaseInterface {
  title: string
  content: StrapiRichTextBlock[]
  picture1: StrapiPictureInterface
  picture2: StrapiPictureInterface
  cta: StrapiCtaInterface
}
