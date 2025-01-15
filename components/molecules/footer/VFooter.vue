<script lang="ts" setup>
import type { FooterInterface } from '@/shared/interfaces'
import { useWindowScroll } from '@vueuse/core'

const props = defineProps<{
  data: FooterInterface
}>()
const { y } = useWindowScroll({
  behavior: 'smooth',
})
function handleScrollTop() {
  y.value = 0
}
</script>

<template>
  <footer class="card overflow-hidden rounded-t-global bg-black-300 bg-flickerB pb-6 pt-20">
    <div class="container-xl container mx-auto">
      <div class="flex justify-between pb-20">
        <a :href="props.data.logo.href">
          <img
            :src="props.data.logo.picture.file.url"
          >
        </a>
        <button
          class="flex flex-col items-center text-black-100"
          :aria-label="props.data.scrollTopButton.title"
          @click="handleScrollTop"
        >
          <div class="mb-4">
            <Polygon />
            <Polygon class="mt-[10px]" />
          </div>
          <span class="block max-w-[8.125rem] font-sans text-base uppercase">
            {{ props.data.scrollTopButton.title }}
          </span>
        </button>
        <SocialLink :social="props.data.socialLink" />
      </div>
      <nav class="c-footer__nav border-t border-t-black-100 pt-6">
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
