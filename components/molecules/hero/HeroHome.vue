<script lang="ts" setup>
import type { HeroHomeComponentInterface } from '@/interfaces'

defineProps<HeroHomeComponentInterface>()

const config = useRuntimeConfig()
const { y } = useWindowScroll()
const hero = ref<HTMLElement | null>(null)
const heroContent = ref<HTMLElement | null>(null)
const { height, loaded } = useHeightGenerator(heroContent)
const { handleScrollTo } = useScrollTo(hero)
</script>

<template>
  <div
    ref="hero"
    class="c-hero relative overflow-hidden pt-20 laptop:pt-[20.75rem]"
  >
    <div
      ref="heroContent"
      class="c-hero__content relative z-30 flex flex-col items-center justify-center px-[1.5625rem] laptop:absolute laptop:left-1/2 laptop:top-32 laptop:-translate-x-1/2"
    >
      <h1 class="mb-7 font-serif text-[2.5rem] uppercase laptop:mb-20 laptop:text-9xl">
        {{ title }}
      </h1>
      <ContentBlockText
        class="laptop:max-w-96"
        :center="true"
        :content="content"
      />
      <VButton
        v-if="cta"
        :href="cta.href"
        :external="cta.external"
        class="w-auto"
      >
        {{ cta.title }}
      </VButton>
      <CustomScrollButton
        class="scroll absolute left-1/2 flex -translate-x-1/2 laptop:hidden"
        @handle-scroll-down="handleScrollTo"
      >
        Défiler vers le basss
      </CustomScrollButton>
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
        class="absolute bottom-[-84px] left-[-70px] w-[160px] animate-levitation laptop:bottom-[-260px] laptop:left-0 laptop:w-auto"
      >
        <img
          :class="{ 'translate-y-[-200%]': y > 50, 'translate-y-0': y < 50 }"
          :src="`${config.public.apiBaseUrl}${pictureLeft.url}`"
          :alt="`${config.public.apiBaseUrl}${pictureLeft.alternativeText}`"
        >
      </div>
      <div
        v-if="pictureRight"
        class="absolute right-[-12px] top-[-16px] w-[110px] animate-levitation laptop:top-[30px] laptop:w-auto"
      >
        <img
          :class="{ '-translate-y-full': y > 50, 'translate-y-0': y < 50 }"
          class="delay-1000"
          :src="`${config.public.apiBaseUrl}${pictureRight.url}`"
          :alt="`${config.public.apiBaseUrl}${pictureRight.alternativeText}`"
        >
      </div>
    </div>
    <div class="c-hero__cta container-xl container absolute left-1/2 z-20 mx-auto flex -translate-x-1/2 justify-end">
      <CustomScrollButton
        class="hidden laptop:flex"
        @handle-scroll-down="handleScrollTo"
      >
        Défiler vers le basss
      </CustomScrollButton>
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

    img {
      transition: all 1s ease-in-out;
    }

    > div {
      &:first-child {
        padding-top: 20%;
      }
    }
  }
}
</style>
