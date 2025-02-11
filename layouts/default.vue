<script lang="ts" setup>
const store = useGlobalStore()
const { footer, header } = storeToRefs(store)
</script>

<template>
  <div class="mb-[-2.1875rem] bg-black-100">
    <VHeader v-if="header" />
    <main class="bg-black-100 pt-[6.625rem] tablet:pt-[7.3125rem] laptop:pt-[9.125rem]">
      <slot />
    </main>
    <VFooter v-if="footer" />
  </div>
</template>
