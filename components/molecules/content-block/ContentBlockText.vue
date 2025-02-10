<script lang="ts" setup>
import type { StrapiRichTextBlock, StrapiRichTextBlockChildren } from '@/interfaces'

defineProps<{ content: StrapiRichTextBlock[] }>()

function generateText(childrens: StrapiRichTextBlockChildren[]): string {
  let paragraphe = ''
  childrens.forEach((child) => {
    if (child?.bold) {
      paragraphe += `<strong>${child.text}</strong>`
    }
    else {
      paragraphe += child.text
    }
  })
  return paragraphe
}
</script>

<template>
  <div class="m-auto mb-7 text-center laptop:mb-10 laptop:max-w-96">
    <p
      v-for="(item, key) in content"
      :key="`contentBlockText-${key}`"
      class="text-base"
      v-html="generateText(item.children)"
    />
  </div>
</template>
