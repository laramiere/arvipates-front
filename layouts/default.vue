<script lang="ts" setup>
import { footerData } from '@/shared/fakeData'
</script>

<template>
  <div class="mb-[-2.1875rem] bg-black-100">
    <VHeader />
    <main class="bg-black-100 pt-[6.625rem] tablet:pt-[7.3125rem] laptop:pt-[9.125rem]">
      <slot />
    </main>
    <VFooter
      :data="footerData"
    />
  </div>
</template>
