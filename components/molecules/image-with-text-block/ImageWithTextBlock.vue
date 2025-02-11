<script setup lang="ts">
import type { ImageWithTextBlock } from '@/interfaces'

const props = defineProps<ImageWithTextBlock>()
const config = useRuntimeConfig()
</script>

<template>
  <div class="card rounded-t-global bg-flickerW bg-repeat pb-20 pt-10 tablet:py-20">
    <div class="container-xl container mx-auto flex grid-cols-2 flex-col-reverse px-[1.5625rem] tablet:grid desktop:px-0">
      <div class="c-image-with-text__media grid grid-cols-2 gap-4 pb-20 tablet:pb-[8.625rem]">
        <div
          v-if="props.picture1"
          class="relative top-20 overflow-hidden rounded-global pt-[132%] tablet:top-[8.625rem]"
        >
          <img
            class="absolute left-0 top-0 block size-full object-cover"
            :src="`${config.public.apiBaseUrl}${props.picture1.url}`"
            :alt="props.picture1.alternativeText"
          >
        </div>
        <div
          v-if="props.picture2"
          class="relative overflow-hidden rounded-global pt-[132%]"
        >
          <img
            class="absolute left-0 top-0 block size-full object-cover"
            :src="`${config.public.apiBaseUrl}${props.picture2.url}`"
            :alt="props.picture2.alternativeText"
          >
        </div>
      </div>
      <div class="c-image-with-text__content mb-6 flex items-center tablet:mb-0 tablet:pl-[5.625rem]">
        <ContentBlock
          :content-block-data="{
            title: props.title,
            cta: props.cta,
            content: props.content,
          }"
          :full-style="false"
        />
      </div>
    </div>
  </div>
</template>
