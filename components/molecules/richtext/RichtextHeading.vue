<script lang="ts" setup>
import type { RichtextHeadingInterface } from '@/interfaces'

const props = defineProps<{ heading: RichtextHeadingInterface }>()
const getTitleClasses = computed(() => {
  const baseClasses = 'font-sans text-ble-300 uppercase laptop:font-extrabold font-bold my-4 my-[1.875rem]'
  switch (props.heading.level) {
    case 1: return `${baseClasses} laptop:text-4xl text-3xl`
    case 2: return `${baseClasses} laptop:text-3xl text-2xl`
    case 3: return `${baseClasses} laptop:text-2xl text-xl`
    case 4: return `${baseClasses} laptop:text-2xl text-xl`
    case 5: return `${baseClasses} laptop:text-2xl text-xl`
    case 6: return `${baseClasses} laptop:text-2xl text-xl`
    default: return `${baseClasses} text-base`
  }
})
</script>

<template>
  <component
    :is="`h${heading.level}`"
    :class="getTitleClasses"
  >
    <RichtextText
      v-for="(item, key) in heading.children"
      :key="`RichtextHeading-${key}`"
      :text-data="item"
    />
  </component>
</template>
