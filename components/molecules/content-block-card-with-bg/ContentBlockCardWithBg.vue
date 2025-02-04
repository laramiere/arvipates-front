<script setup lang="ts">
import type { ContentBlockCardWithBgInterface } from '@/shared/interfaces'

const props = defineProps<{
  contentBlockCardData: ContentBlockCardWithBgInterface
}>()
</script>

<template>
  <div
    class="card w-full rounded-t-global bg-cover bg-center bg-no-repeat pb-20 pt-10 tablet:py-[6.25rem]"
    :style="`background-image: url(${props.contentBlockCardData.background.file.url})`"
  >
    <div class="desktop:container-xl container mx-auto flex justify-start px-[1.5625rem] desktop:px-0">
      <ContentBlockCard
        :content="props.contentBlockCardData.content"
        class="tablet:w-2/3 tablet:-rotate-4 desktop:w-1/2"
      />
    </div>
  </div>
</template>
