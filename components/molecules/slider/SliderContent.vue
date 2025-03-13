<script lang="ts" setup>
import type { StrapiPictureInterface } from '@/interfaces'

const props = defineProps<{
  items: StrapiPictureInterface[]
}>()
const config = useRuntimeConfig()
const slider = ref(null)
const sliderContent = ref(null)
const isVisible = useElementVisibility(slider, {
  rootMargin: '50px 0px 50px 0px',
})
const scrollYMemory = ref(0)
const scrollDirection = ref<'bottom' | 'top'>('bottom')

const sliderContentPosition = ref(20)
const imagePostion = ref(0)
const imageContainerPosition = ref(0)

function setSliderPosition() {
  if (sliderContentPosition.value < 20) {
    sliderContentPosition.value = 20
    return
  }
  const scrollingBottom = scrollDirection.value === 'bottom'
  scrollingBottom ? sliderContentPosition.value += 8 : sliderContentPosition.value -= 8
}
function setImageContainerPosition() {
  const scrollingBottom = scrollDirection.value === 'bottom'
  if (imageContainerPosition.value < 0) {
    imageContainerPosition.value = 0
    return
  }
  scrollingBottom ? imageContainerPosition.value += 0.05 : imageContainerPosition.value -= 0.05
}
function setImagePosition() {
  const scrollingBottom = scrollDirection.value === 'bottom'
  if (imagePostion.value < 0) {
    imagePostion.value = 0
    return
  }
  scrollingBottom ? imagePostion.value += 0.1 : imagePostion.value -= 0.1
}

function setScrollListener() {
  const scrollDirectionValue = window.scrollY > scrollYMemory.value ? 'bottom' : 'top'
  scrollDirection.value = scrollDirectionValue
  scrollYMemory.value = window.scrollY
  setSliderPosition()
  setImagePosition()
  setImageContainerPosition()
  scrollYMemory.value = window.scrollY
}

function resteAllPosition() {
  sliderContentPosition.value = 20
  imagePostion.value = 0
  imageContainerPosition.value = 0
}

watch(isVisible, () => {
  if (!window) {
    return
  }
  if (isVisible.value) {
    window.addEventListener('scroll', setScrollListener)
  }
  else {
    window.removeEventListener('scroll', setScrollListener)
    if (scrollDirection.value === 'top') {
      resteAllPosition()
      sliderContentPosition.value = 20
    }
  }
})
</script>

<template>
  <div
    ref="slider"
    class="c-slider pt-8"
  >
    <div
      ref="sliderContent"
      class="c-slider__content relative flex shrink-0 flex-nowrap items-start gap-x-8 tablet:gap-x-[1.875rem] desktop:gap-x-[50px]"
      :style="{ transform: `translateX(-${sliderContentPosition}px)` }"
    >
      <div
        v-for="(item, key) in props.items"
        :key="item.id"
        class="c-slider__item shrink-0 basis-[51.28%] origin-center odd:-rotate-3  even:translate-y-[24px] even:rotate-3 tablet:basis-[30%] tablet:even:translate-y-[54px] tablet:even:rotate-[3.33deg]"
      >
        <div
          class="rounded-global border border-black-200 p-[7px] tablet:p-[0.8rem]"
          :style="{ transform: key % 2 === 0 ? `translateY(-${imageContainerPosition}%)` : `translateY(${imageContainerPosition}%)` }"
        >
          <div class="relative h-0 w-full overflow-hidden rounded-global pt-[120%] tablet:pt-[132%]">
            <div class="absolute left-0 top-0 size-full">
              <div class="absolute left-1/2 top-1/2 size-[150%] -translate-x-1/2 -translate-y-1/2">
                <img
                  class="loaded size-full object-cover"
                  :style="{ transform: `translateX(${imagePostion}%)` }"
                  loading="lazy"
                  :src="`${config.public.apiBaseUrl}${item.url}`"
                  :alt="item.alternativeText"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-slider__content {
  transition: transform .5s linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)

}
</style>
