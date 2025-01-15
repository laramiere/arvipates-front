<script lang="ts" setup>
import { footerData } from '@/shared/fakeData'
</script>

<template>
  <div class="mb-[-2.1875rem] bg-black-100">
    <VHeader />
    <main class="bg-black-100">
      <slot />
    </main>
    <VFooter
      :data="footerData"
    />
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-top: 146px;
}
</style>
