<script lang="ts" setup>
import type { InstaInterface } from '@/shared/interfaces'

const props = defineProps<{
  instaData: InstaInterface
}>()
</script>

<template>
  <section class="c-insta card relative overflow-hidden rounded-t-global bg-black-100 py-20">
    <div class="container-xl container mx-auto flex ">
      <h2 class="relative z-10 w-1/3 pr-[4.5rem] font-serif text-2xl font-bold uppercase text-black-400">
        {{ props.instaData.title }}
      </h2>
      <img
        v-if="props.instaData.background"
        class="absolute bottom-0 left-0 z-0 h-[85%] w-auto"
        :src="props.instaData.background?.file.url"
      >
      <div class="c-insta__content relative z-10 grid w-2/3 grid-cols-3 gap-8">
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
