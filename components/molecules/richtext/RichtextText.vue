<script setup lang="ts">
import type { RichtextTextInterface } from '@/interfaces'

const props = defineProps<{ textData: RichtextTextInterface }>()

const handleGoodMarkup = computed(() => {
  if (props.textData.bold) {
    return 'strong'
  }
  if (props.textData.italic) {
    return 'i'
  }
  if (props.textData.strikethrough) {
    return 's'
  }
  if (props.textData.underline) {
    return 'u'
  }
  return ''
})
const getElementClasses = computed(() => {
  const defaultClass = 'inline'
  switch (handleGoodMarkup.value) {
    case 'strong': return `${defaultClass}`
    case 'i': return `${defaultClass}`
    case 's': return `${defaultClass}`
    case 'u': return `${defaultClass}`
    default: return `text-base`
  }
})
</script>

<template>
  <component
    :is="handleGoodMarkup"
    v-if="handleGoodMarkup"
    :class="getElementClasses"
  >
    {{ textData.text }}
  </component>
  <template v-else>
    {{ textData.text }}
  </template>
</template>
