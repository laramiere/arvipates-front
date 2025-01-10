<script lang="ts" setup>
import {
  contentBlockCardWithBgData,
  imageWithTextData,
  PoiData,
  sliderData,
  timetableData,
} from '@/shared/fakeData'
</script>

<template>
  <div>
    <Hero />
    <Timetable
      v-if="timetableData.items.length"
      :timetable="timetableData"
    />
    <Slider
      :slider-data="sliderData"
    />
    <ImageWithTextBlock :image-with-text-data="imageWithTextData" />
    <ContentBlockCardWithBg :content-block-card-data="contentBlockCardWithBgData" />
    <Map :poi="PoiData" />
  </div>
</template>
