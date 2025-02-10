import type { StrapiComponentBaseInterface, StrapiCtaInterface, StrapiPictureInterface, StrapiRichTextBlock } from '@/interfaces'

export interface SliderInterface extends StrapiComponentBaseInterface {
  title: string
  content: StrapiRichTextBlock[]
  pictureLeft?: StrapiPictureInterface
  pictureRight?: StrapiPictureInterface
  cta: StrapiCtaInterface
  slides: StrapiPictureInterface[]
}
