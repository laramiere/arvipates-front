import type { Picture } from '@/shared/interfaces'

export interface PoiInterface {
  picture: Picture
  latlng: [number, number]
  link: string
  title: string
}
