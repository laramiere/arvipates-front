<script lang="ts" setup>
import type { Picture } from '@/shared/interfaces'

const props = defineProps<{
  items: Picture[]
}>()

const slider = ref(null)
/*
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
}) */
</script>

<template>
  <div
    ref="slider"
    class="c-slider pt-8"
  >
    <div class="c-slider__content relative left-[-20%] flex shrink-0 flex-nowrap items-start gap-x-8 tablet:gap-x-[1.875rem] desktop:gap-x-[50px]">
      <div
        v-for="item in props.items"
        :key="item.id"
        class="c-slider__item shrink-0 basis-[51.28%] origin-center odd:-rotate-3  even:translate-y-[24px] even:rotate-3 tablet:basis-[30%] tablet:even:translate-y-[54px] tablet:even:rotate-[3.33deg]"
      >
        <div class="rounded-global border border-black-200 p-[7px] tablet:p-[0.8rem]">
          <div class="relative h-0 w-full overflow-hidden rounded-global pt-[120%] tablet:pt-[132%]">
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
