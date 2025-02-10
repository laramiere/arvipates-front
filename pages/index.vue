<script lang="ts" setup>
import type { GlobalPageDataResponse } from '@/interfaces'
import { ComponentName } from '@/interfaces'
import {
  contentBlockCardWithBgData,
  InstaData,
  PoiData,
} from '@/shared/fakeData'

const HeroHome = resolveComponent('HeroHome')
const TimeTable = resolveComponent('Timetable')
const Slider = resolveComponent('Slider')
const ImageWithTextBlock = resolveComponent('ImageWithTextBlock')

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
    <ContentBlockCardWithBg :content-block-card-data="contentBlockCardWithBgData" />
    <Map :poi="PoiData" />
    <Insta :insta-data="InstaData" />
  </div>
</template>
