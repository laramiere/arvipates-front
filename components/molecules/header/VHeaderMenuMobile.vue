<script lang="ts" setup>
import { onMounted } from 'vue'

const itemToDisplay = ref<string[]>([])

onMounted(() => {
  setTimeout(() => {
    itemToDisplay.value.push(...['Le concept', 'La carte', 'Les évènements', 'Infos Pratiques'])
  }, 300)
})
</script>

<template>
  <div class="c-header-menu-mobile fixed left-0 top-0 -z-10 h-dvh w-full bg-black-100 p-[1.5625rem] pt-[7.75rem]">
    <nav
      v-if="itemToDisplay.length"
      class="h-full overflow-y-auto"
    >
      <TransitionGroup
        tag="ul"
        name="itemMenu"
        appear
      >
        <li
          v-for="(item, key) in itemToDisplay"
          :key="`nav-${key}`"
          class="border-b border-ble-200 transition"
          :style="`transition-delay:${100 * key}ms`"
        >
          <a
            href="#_"
            class="block w-full py-9 text-2xl"
          >
            {{ item }}
          </a>
        </li>
      </TransitionGroup>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.c-header-menu-mobile {
  height: 100%;
}
.itemMenu-move,
.itemMenu-enter-active,
.itemMenu-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.itemMenu-enter-from,
.itemMenu-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(0, 30px);
}
</style>
