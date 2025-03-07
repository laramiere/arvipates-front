<script lang="ts" setup>
import type { RichtextListInterface } from '@/interfaces'
import { RichtextTypeEnum } from '@/interfaces'

const props = defineProps<{ list: RichtextListInterface }>()
const handleListMarkup = computed(() => {
  return props.list.format === 'unordered' ? 'ul' : 'ol'
})
</script>

<template>
  <component :is="handleListMarkup">
    <li v-for="(listItem, key) in list.children" :key="`list-${list.type}-item-${key}`">
      <RichtextList v-if="listItem.type === RichtextTypeEnum.List" :list="listItem" />
      <template
        v-for="(listItemChildren, listItemChildrenKey) in listItem.children"
        v-else
        :key="`list-${list.type}-item-children-${listItemChildrenKey}`"
      >
        <RichtextText v-if="listItemChildren.type === RichtextTypeEnum.Text" :text-data="listItemChildren" />
        <RichtextLink v-else :link="listItemChildren" />
      </template>
    </li>
  </component>
</template>
