<script lang="ts" setup>
import {
  imageWithTextData,
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
  </div>
</template>
