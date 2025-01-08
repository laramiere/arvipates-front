<script setup lang="ts">
import type { ContentBlockCardWithBgInterface } from '@/shared/interfaces'

const props = defineProps<{
  contentBlockCardData: ContentBlockCardWithBgInterface
}>()
</script>

<template>
  <div
    class="card w-full rounded-t-global bg-cover bg-center bg-no-repeat py-[6.25rem]"
    :style="`background-image: url(${props.contentBlockCardData.background.file.url})`"
  >
    <div class="container-xl container mx-auto flex justify-start">
      <ContentBlockCard
        :content="props.contentBlockCardData.content"
        class="w-1/2 -rotate-4"
      />
    </div>
  </div>
</template>
