import type {
  HeroHomeComponentInterface,
  StrapiBaseInterface,
  StrapiNavigationItemInterface,
  TimetableInterface,
} from '@/interfaces'

export type dynamicZoneType = HeroHomeComponentInterface | TimetableInterface

export interface PageInterface extends StrapiBaseInterface {
  dynamicZone: dynamicZoneType[]
  title: string
  navigation_item: StrapiNavigationItemInterface
}
