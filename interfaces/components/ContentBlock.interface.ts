import type { StrapiCtaInterface, StrapiPictureInterface, StrapiRichTextBlock } from '@/interfaces'

export interface ContentBlockInterface {
  title: string
  content: StrapiRichTextBlock[]
  pictureLeft?: StrapiPictureInterface
  pictureRight?: StrapiPictureInterface
  cta?: StrapiCtaInterface
}
