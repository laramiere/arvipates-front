<script lang="ts" setup>
import type { SocialComponentInterface } from '@/shared/interfaces'

const props = defineProps<{
  social: SocialComponentInterface
}>()
</script>

<template>
  <div
    class="c-social-link"
  >
    <p class="mb-3 max-w-[11.55rem] text-center text-base uppercase text-black-100 desktop:text-left">
      {{ props.social.title }}
    </p>
    <nav>
      <ul class="flex justify-center desktop:justify-start">
        <li
          v-for="(item, key) in props.social.items"
          :key="`${key}-socialLink`"
          class="[&:not(:last-child)]:mr-6"
        >
          <a
            :href="item.link"
            :aria-label="item.ariaLabel"
            class="block text-black-100"
          >
            <IconGenerator
              :name="item.picto"
            />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.c-social-link {
  svg {
    fill: currentColor;
    width: 2rem;
    height: 2rem;
  }
}
</style>
