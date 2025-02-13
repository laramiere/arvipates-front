import type {
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

export type dynamicZoneType = HeroInterface | HeroHomeComponentInterface | TimetableInterface | SliderInterface | ImageWithTextBlock | ContentBlockCardWithBg | MapInterface

export interface PageInterface extends StrapiBaseInterface {
  dynamicZone: dynamicZoneType[]
  title: string
  navigation_item: StrapiNavigationItemInterface
  seo: SeoBlockInterface
}
