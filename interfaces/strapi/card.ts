import type { StrapiBaseInterface, StrapiComponentBaseInterface } from '@/interfaces'

export interface CardItemInterface extends StrapiBaseInterface {
  title: string
  description: string
  visible: boolean
  price: number
}

export interface CardSectionInterface {
  id: number
  title: string
  description: string
  visible: boolean
  card_items: CardItemInterface[]
}

export interface StrapiCardCollectionInterface extends StrapiBaseInterface {
  title: string
  description: string
  sections: CardSectionInterface[]
}

export interface StrapiCardComponentInterface extends StrapiComponentBaseInterface {
  card: StrapiCardCollectionInterface
}
