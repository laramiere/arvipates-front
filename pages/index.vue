<script lang="ts" setup>
import type { GlobalPageDataResponse } from '@/interfaces'
import { ComponentName } from '@/interfaces'
import {
  InstaData,
} from '@/shared/fakeData'

const HeroHome = resolveComponent('HeroHome')
const TimeTable = resolveComponent('Timetable')
const Slider = resolveComponent('Slider')
const ImageWithTextBlock = resolveComponent('ImageWithTextBlock')
const ContentBlockCardWithBg = resolveComponent('ContentBlockCardWithBg')
const Map = resolveComponent('Map')
const route = useRoute()

const getComponent = function (name: string) {
  switch (name) {
    case ComponentName.HeroHome:
      return HeroHome
    case ComponentName.Timetable:
      return TimeTable
    case ComponentName.Slider:
      return Slider
    case ComponentName.ImageWithTextBlock:
      return ImageWithTextBlock
    case ComponentName.ContentBlockCardWithBg:
      return ContentBlockCardWithBg
    case ComponentName.Map:
      return Map
  }
}
const { data } = await useAsyncData<GlobalPageDataResponse>('homePage', async () => {
  const response = await $fetch('/api/pages', {
    method: 'POST',
    body: {
      path: route.path,
    },
  })
  return response
})
</script>

<template>
  <div>
    <component
      :is="getComponent(item.__component)"
      v-for="item in data?.data[0].dynamicZone"
      :key="item.id"
      v-bind="{ ...item }"
    />
    <Insta :insta-data="InstaData" />
  </div>
</template>
