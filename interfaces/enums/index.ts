export enum ComponentName {
  Hero = 'custom.hero',
  HeroHome = 'custom.hero-home',
  Timetable = 'timetable.timetable',
  Slider = 'custom.slider',
  ImageWithTextBlock = 'custom.image-with-text-block',
  ContentBlockCardWithBg = 'custom.content-block-card-with-bg',
  Map = 'custom.map',
  PictureWall = 'wall.picture-wall',
}

export type HeroName = ComponentName.Hero
export type HeroHomeName = ComponentName.HeroHome
export type TimetableName = ComponentName.Timetable
export type SliderName = ComponentName.Slider
export type ImageWithTextBlockName = ComponentName.ImageWithTextBlock
export type ContentBlockCardWithBgName = ComponentName.ContentBlockCardWithBg
export type MapName = ComponentName.Map
export type WallName = ComponentName.PictureWall

export type ComponentNameType = 'custom.hero' | 'custom.hero-home' | 'timetable.timetable' | 'custom.slider' | 'custom.image-with-text-block' | 'custom.content-block-card-with-bg' | 'custom.map' | 'wall.picture-wall'
