import type {
  StrapiComponentBaseInterface,
  StrapiCtaInterface,
  StrapiPictureInterface,
  StrapiRichTextBlock,
} from '@/interfaces'

export interface HeroInterface extends StrapiComponentBaseInterface {
  title: string
  content: StrapiRichTextBlock[]
  pictureDesktop: StrapiPictureInterface
  pictureMobile: StrapiPictureInterface
  scrollcta?: StrapiCtaInterface
  cta?: StrapiCtaInterface
  downloadCta?: StrapiCtaInterface
}
