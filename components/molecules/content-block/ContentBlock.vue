<script lang="ts" setup>
import type { ContentBlockInterface } from '@/shared/interfaces/index'

const props = withDefaults(defineProps<{
  contentBlockData: ContentBlockInterface
  fullStyle?: boolean
}>(), {
  fullStyle: true,
})
</script>

<template>
  <div
    class="c-content-block"
  >
    <div
      :class="{ 'rounded-t-global bg-black-100': fullStyle }"
    >
      <div
        :class="{ 'container-xl container mx-auto pb-[3.75rem] pt-20 text-center': fullStyle }"
      >
        <h2
          :class="{ 'm-auto max-w-[24.375rem]': fullStyle }"
          class=" mb-12 font-serif text-2xl font-bold uppercase"
        >
          {{ props.contentBlockData.title }}
        </h2>
        <div
          :class="{ 'grid grid-cols-content-block': fullStyle }"
          class="c-content-block__main mb-[3.75rem]"
        >
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
