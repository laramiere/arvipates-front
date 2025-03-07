<script lang="ts" setup>
import type { RichtextParagraphInterface } from '@/interfaces'
import { RichtextTypeEnum } from '@/interfaces'

defineProps<{ paragraph: RichtextParagraphInterface }>()
</script>

<template>
  <p>
    <template
      v-for="(paragraphChild, paragraphChildKey) in paragraph.children"
      :key="`blockquote-${paragraphChildKey}`"
    >
      <RichtextLink
        v-if="paragraphChild.type === RichtextTypeEnum.Link"
        :link="paragraphChild"
      />
      <RichtextText v-else :text-data="paragraphChild" />
    </template>
  </p>
</template>

<style scoped>
.p-style:not(:last-child):not(+ p) {
  margin-bottom: 1rem; /* ou la valeur que tu souhaites */
}
</style>
