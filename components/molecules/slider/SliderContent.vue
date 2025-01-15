<script lang="ts" setup>
import type { Picture } from '@/shared/interfaces'
import { useElementBounding, useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<{
  items: Picture[]
}>()
const slider = ref(null)
const isVisible = useElementVisibility(slider)
const { top } = useElementBounding(slider)
const { y } = useScroll(window)
const translateValue = computed(() => {
  if (!isVisible.value) {
    return 0
  }
  const viewportHeight = window.innerHeight
  const relativePosition = top.value - y.value
  if (relativePosition < viewportHeight) {
    return Math.max(0, relativePosition) / 2
  }

  return 0
})
</script>

<template>
  <div
    ref="slider"
    class="c-slider pt-8"
  >
    <div
      class="c-slider__content relative left-[-13.5rem] flex shrink-0 flex-nowrap items-start gap-x-10"
      :style="{ transform: `translateX(${translateValue}px)` }"
    >
      <div
        v-for="item in props.items"
        :key="item.id"
        class="c-slider__item shrink-0 basis-1/4 odd:rotate-[-2.33deg] even:translate-y-[86px] even:rotate-[3.33deg]"
      >
        <div class="rounded-global border border-black-200 p-[0.8rem]">
          <div class="relative h-0 w-full overflow-hidden rounded-global pt-[132%]">
            <div class="absolute left-0 top-0 size-full">
              <div class="size-full">
                <img
                  class="loaded size-full object-cover"
                  loading="lazy"
                  :src="item.file.url"
                  :alt="item.file.alternativeText"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
