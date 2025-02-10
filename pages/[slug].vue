<script setup lang="ts">
import type { GlobalPageDataResponse } from '@/interfaces'
import { ComponentName } from '@/interfaces'

const route = useRoute()
const HeroHome = resolveComponent('HeroHome')
const { data: pageContent } = await useAsyncData<GlobalPageDataResponse>(`${route.params.slug}`, async () => {
  try {
    const response = await $fetch('/api/pages', {
      method: 'POST',
      body: {
        path: route.path,
      },
    })
    return response
  }
  catch (err) {
    return err
  }
})
const getComponent = function (name: string) {
  switch (name) {
    case ComponentName.HeroHome:
      return HeroHome
  }
}
</script>

<template>
  <div>
    <component
      :is="getComponent(item.__component)"
      v-for="item in pageContent?.data[0].dynamicZone"
      :key="item.id"
      :component-data="item"
      v-bind="{ ...item }"
    />
  </div>
</template>
