<script lang="ts" setup>
import type { RichtextLinkInterface } from '@/interfaces'

defineProps<{ link: RichtextLinkInterface }>()
</script>

<template>
  <a
    :href="link.url"
    class="font-bold text-ble-300 underline"
    target="_blank"
  >
    <template
      v-for="(linkChildren, key) in link.children"
      :key="`richtextLink-${key}`"
    >
      <RichtextText :text-data="linkChildren" />
    </template>
  </a>
</template>
