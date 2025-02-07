<script lang="ts" setup>
import type { StrapiNavigationItemInterface } from '@/interfaces'

defineProps<{ navigationItems: StrapiNavigationItemInterface[] }>()
</script>

<template>
  <nav class="c-header__nav hidden w-1/2 laptop:flex">
    <ul class="flex items-center">
      <template
        v-for="item in navigationItems"
        :key="`header-nav-right-${item.id}`"
      >
        <li
          v-if="item.visible"
          class="[&:not(:last-child)]:mr-6"
        >
          <NuxtLink
            class="block py-4 text-base uppercase text-black-400"
            :to="item.pageLink"
          >
            {{ item.pageTitle }}
          </NuxtLink>
        </li>
      </template>
      <slot />
    </ul>
  </nav>
</template>
