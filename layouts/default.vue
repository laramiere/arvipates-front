<script lang="ts" setup>
const store = useGlobalStore()
const { data } = useAsyncData('globalData', async () => {
  let header = null
  let footer = null

  if (store.needToFetchGlobalData) {
    try {
      const response = await $fetch('/api/global')
      if (!response) {
        throw new Error('failed to fetch global data')
      }

      if (response.header) {
        store.setHeaderData(response.header.data)
        header = response?.header.data
      }

      if (response.footer) {
        store.setFooterData(response.footer.data)
        footer = response?.footer.data
      }
    }
    catch (err) {
      store.setError(err.message)
    }
  }
  return {
    header,
    footer,
  }
})
</script>

<template>
  <div class="mb-[-2.1875rem] bg-black-100">
    <VHeader v-if="data?.header" />
    <main class="bg-black-100 pt-[6.625rem] tablet:pt-[7.3125rem] laptop:pt-[9.125rem]">
      <slot />
    </main>
    <VFooter v-if="data?.footer" />
  </div>
</template>
