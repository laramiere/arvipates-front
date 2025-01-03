<script lang="ts" setup>
import { timetableData } from '@/shared/fakeData'
</script>

<template>
  <div>
    <Hero />
    <Timetable
      v-if="timetableData.items.length"
      :timetable="timetableData"
    />
    <Slider />
  </div>
</template>
