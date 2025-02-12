import type { ContentBlockInterface } from './ContentBlock.interface'
import type { Picture } from './GlobalComponent.interface'

export interface SliderInterface {
  content: ContentBlockInterface
  slides?: Picture[]
}
