<script lang="ts" setup>
import type { StrapiSocialLinkInterface } from '@/interfaces'

const props = defineProps<{
  social: StrapiSocialLinkInterface
}>()
</script>

<template>
  <div
    class="c-social-link"
  >
    <p class="mb-3 max-w-[11.45rem] text-center text-base uppercase text-black-100 tablet:text-left">
      {{ props.social.title }}
    </p>
    <nav>
      <ul class="flex justify-center tablet:justify-start">
        <template
          v-for="(item, key) in props.social.cta"
          :key="`${key}-socialLink`"
        >
          <li
            v-if="item.visible"
            class="[&:not(:last-child)]:mr-6"
          >
            <a
              :href="item.href"
              target="_blank"
              :aria-label="item.title"
              class="block text-black-100"
            >
              <IconGenerator
                :name="item.picto"
              />
            </a>
          </li>
        </template>
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
