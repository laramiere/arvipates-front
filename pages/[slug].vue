<script lang="ts" setup>
import type { GlobalPageDataResponse } from '@/interfaces'
import { ComponentName } from '@/interfaces'

const Hero = resolveComponent('Hero')
const HeroHome = resolveComponent('HeroHome')
const TimeTable = resolveComponent('Timetable')
const Slider = resolveComponent('Slider')
const ImageWithTextBlock = resolveComponent('ImageWithTextBlock')
const ContentBlockCardWithBg = resolveComponent('ContentBlockCardWithBg')
const Map = resolveComponent('Map')
const PictureWall = resolveComponent('PictureWall')
const Card = resolveComponent('Card')
const route = useRoute()

const getComponent = function (name: string) {
  switch (name) {
    case ComponentName.Hero:
      return Hero
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
    case ComponentName.PictureWall:
      return PictureWall
    case ComponentName.Card:
      return Card
  }
}
const { data } = await useAsyncData<GlobalPageDataResponse>(`${route.params.slug}`, async () => {
  const response = await $fetch('/api/pages', {
    method: 'POST',
    body: {
      path: route.path,
    },
  })
  return response
})
useSeoMeta({
  title: data.value?.data[0].seo ? `${data.value?.data[0].seo.title} - Arvipâtes` : 'Arvipâtes',
  description: data.value?.data[0].seo ? data.value?.data[0].seo.description : 'Arvipâtes',
  ogTitle: data.value?.data[0].seo ? `${data.value?.data[0].seo.title} - Arvipâtes` : 'Arvipâtes',
  ogDescription: data.value?.data[0].seo ? data.value?.data[0].seo.description : 'Arvipâtes',
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
  </div>
</template>
