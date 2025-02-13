<script lang="ts" setup>
import type { StrapiRichTextBlock, StrapiRichTextBlockChildren } from '@/interfaces'

withDefaults(defineProps<{
  content: StrapiRichTextBlock[]
  center: boolean
}>(), {
  center: true,
})

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
  <div
    :class="{ 'text-center': center }"
    class="m-auto mb-7 laptop:mb-10"
  >
    <template
      v-for="(item, key) in content"
      :key="`contentBlockText-${key}`"
    >
      <p
        v-if="item.children"
        class="text-xs laptop:text-base"
        v-html="generateText(item.children)"
      />
    </template>
  </div>
</template>
