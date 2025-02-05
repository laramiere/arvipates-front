<script lang="ts" setup>
import { topBarData } from '@/shared/fakeData'
import { useWindowScroll } from '@vueuse/core'
import { ref } from 'vue'

const { arrivedState, y } = useWindowScroll({ behavior: 'smooth' })
const displayHeaderMenuMobile = ref(false)

async function setDisplayHeaderMenuMobile() {
  const body: HTMLElement | null = document.querySelector('body')
  if (body) {
    body.classList.toggle('overflow-hidden')
  }
  displayHeaderMenuMobile.value = !displayHeaderMenuMobile.value
}
</script>

<template>
  <header
    class="c-header fixed left-0 top-0 z-40 w-full bg-black-100"
  >
    <div class="c-header__top absolute left-0 top-0 z-0 size-full bg-black-300">
      <TopBar :top-bar="topBarData" />
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
          <nav class="c-header__nav hidden w-1/2 pr-12 laptop:block">
            <ul class="flex items-center justify-start">
              <li class="[&:not(:last-child)]:mr-6">
                <a
                  href="#_"
                  class="block py-4 text-base uppercase text-black-400"
                >
                  Le concept
                </a>
              </li>
              <li class="[&:not(:last-child)]:mr-6">
                <a
                  href="#_"
                  class="block py-4 text-base uppercase text-black-400"
                >
                  La carte
                </a>
              </li>
              <li class="[&:not(:last-child)]:mr-6">
                <a
                  href="#_"
                  class="block py-4 text-base uppercase text-black-400"
                >
                  Les évènements
                </a>
              </li>
            </ul>
          </nav>
          <a class="c-header__logo absolute top-2 block laptop:left-1/2 laptop:-translate-x-1/2" href="#_">
            <img src="/arvipates.png" alt="Retour Accueil Arvipates">
          </a>
          <nav class="c-header__nav hidden w-1/2 pl-12 laptop:block">
            <ul class="flex items-center justify-end">
              <li class="[&:not(:last-child)]:mr-6">
                <a href="#_" class="block py-4 text-base uppercase text-black-400">
                  Infos Pratiques
                </a>
              </li>
              <li class="[&:not(:last-child)]:mr-6">
                <VButton>
                  Réserver
                </VButton>
              </li>
            </ul>
          </nav>
          <div class=" flex w-full items-center justify-end laptop:hidden">
            <VButton class="mr-2 flex h-12 items-center">
              Réserver
            </VButton>
            <VButtonBurger label="ouvrir menu de navigation" @click="setDisplayHeaderMenuMobile" />
          </div>
        </div>
      </div>
    </div>
    <transition name="headerMenuMobile">
      <VHeaderMenuMobile
        v-if="displayHeaderMenuMobile"
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
