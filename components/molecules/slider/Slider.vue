<script setup lang="ts">
import type { SliderInterface } from '@/interfaces'

defineProps<SliderInterface>()
</script>

<template>
  <div class="card overflow-hidden rounded-t-global bg-black-100 pb-[6.5rem] tablet:pb-[12.5625rem]">
    <ContentBlock
      :content-block-data="{
        content,
        pictureLeft,
        pictureRight,
        cta,
        title,
      }"
      :full-style="true"
    />
    <SliderContent
      v-if="slides"
      :items="slides"
    />
  </div>
</template>
