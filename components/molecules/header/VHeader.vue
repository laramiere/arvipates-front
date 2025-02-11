<script lang="ts" setup>
import type { StrapiNavigationItemInterface } from '@/interfaces'
import { useGlobalStore } from '@/stores/global.store'
import { useWindowScroll } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { arrivedState, y } = useWindowScroll({ behavior: 'smooth' })
const displayHeaderMenuMobile = ref(false)
const store = useGlobalStore()
const { header } = storeToRefs(store)

async function setDisplayHeaderMenuMobile() {
  const body: HTMLElement | null = document.querySelector('body')
  if (body) {
    body.classList.toggle('overflow-hidden')
  }
  displayHeaderMenuMobile.value = !displayHeaderMenuMobile.value
}
const mobileNavigationItems: Ref<StrapiNavigationItemInterface[]> = computed(() => {
  const navLeft = header.value?.navLeft?.navigation_items
  const navRight = header.value?.navRight?.navigation_items
  const mergedArray: StrapiNavigationItemInterface[] = []

  if (navLeft) {
    mergedArray.push(...navLeft)
  }
  if (navRight) {
    mergedArray.push(...navRight)
  }
  return mergedArray
})
</script>

<template>
  <header
    class="c-header fixed left-0 top-0 z-40 w-full bg-black-100"
  >
    <div class="c-header__top absolute left-0 top-0 z-0 size-full bg-black-300">
      <TopBar
        v-if="header?.topBar"
        :top-bar="header?.topBar"
      />
    </div>
    <div
      :class="{
        'top-0 rounded-t-none': y > 0 && !arrivedState.top,
        'top-[2.625rem]': y === 0,
      }"
      class="c-header__main relative  z-10 rounded-t-3xl bg-black-100"
    >
      <div class="container-xl container mx-auto">
        <div class="relative flex items-center justify-between border-b border-ble-200 px-[1.5625rem] py-2 desktop:px-0">
          <VHeaderNav
            v-if="header.navLeft && header?.navLeft.navigation_items.length"
            class="justify-start pr-12"
            :class="{ 'w-full': !header.navRight }"
            :navigation-items="header?.navLeft.navigation_items"
          />
          <NuxtLink
            class="c-header__logo absolute top-2 block laptop:left-1/2 laptop:-translate-x-1/2"
            to="/"
          >
            <img src="/arvipates.png" alt="Retour Accueil Arvipates">
          </NuxtLink>
          <VHeaderNav
            v-if="header.navRight && header?.navRight.navigation_items.length"
            class="justify-end pl-12"
            :class="{ 'w-full': !header.navLeft }"
            :navigation-items="header?.navRight.navigation_items"
          >
            <li class="[&:not(:last-child)]:mr-6">
              <VButton
                v-if="header?.bookCta.visible"
                :href="header.bookCta.href"
                :external="header.bookCta.external"
                class="mr-2 flex h-12 items-center"
              >
                {{ `${header.bookCta.title}` }}
              </VButton>
            </li>
          </VHeaderNav>
          <div class=" flex w-full items-center justify-end laptop:hidden">
            <VButton
              v-if="header?.bookCta.visible"
              :href="header.bookCta.href"
              :external="header.bookCta.external"
              class="mr-2 flex h-12 items-center"
            >
              {{ header.bookCta.title }}
            </VButton>
            <VButtonBurger label="ouvrir menu de navigation" @click="setDisplayHeaderMenuMobile" />
          </div>
        </div>
      </div>
    </div>
    <transition name="headerMenuMobile">
      <VHeaderMenuMobile
        v-if="displayHeaderMenuMobile"
        :navigation-items="mobileNavigationItems"
        :class="{ 'pt-[10.375rem]': y === 0 }"
      />
    </transition>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  &__top {
    transition: var(--animation-bounce);
  }

  &__main {
    transition: var(--animation-bounce);
  }
}
.headerMenuMobile-enter-from,
.headerMenuMobile-leave-to {
  transform: translateY(-100%);
}
.headerMenuMobile-enter-to {
  transform: translateY(0);
}

.headerMenuMobile-enter-active,
.headerMenuMobile-leave-active {
  transition: var(--transition-delay) transform cubic-bezier(0.78, 0.02, 0.58, 1);
}
</style>
