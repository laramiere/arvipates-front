export interface Time {
  title: string
  timeSlots1: string
  timeSlots2?: string
  id: string
}

export interface Timetable {
  title: string
  items: Time[]
}
