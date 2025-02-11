import type {
  ContentBlockCardWithBg,
  HeroHomeComponentInterface,
  ImageWithTextBlock,
  MapInterface,
  SliderInterface,
  StrapiBaseInterface,
  StrapiNavigationItemInterface,
  TimetableInterface,
} from '@/interfaces'

export type dynamicZoneType = HeroHomeComponentInterface | TimetableInterface | SliderInterface | ImageWithTextBlock | ContentBlockCardWithBg | MapInterface

export interface PageInterface extends StrapiBaseInterface {
  dynamicZone: dynamicZoneType[]
  title: string
  navigation_item: StrapiNavigationItemInterface
}
