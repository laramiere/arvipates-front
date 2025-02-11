<script setup lang="ts">
import type { ContentBlockCardWithBg } from '@/interfaces'

const props = defineProps<ContentBlockCardWithBg>()

const config = useRuntimeConfig()
</script>

<template>
  <div
    class="card w-full rounded-t-global bg-cover bg-center bg-no-repeat pb-20 pt-10 tablet:py-[6.25rem]"
    :style="`background-image: url(${config.public.apiBaseUrl}${props.background.url})`"
  >
    <div class="desktop:container-xl container mx-auto flex justify-start px-[1.5625rem] desktop:px-0">
      <ContentBlockCard
        :content="{
          title,
          content,
          cta,
        }"
        class="tablet:w-2/3 tablet:-rotate-4 desktop:w-1/2"
      />
    </div>
  </div>
</template>
