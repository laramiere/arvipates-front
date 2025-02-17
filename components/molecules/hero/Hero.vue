<script lang="ts" setup>
import type { HeroInterface } from '@/interfaces'

defineProps<HeroInterface>()
const config = useRuntimeConfig()
const hero = ref<HTMLElement | null>(null)
const { handleScrollTo } = useScrollTo(hero)
function handleDownloadPdf(downloadLink: string, downloadName: string) {
  // create element <a> for download PDF
  const link = document.createElement('a')
  link.href = downloadLink
  link.target = '_blank'
  link.download = downloadName

  // Simulate a click on the element <a>
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
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
      <div
        v-if="scrollcta || downloadCta"
        class="flex flex-col items-center justify-center laptop:flex-row"
      >
        <VButtonSimple
          v-if="scrollcta"
          class="w-auto [&:not(:last-child)]:mb-2 laptop:[&:not(:last-child)]:mb-0 laptop:[&:not(:last-child)]:mr-2"
          @click="handleScrollTo"
        >
          {{ scrollcta.title }}
        </VButtonSimple>
        <VButtonSimple
          v-if="downloadCta && downloadCta.downloadMedia"
          class="w-auto"
          @click="handleDownloadPdf(`${config.public.apiBaseUrl}${downloadCta.downloadMedia?.url}`, downloadCta.downloadMedia.name)"
        >
          {{ downloadCta.title }}
        </VButtonSimple>
      </div>
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
