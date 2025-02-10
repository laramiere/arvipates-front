<script lang="ts" setup>
import type { ContentBlockInterface } from '@/interfaces'

withDefaults(defineProps<{
  contentBlockData: ContentBlockInterface
  fullStyle?: boolean
}>(), {
  fullStyle: true,
})
const config = useRuntimeConfig()
</script>

<template>
  <div
    class="c-content-block"
  >
    <div
      :class="{ 'rounded-t-global bg-black-100': fullStyle }"
    >
      <div
        :class="{ 'container-xl container mx-auto px-[1.5625rem] pt-10 text-center tablet:pb-[3.75rem] tablet:pt-20 desktop:px-0': fullStyle }"
        class="flex flex-col items-center tablet:block"
      >
        <h2
          :class="{ 'm-auto mb-0 max-w-[24.375rem]': fullStyle }"
          class=" mb-6 w-full font-serif font-bold uppercase tablet:mb-12 tablet:w-auto tablet:text-2xl"
        >
          {{ contentBlockData.title }}
        </h2>
        <div
          :class="{ 'flex grid-cols-content-block flex-col items-center tablet:grid': fullStyle }"
          class="c-content-block__main mb-6 tablet:mb-[3.75rem]"
        >
          <div
            v-if="contentBlockData.pictureLeft"
            class="c-content-block__media -rotate-90 content-start justify-start tablet:flex tablet:rotate-0"
          >
            <img
              class="block size-auto"
              :src="`${config.public.apiBaseUrl}${contentBlockData.pictureLeft.url}`"
              alt=""
              loading="lazy"
            >
          </div>
          <ContentBlockText
            v-if="contentBlockData?.content.length"
            class="c-content-block__content text-base"
            :content="contentBlockData.content"
          />
          <div
            v-if="contentBlockData.pictureRight"
            class="c-content-block__media hidden content-end justify-end tablet:flex"
          >
            <img
              class="block size-auto"
              :src="`${config.public.apiBaseUrl}${contentBlockData.pictureRight.url}`"
              alt=""
              loading="lazy"
            >
          </div>
        </div>
        <VButton
          v-if="contentBlockData.cta"
          :external="contentBlockData.cta.external"
          :href="contentBlockData.cta.href"
        >
          {{ contentBlockData.cta.title }}
        </VButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
