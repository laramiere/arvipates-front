import type {
  BookInterface,
  CardInterface,
  ContentBlockCardWithBg,
  HeroHomeComponentInterface,
  HeroInterface,
  ImageWithTextBlock,
  MapInterface,
  SeoBlockInterface,
  SliderInterface,
  StrapiBaseInterface,
  StrapiNavigationItemInterface,
  TimetableInterface,
} from '@/interfaces'

export type dynamicZoneType = BookInterface | CardInterface | HeroInterface | HeroHomeComponentInterface | TimetableInterface | SliderInterface | ImageWithTextBlock | ContentBlockCardWithBg | MapInterface

export interface PageInterface extends StrapiBaseInterface {
  dynamicZone: dynamicZoneType[]
  title: string
  navigation_item: StrapiNavigationItemInterface
  seo: SeoBlockInterface
}
