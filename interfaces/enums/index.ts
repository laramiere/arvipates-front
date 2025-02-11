export enum ComponentName {
  HeroHome = 'custom.hero-home',
  Timetable = 'timetable.timetable',
  Slider = 'custom.slider',
  ImageWithTextBlock = 'custom.image-with-text-block',
  ContentBlockCardWithBg = 'custom.content-block-card-with-bg',
  Map = 'custom.map',
}

export type HeroHomeName = ComponentName.HeroHome
export type TimetableName = ComponentName.Timetable
export type SliderName = ComponentName.Slider
export type ImageWithTextBlockName = ComponentName.ImageWithTextBlock
export type ContentBlockCardWithBgName = ComponentName.ContentBlockCardWithBg
export type MapName = ComponentName.Map

export type ComponentNameType = ComponentName.HeroHome | ComponentName.Timetable | ComponentName.Slider | ComponentName.ImageWithTextBlock | ComponentName.Map
