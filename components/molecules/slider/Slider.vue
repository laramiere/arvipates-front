<script lang="ts" setup>
import { useElementVisibility, useScroll } from '@vueuse/core'
import { ref } from 'vue'

const slider = ref(null)
const isVisible = useElementVisibility(slider)
const { y } = useScroll(slider)
</script>

<template>
  <div
    ref="slider"
    class="c-slider overflow-hidden bg-black-100 pb-[7.375rem] pt-8"
  >
    {{ isVisible }} - {{ y }}
    <div
      class="c-slider__content relative left-[-13.5rem] flex shrink-0 flex-nowrap items-start gap-x-10"
    >
      <div
        v-for="(item, key) in 5"
        :key="key"
        class="c-slider__item shrink-0 basis-1/4 odd:rotate-[-2.33deg] even:translate-y-[86px] even:rotate-[3.33deg]"
      >
        <div class="rounded-global border border-ble-200 p-[0.8rem]">
          <div class="relative h-0 w-full overflow-hidden rounded-global pt-[132%]">
            <div class="absolute left-0 top-0 size-full">
              <div class="size-full">
                <img class="loaded size-full object-cover" loading="lazy" :src="`/images/slide_${key}.jpg`" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
