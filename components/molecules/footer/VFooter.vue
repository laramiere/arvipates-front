<script lang="ts" setup>
import type { FooterInterface } from '@/shared/interfaces'

const props = defineProps<{
  data: FooterInterface
}>()
</script>

<template>
  <footer class="card overflow-hidden rounded-t-global bg-black-300 pb-6 pt-20">
    <div class="container-xl container mx-auto">
      <div>
        <a :href="props.data.logo.href">
          <img
            :src="props.data.logo.picture.file.url"
          >
        </a>
        <button
          class="flex flex-col items-center text-black-100"
          :aria-label="props.data.scrollTopButton.title"
        >
          <div class="mb-4">
            <Polygon />
            <Polygon class="mt-[10px]" />
          </div>
          <span class="block max-w-[8.125rem] font-sans text-base uppercase">
            {{ props.data.scrollTopButton.title }}
          </span>
        </button>
      </div>
      <nav class="border-t border-t-black-100 pt-6">
        <ul class="flex justify-center">
          <li
            v-for="(item, key) in props.data.footerNav"
            :key="`footerItem-${key}`"
            class="flex items-center font-sans text-base font-normal uppercase leading-none"
          >
            <a
              :href="item.href"
              class="block text-black-100 no-underline"
            >
              {{ item.content }}
            </a>
            <span
              v-if="key + 1 !== props.data.footerNav.length"
              class="mx-3 block size-[4px] rounded-[100%] bg-black-100"
            />
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
