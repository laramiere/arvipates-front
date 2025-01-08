<script lang="ts" setup>
import { sliderData, timetableData } from '@/shared/fakeData'
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
  </div>
</template>
