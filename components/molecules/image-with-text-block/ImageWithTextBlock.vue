<script setup lang="ts">
import type { ImageWithTextBlockInterface } from '@/shared/interfaces'

const props = defineProps<{
  imageWithTextData: ImageWithTextBlockInterface
}>()
</script>

<template>
  <div class="card rounded-t-global bg-flickerW bg-repeat pb-20 pt-10 tablet:py-20">
    <div class="container-xl container mx-auto flex grid-cols-2 flex-col-reverse px-[1.5625rem] tablet:grid desktop:px-0">
      <div class="c-image-with-text__media grid grid-cols-2 gap-4 pb-20 tablet:pb-[8.625rem]">
        <div
          v-for="(item, key) in props.imageWithTextData.pictures"
          :key="item.id"
          :class="{ 'top-20 tablet:top-[8.625rem]': key === 0 }"
          class="relative overflow-hidden rounded-global pt-[132%]"
        >
          <img
            class="absolute left-0 top-0 block size-full object-cover"
            :src="item.file.url"
            :alt="item.file.alternativeText"
          >
        </div>
      </div>
      <div class="c-image-with-text__content mb-6 flex items-center tablet:mb-0 tablet:pl-[5.625rem]">
        <ContentBlock
          :content-block-data="props.imageWithTextData.content"
          :full-style="false"
        />
      </div>
    </div>
  </div>
</template>
