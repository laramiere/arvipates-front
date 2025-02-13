<script lang="ts" setup>
import type { HeroInterface } from '@/interfaces'

defineProps<HeroInterface>()
const config = useRuntimeConfig()
const hero = ref<HTMLElement | null>(null)
const { handleScrollTo } = useScrollTo(hero)
</script>

<template>
  <div
    ref="hero"
    class="relative"
  >
    <div class="t-0 absolute left-1/2 z-10 w-full -translate-x-1/2 px-6 py-12 text-center laptop:py-[5.625rem]">
      <h1 class="mb-4 font-serif text-2xl font-bold uppercase laptop:text-[2.5rem]">
        {{ title }}
      </h1>
      <ContentBlockText
        :center="true"
        :content="content"
        class="laptop:max-w-[45rem]"
      />
      <VButton
        v-if="cta"
        :href="cta.href"
        :external="cta.external"
        class="w-auto"
      >
        {{ cta.title }}
      </VButton>
      <VButtonSimple
        v-if="scrollcta"
        class="w-auto"
        @click="handleScrollTo"
      >
        {{ scrollcta.title }}
      </VButtonSimple>
    </div>
    <picture class="relative z-0 h-auto w-full">
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
  </div>
</template>
