import type { StrapiComponentBaseInterface, StrapiCtaInterface, StrapiPictureInterface, StrapiRichTextBlock } from '@/interfaces'

export interface ContentBlockInterface {
  title: string
  content: StrapiRichTextBlock[]
  pictureLeft?: StrapiPictureInterface
  pictureRight?: StrapiPictureInterface
  cta?: StrapiCtaInterface
}

export interface ContentBlockCardWithBg extends StrapiComponentBaseInterface {
  title: string
  content: StrapiRichTextBlock[]
  cta?: StrapiCtaInterface
  background: StrapiPictureInterface
}
