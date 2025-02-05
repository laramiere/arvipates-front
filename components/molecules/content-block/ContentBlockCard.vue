<script lang="ts" setup>
import type { ContentBlockInterface } from '@/shared/interfaces'

const props = defineProps<{
  content: ContentBlockInterface
}>()
</script>

<template>
  <div class="c-content-block-card rounded-global bg-flickerW p-3">
    <div class="rounded-global border border-black-200 px-8 py-9 tablet:px-11 tablet:py-14">
      <h2 class="mb-6 text-center font-serif font-bold uppercase tablet:mb-10 tablet:text-2xl">
        {{ props.content.title }}
      </h2>
      <div
        class="c-content-block-card__content mb-6 border-y border-black-200 py-6 text-left tablet:mb-10 tablet:py-10"
        v-html="props.content.content"
      />
      <VButton class="mx-auto block">
        {{ props.content.cta }}
      </VButton>
    </div>
  </div>
</template>

<style lang="scss">
.c-content-block-card {
  &__content {
    p {
      &:not(:last-child) {
        margin-bottom: 2.1875rem;
      }
    }
  }
}
</style>
