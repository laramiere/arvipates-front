<script lang="ts" setup>
import type { RichtextContentType } from '@/interfaces'
import { RichtextTypeEnum } from '@/interfaces'

defineProps<{ content: RichtextContentType[] }>()
</script>

<template>
  <template
    v-for="(item, key) in content"
    :key="`wysiwyg-${key}`"
  >
    <RichtextHeading v-if="item.type === RichtextTypeEnum.Heading" :heading="item" />
    <RichtextParagraph v-else-if="item.type === RichtextTypeEnum.Paragraph" :paragraph="item" />
    <RichtextList v-else-if="item.type === RichtextTypeEnum.List" :list="item" />
    <RichtextQuote v-else :quote="item" />
  </template>
</template>

<style lang="scss" scoped>
.wysiwyg {

}
</style>
