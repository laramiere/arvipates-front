<script setup lang="ts">
import type { ImageWithTextBlock } from '@/interfaces'

defineProps<ImageWithTextBlock>()
const config = useRuntimeConfig()
const target = ref(null)
const targetVisible = useElementVisibility(target)
const startAnimation = ref(false)
watch(targetVisible, (value) => {
  if (value && !startAnimation.value) {
    setTimeout(() => {
      startAnimation.value = true
    }, 500)
  }
})
</script>

<template>
  <div
    class="card overflow-hidden rounded-t-global bg-flickerW bg-repeat pb-20 pt-10 tablet:py-20"
  >
    <div
      class="container-xl container mx-auto flex grid-cols-2 flex-col-reverse px-[1.5625rem] tablet:grid desktop:px-0"
    >
      <div
        ref="target"
        class="c-image-with-text__media grid grid-cols-2 gap-4 pb-20 tablet:pb-[8.625rem]"
      >
        <div
          v-if="picture1"
          class="relative top-20 overflow-hidden rounded-global pt-[132%] opacity-0 tablet:top-[8.625rem]"
          :class="{ 'opacity-100': startAnimation }"
          :style="{ transform: startAnimation ? 'translateY(0)' : 'translateY(-10%)' }"
        >
          <img
            class="absolute left-0 top-0 block size-full object-cover"
            :src="`${config.public.apiBaseUrl}${picture1.url}`"
            :alt="picture1.alternativeText"
          >
        </div>
        <div
          v-if="picture2"
          class="relative overflow-hidden rounded-global pt-[132%] opacity-0"
          :class="{ 'opacity-100': startAnimation }"
          :style="{ transform: startAnimation ? 'translateY(0)' : 'translateY(10%)' }"
        >
          <img
            class="absolute left-0 top-0 block size-full object-cover"
            :src="`${config.public.apiBaseUrl}${picture2.url}`"
            :alt="picture2.alternativeText"
          >
        </div>
      </div>
      <div
        class="c-image-with-text__content mb-6 flex items-center tablet:mb-0 tablet:pl-[5.625rem]"
      >
        <ContentBlock
          :content-block-data="{
            title,
            cta,
            content,
          }"
          :full-style="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-image-with-text__media > div {
  transition: all 1s var(--animation-linear);
}
</style>
