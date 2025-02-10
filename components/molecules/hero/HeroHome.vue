<script lang="ts" setup>
import type { HeroHomeComponentInterface } from '@/interfaces'
import { onBeforeUnmount, onMounted } from 'vue'

defineProps<HeroHomeComponentInterface>()
const heroContent = ref<HTMLElement | null>(null)
const height = ref<number>(0)
const timeoutRef = ref<ReturnType<typeof setTimeout> | null>(null)
const loaded = ref(false)
const config = useRuntimeConfig()

let setTimeoutDuration = 0
function calculatHeight() {
  if (heroContent.value) {
    if (timeoutRef.value) {
      clearTimeout(timeoutRef.value)
    }
    timeoutRef.value = setTimeout(() => {
      const heroHeight = heroContent.value?.offsetHeight
      if (setTimeoutDuration === 0) {
        setTimeoutDuration = 400
      }
      if (heroHeight) {
        height.value = heroHeight + 80
      }
    }, setTimeoutDuration)
  }
}
onMounted(async () => {
  await nextTick()
  calculatHeight()
  setTimeout(() => {
    loaded.value = true
    window.addEventListener('resize', calculatHeight)
  }, setTimeoutDuration + 400)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', calculatHeight)
})
</script>

<template>
  <div class="c-hero relative overflow-hidden pt-20 laptop:pt-[18.75rem]">
    <div
      ref="heroContent"
      class="c-hero__content relative z-30 flex flex-col items-center justify-center px-[1.5625rem] laptop:absolute laptop:left-1/2 laptop:top-32 laptop:-translate-x-1/2"
    >
      <h1 class="mb-7 font-serif text-[2.5rem] uppercase laptop:mb-20 laptop:text-9xl">
        {{ title }}
      </h1>
      <ContentBlockText
        class="laptop:max-w-96"
        :content="content"
      />
      <VButton
        :href="cta.href"
        :external="cta.external"
        class="w-auto"
      >
        {{ cta.title }}
      </VButton>
      <ScrollButton class="scroll absolute left-1/2 flex -translate-x-1/2 laptop:hidden" />
    </div>
    <picture>
      <source
        :srcset="`${config.public.apiBaseUrl}${pictureDesktop.url}`"
        media="(min-width: 976px)"
      >
      <img
        class="relative z-10 block h-auto w-full"
        :src="`${config.public.apiBaseUrl}${pictureMobile.url}`"
        :alt="pictureMobile.alternativeText"
      >
    </picture>
    <div
      :class="{ 'opacity-100': loaded }"
      class="c-hero__media asbolute container-xl container absolute left-0 top-0 z-0 flex w-full justify-between opacity-0 laptop:left-1/2 laptop:-translate-x-1/2"
      :style="`height:${height}px`"
    >
      <div
        v-if="pictureLeft"
        class="absolute bottom-[-84px] left-[-70px] w-[160px] laptop:bottom-[-260px] laptop:left-0 laptop:w-auto"
      >
        <img
          :src="`${config.public.apiBaseUrl}${pictureLeft.url}`"
          :alt="`${config.public.apiBaseUrl}${pictureLeft.alternativeText}`"
        >
      </div>
      <div class="absolute right-[-12px] top-[-16px] w-[110px] laptop:top-[30px] laptop:w-auto">
        <img
          :src="`${config.public.apiBaseUrl}${pictureRight.url}`"
          :alt="`${config.public.apiBaseUrl}${pictureLeft.alternativeText}`"
        >
      </div>
    </div>
    <div class="c-hero__cta container-xl container absolute left-1/2 z-20 mx-auto flex -translate-x-1/2 justify-end">
      <ScrollButton class="hidden laptop:flex" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-hero {
  &__content {
    .scroll {
      top: calc(100% + 100px)
    }
  }
  &__cta {
    top: 38%;
  }

  &__media {
    transition: var(--animation-bounce);

    > div {
      &:first-child {
        padding-top: 20%;
      }
    }
  }
}
</style>
