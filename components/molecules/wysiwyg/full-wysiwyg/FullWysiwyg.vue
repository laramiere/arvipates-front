<script lang="ts" setup>
import type { FullWysiwygInterface } from '@/interfaces'

defineProps<FullWysiwygInterface>()
const config = useRuntimeConfig()
</script>

<template>
  <div class="wysiwyg card px-[1.5625rem] py-14 laptop:py-20">
    <div class="container-xl container mx-auto">
      <div
        class="laptop:flex"
        :class="{ 'flex-row-reverse': picturePosition === 'right' }"
      >
        <div
          v-if="picture"
          class="relative mb-5 w-full pt-10 laptop:mb-0 laptop:w-1/2 laptop:pt-0"
        >
          <img
            class="block h-auto w-full rounded-global"
            :src="`${config.public.apiBaseUrl}${picture.url}`"
            :alt="picture.alternativeText"
          >
        </div>
        <div
          class="w-full only:w-full only:px-0 laptop:w-1/2"
          :class="{
            'pr-0 laptop:pr-20': picturePosition === 'right',
            'pl-0 laptop:pl-20': picturePosition === 'left',
          }"
        >
          <Richtext :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>
