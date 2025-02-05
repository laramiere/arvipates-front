<script lang="ts" setup>
import type { TopBarInterface } from '@/shared/interfaces'
import { computed } from 'vue'

const props = defineProps<{
  topBar: TopBarInterface
}>()
const getAddress = computed(() => {
  return `${props.topBar.address.street} - ${props.topBar.address.zipcode} ${props.topBar.address.city.toUpperCase()}`
})
</script>

<template>
  <div class="c-top-bar bg-black-300 py-2">
    <div class="container-xl container mx-auto flex items-center justify-between px-[1.5625rem] text-black-100 desktop:px-0">
      <div class="c-top-bar__social">
        <nav>
          <ul class="flex items-center">
            <li
              v-for="(item, key) in props.topBar.social"
              :key="`topbar-social-${key}`"
              class="[&:not(:last-child)]:mr-2"
            >
              <a :href="item.link" :aria-label="item.ariaLabel">
                <IconGenerator :name="item.picto" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="c-top-bar__info">
        <a
          v-if="props.topBar.address.gmapLink"
          class="text-black-100"
          target="_blank"
          aria-label="Visualisez itinéraire dans un nouvel onglet"
          :href="props.topBar.address.gmapLink"
        >
          {{ getAddress }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-top-bar {
  &__social {
    svg {
      fill: currentColor;
      display: block;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}
</style>
