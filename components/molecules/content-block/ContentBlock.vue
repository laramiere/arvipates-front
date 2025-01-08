<script lang="ts" setup>
import type { ContentBlockInterface } from '@/shared/interfaces/index'

const props = defineProps<{
  contentBlockData: ContentBlockInterface
}>()
</script>

<template>
  <div class="c-content-block bg-black-400">
    <div class="rounded-t-global bg-black-100">
      <div class="container-xl container mx-auto pb-[3.75rem] pt-20 text-center">
        <h2 class="m-auto mb-12 max-w-[24.375rem] font-serif text-2xl font-bold uppercase">
          {{ props.contentBlockData.title }}
        </h2>
        <div class="c-content-block__main mb-[3.75rem] grid grid-cols-content-block ">
          <div
            v-if="props.contentBlockData.mediaLeft"
            class="c-content-block__media flex content-start justify-start"
          >
            <img
              class="block size-auto"
              :src="props.contentBlockData.mediaLeft.file.url"
              alt=""
              loading="lazy"
            >
          </div>
          <div class="c-content-block__content text-base" v-html="props.contentBlockData.content" />
          <div
            v-if="props.contentBlockData.mediaRight"
            class="c-content-block__media flex content-end justify-end"
          >
            <img
              class="block size-auto"
              :src="props.contentBlockData.mediaRight.file.url"
              alt=""
              loading="lazy"
            >
          </div>
        </div>
        <VButton>
          {{ props.contentBlockData.cta }}
        </VButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-content-block {
  &__content {
    p {
      &:not(:last-child) {
        margin-bottom: 2.1875rem;
      }
    }
  }
}
</style>
