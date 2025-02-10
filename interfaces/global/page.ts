import type {
  HeroHomeComponentInterface,
  ImageWithTextBlock,
  SliderInterface,
  StrapiBaseInterface,
  StrapiNavigationItemInterface,
  TimetableInterface,
} from '@/interfaces'

export type dynamicZoneType = HeroHomeComponentInterface | TimetableInterface | SliderInterface | ImageWithTextBlock

export interface PageInterface extends StrapiBaseInterface {
  dynamicZone: dynamicZoneType[]
  title: string
  navigation_item: StrapiNavigationItemInterface
}
