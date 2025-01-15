<script lang="ts" setup>
import type { ContentBlockInterface } from '@/shared/interfaces'

const props = defineProps<{
  content: ContentBlockInterface
}>()
</script>

<template>
  <div class="c-content-block-card rounded-global bg-flickerW p-3">
    <div class="rounded-global border border-black-200 px-11 py-14">
      <h2 class="mb-10 text-center font-serif text-2xl font-bold uppercase">
        {{ props.content.title }}
      </h2>
      <div
        class="c-content-block-card__content mb-10 border-y border-black-200 py-10 text-left"
        v-html="props.content.content"
      />
      <VButton class="mx-auto block">
        {{ props.content.cta }}
      </VButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
