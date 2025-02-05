<script lang="ts" setup>
import type { InstaInterface } from '@/shared/interfaces'

const props = defineProps<{
  instaData: InstaInterface
}>()
</script>

<template>
  <section class="c-insta card relative overflow-hidden rounded-t-global bg-black-100 pb-20 pt-10 tablet:py-20">
    <div class="container-xl container mx-auto px-[1.5625rem] tablet:flex desktop:px-0">
      <h2 class="relative z-10 mx-auto mb-5 max-w-[9.475rem] text-center font-serif font-bold uppercase text-black-400 tablet:mb-0 tablet:w-1/3 tablet:max-w-full tablet:pr-[4.5rem]  tablet:text-left tablet:text-2xl">
        {{ props.instaData.title }}
      </h2>
      <img
        v-if="props.instaData.background"
        class="absolute bottom-0 left-0 z-0 h-1/2 w-auto tablet:h-[85%]"
        :src="props.instaData.background?.file.url"
        role="none"
      >
      <div class="c-insta__content relative z-10 grid grid-cols-2 gap-5 tablet:w-2/3 tablet:gap-8 laptop:grid-cols-3">
        <div
          v-for="item in props.instaData.items"
          :key="item.id"
          class="relative w-full overflow-hidden rounded-global pt-[100%]"
        >
          <img
            class="absolute left-0 top-0 size-full object-cover"
            :src="item.file.url"
            :alt="item.file.alternativeText"
          >
        </div>
      </div>
    </div>
  </section>
</template>
