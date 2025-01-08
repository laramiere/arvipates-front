<script setup lang="ts">
import type { SliderInterface } from '@/shared/interfaces'

const props = defineProps<{
  sliderData: SliderInterface
}>()
</script>

<template>
  <div>
    <ContentBlock :content-block-data="props.sliderData.content" />
    <SliderContent :items="props.sliderData.slides" />
  </div>
</template>
