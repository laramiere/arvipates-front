<script lang="ts" setup>
import type { RichtextQuoteInterface } from '@/interfaces'
import { RichtextTypeEnum } from '@/interfaces'

defineProps<{ quote: RichtextQuoteInterface }>()
</script>

<template>
  <blockquote>
    <template
      v-for="(blockquoteChild, blockquoteChildKey) in quote.children"
      :key="`blockquote-${blockquoteChildKey}`"
    >
      <RichtextLink
        v-if="blockquoteChild.type === RichtextTypeEnum.Link"
        :link="blockquoteChild"
      />
      <RichtextText v-else :text-data="blockquoteChild" />
    </template>
    <blockquote />
  </blockquote>
</template>
