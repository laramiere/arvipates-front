import type { StrapiComponentBaseInterface } from '@/interfaces'

export interface TimetableItemInterface {
  id: number
  title: string
  timeslot1: string
  timeslot2?: string
}
export interface TimetableInterface extends StrapiComponentBaseInterface {
  title: string
  times: TimetableItemInterface[]
}
