import type { Picture } from './GlobalComponent.interface'

export interface ContentBlockInterface {
  title: string
  content: string
  cta: string
  mediaLeft?: Picture
  mediaRight?: Picture
}
