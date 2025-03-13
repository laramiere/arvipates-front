<script lang="ts" setup>
import type { PictureWallInterface } from '@/interfaces'

const props = defineProps<PictureWallInterface>()
const config = useRuntimeConfig()
const target = ref(null)
const targetVisible = useElementVisibility(target)
const startAnimation = ref(false)
watch(targetVisible, (value) => {
  if (value) {
    setTimeout(() => {
      startAnimation.value = true
    }, 500)
  }
})
</script>

<template>
  <section class="c-insta card relative overflow-hidden rounded-t-global bg-black-100 pb-20 pt-10 tablet:py-20">
    <div class="container-xl container mx-auto px-[1.5625rem] tablet:flex desktop:px-0">
      <h2 class="relative z-10 mx-auto mb-5 max-w-[9.475rem] text-center font-serif font-bold uppercase text-black-400 tablet:mb-0 tablet:w-1/3 tablet:max-w-full tablet:pr-[4.5rem]  tablet:text-left tablet:text-2xl">
        {{ props.title }}
      </h2>
      <img
        v-if="props.floatingPicture"
        class="absolute bottom-0 left-0 z-0 h-1/2 w-auto tablet:h-[85%]"
        :src="`${config.public.apiBaseUrl}${props.floatingPicture.url}`"
        role="none"
      >
      <div
        v-if="props.pictures.length"
        ref="target"
        class="c-insta__content relative z-10 grid grid-cols-2 gap-5 tablet:w-2/3 tablet:gap-8 laptop:grid-cols-3"
      >
        <div
          v-for="(item, key) in props.pictures"
          :key="`pictureWall-${item.id}`"
          class="relative w-full origin-bottom-left overflow-hidden rounded-global pt-[100%] opacity-0"
          :class="{ 'rotate-0 opacity-100': startAnimation, 'rotate-6': !startAnimation }"
          :style="{ transitionDelay: `${key * 100}ms` }"
        >
          <a
            :href="props.link"
          >
            <img
              class="absolute left-0 top-0 size-full object-cover"
              :src="`${config.public.apiBaseUrl}${item.url}`"
              :alt="item.alternativeText"
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.c-insta__content > div {
  transition: all 1s var(--animation-linear);
}
</style>
