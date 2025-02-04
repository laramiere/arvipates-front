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
  <footer class="card overflow-hidden rounded-t-global bg-black-300 bg-flickerB py-10 desktop:pb-6 desktop:pt-20">
    <div class="desktop:container-xl container mx-auto px-[1.5625rem] desktop:px-0">
      <div class="flex flex-col items-center justify-between pb-10 tablet:flex-row tablet:pb-20">
        <a
          :href="props.data.logo.href"
          class=" mb-10 desktop:mb-0"
        >
          <img :src="props.data.logo.picture.file.url">
        </a>
        <button
          class="mb-10 flex flex-col items-center text-black-100 desktop:mb-0"
          :aria-label="props.data.scrollTopButton.title"
          @click="handleScrollTop"
        >
          <div class="mb-4">
            <Polygon />
            <Polygon class="mt-[10px]" />
          </div>
          <span class="block max-w-[8.125rem] font-sans text-base uppercase desktop:max-w-[8.125rem]">
            {{ props.data.scrollTopButton.title }}
          </span>
        </button>
        <SocialLink
          :social="props.data.socialLink"
        />
      </div>
      <nav class="c-footer__nav border-t border-t-black-100 pt-6">
        <ul class="justify-center text-center tablet:flex">
          <li
            v-for="(item, key) in props.data.footerNav"
            :key="`footerItem-${key}`"
            class="inline-block items-center font-sans text-base font-normal uppercase leading-none tablet:mr-0 tablet:flex [&:not(:last-child)]:mr-3"
          >
            <a
              :href="item.href"
              class="block text-black-100 no-underline"
            >
              {{ item.content }}
            </a>
            <span
              v-if="key + 1 !== props.data.footerNav.length"
              class=" mx-3 hidden size-[4px] rounded-[100%] bg-black-100 tablet:block"
            />
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
