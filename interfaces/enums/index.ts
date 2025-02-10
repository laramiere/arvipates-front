export enum ComponentName {
  HeroHome = 'custom.hero-home',
  Timetable = 'timetable.timetable',
  Slider = 'custom.slider',
}
export type HeroHomeName = ComponentName.HeroHome
export type TimetableName = ComponentName.Timetable
export type SliderName = ComponentName.Slider

export type ComponentNameType = ComponentName.HeroHome | ComponentName.Timetable | ComponentName.Slider
