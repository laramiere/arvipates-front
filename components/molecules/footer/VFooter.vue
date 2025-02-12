<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global.store'
import { useWindowScroll } from '@vueuse/core'

const store = useGlobalStore()
const { footer } = storeToRefs(store)

const { y } = useWindowScroll({
  behavior: 'smooth',
})
function handleScrollTop() {
  y.value = 0
}
</script>

<template>
  <footer
    v-if="footer"
    class="card overflow-hidden rounded-t-global bg-black-300 bg-flickerB py-10 desktop:pb-6 desktop:pt-20"
  >
    <div class="desktop:container-xl container mx-auto px-[1.5625rem] desktop:px-0">
      <div class="flex flex-col items-center justify-between pb-10 tablet:flex-row tablet:pb-20">
        <NuxtLink
          to="/"
          class=" mb-10 desktop:mb-0"
        >
          <img src="/images/logo_footer.png" alt="Page accueil arvipâtes">
        </NuxtLink>
        <button
          class="mb-10 flex flex-col items-center text-black-100 desktop:mb-0"
          aria-label="Retour en haut de la page"
          @click="handleScrollTop"
        >
          <div class="mb-4">
            <Polygon />
            <Polygon class="mt-[10px]" />
          </div>
          <span class="block max-w-[8.125rem] font-sans text-base uppercase desktop:max-w-[8.125rem]">
            Retour en haut de la page
          </span>
        </button>
        <SocialLink
          v-if="footer.SocialLink"
          :social="footer.SocialLink"
        />
      </div>
      <nav
        v-if="footer.navigation_items && footer.navigation_items.length"
        class="c-footer__nav border-t border-t-black-100 pt-6"
      >
        <ul class="justify-center text-center tablet:flex">
          <template
            v-for="(item, key) in footer.navigation_items"
            :key="`footerItem-${key}`"
          >
            <li
              class="inline-block items-center font-sans text-base font-normal uppercase leading-none tablet:mr-0 tablet:flex [&:not(:last-child)]:mr-3"
            >
              <NuxtLink
                :to="item.pageLink"
                class="block text-black-100 no-underline"
              >
                {{ item.pageTitle }}
              </NuxtLink>
              <span
                v-if="key + 1 !== footer.navigation_items.length"
                class=" mx-3 hidden size-[4px] rounded-[100%] bg-black-100 tablet:block"
              />
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </footer>
</template>
