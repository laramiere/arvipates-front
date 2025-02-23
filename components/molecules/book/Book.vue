<script lang="ts" setup>
import type { BookInterface } from '@/interfaces'

defineProps<BookInterface>()
const config = useRuntimeConfig()
</script>

<template>
  <div class="book relative">
    <img
      class="t-0 absolute left-0 z-0 size-full object-cover"
      role="none"
      :src="`${config.public.apiBaseUrl}${background.url}`"
    >
    <div class="px-[1.5625rem] py-[60px] tablet:py-[120px] laptop:px-0">
      <div class="relative z-10 mx-auto w-full max-w-[65rem] rounded-global bg-black-100 px-2 py-4 text-left tablet:px-10 tablet:py-14">
        <div class="mb-4 text-2xl uppercase tablet:mb-6 tablet:text-[2.5rem]">
          <h1 v-if="mainComponent">
            {{ title }}
          </h1>
          <h3 v-else>
            {{ title }}
          </h3>
        </div>
        <ContentBlockText
          :center="false"
          :content="content"
        />
        <div
          class="zc-widget-config"
          :data-restaurant="zenchefId"
          :data-primary-color="zenchefBackgroundColor"
          data-lang="fr"
        />
        <iframe
          class="min-h-96 w-full"
          title="Module Réservation"
          :src="`https://bookings.zenchef.com/results?rid=${zenchefId}&fullscreen=1&primaryColor=${zenchefBackgroundColor}`"
          frameborder="0"
          scrolling="yes"
        />
      </div>
    </div>
  </div>
</template>
