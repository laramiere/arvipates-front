<script lang="ts" setup>
import type { ContentBlockInterface } from '@/interfaces'

defineProps<{
  content: ContentBlockInterface
}>()
</script>

<template>
  <div class="c-content-block-card rounded-global bg-flickerW p-3">
    <div class="flex flex-col items-center rounded-global border border-black-200 px-8 py-9 tablet:px-11 tablet:py-14">
      <h2 class="mb-6 text-center font-serif font-bold uppercase tablet:mb-10 tablet:text-2xl">
        {{ content.title }}
      </h2>

      <ContentBlockText
        :center="false"
        class="c-content-block-card_laptop:max-w-96_content mb-6 border-y border-black-200 py-6 text-left tablet:mb-10 tablet:py-10"
        :content="content.content"
      />
      <VButton
        v-if="content.cta"
        :href="content.cta.href"
        :external="content.cta.external"
        class="mx-auto inline-block"
      >
        {{ content.cta.title }}
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
