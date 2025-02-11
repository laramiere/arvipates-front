import type {
  ContentBlockCardWithBg,
  HeroHomeComponentInterface,
  ImageWithTextBlock,
  SliderInterface,
  StrapiBaseInterface,
  StrapiNavigationItemInterface,
  TimetableInterface,
} from '@/interfaces'

export type dynamicZoneType = HeroHomeComponentInterface | TimetableInterface | SliderInterface | ImageWithTextBlock | ContentBlockCardWithBg

export interface PageInterface extends StrapiBaseInterface {
  dynamicZone: dynamicZoneType[]
  title: string
  navigation_item: StrapiNavigationItemInterface
}
