import type {
  StrapiComponentBaseInterface,
  StrapiCtaInterface,
  StrapiPictureInterface,
  StrapiRichTextBlock,
} from '@/interfaces'

export interface HeroHomeComponentInterface extends StrapiComponentBaseInterface {
  title: string
  content: StrapiRichTextBlock[]
  pictureDesktop: StrapiPictureInterface
  pictureMobile: StrapiPictureInterface
  pictureLeft?: StrapiPictureInterface
  pictureRight?: StrapiPictureInterface
  cta?: StrapiCtaInterface
}
