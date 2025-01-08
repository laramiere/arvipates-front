<script setup lang="ts">
import type { SliderInterface } from '@/shared/interfaces'

const props = defineProps<{
  sliderData: SliderInterface
}>()
</script>

<template>
  <div class="card overflow-hidden rounded-t-global bg-black-100 pb-[12.5625rem]">
    <ContentBlock :content-block-data="props.sliderData.content" />
    <SliderContent :items="props.sliderData.slides" />
  </div>
</template>
