<script lang="ts" setup>
const props = defineProps<{
  external: boolean
  href: string
}>()
const emit = defineEmits(['click'])
</script>

<template>
  <a
    v-if="props.external"
    :href="props.href"
    class="c-button inline-block cursor-pointer rounded-global border border-ble-200 bg-ble-100 px-4 py-2  text-xs font-normal leading-normal text-black-400 hover:text-ble-100 tablet:px-6 tablet:py-4 tablet:text-base"
    @click="emit('click')"
  >
    <span class="uppercase">
      <slot />
    </span>
  </a>
  <NuxtLink
    v-else
    class="c-button inline-block cursor-pointer rounded-global border border-ble-200 bg-ble-100 px-4 py-2 text-xs font-normal leading-normal text-black-400 hover:text-ble-100 tablet:px-6 tablet:py-4 tablet:text-base"
    :to="props.href"
    @click="emit('click')"
  >
    <span class="uppercase">
      <slot />
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.c-button {
  position: relative;
  overflow: hidden;

   span {
    color: inherit;
    position: relative;
    z-index: 2;
    transition: var(--transition-default);
   }

  &::before,
  &::after {
    content: '';
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition-default);
  }

  &::before {
    top: 100%;
    background: var(--color-ble-200);
    border-radius: 50% 50% 0 0;
    transform: scaleY(.5);
  }

  &::after {
    bottom: 0;
    background: var(--color-ble-100);
    border-radius: 0 0 0 0;
    transform: scaleY(1);
  }

  &:hover {
    &::before {
      top: 0;
      border-radius: 0 0 0 0;
      transform: scaleY(1);
    }

    &::after {
      bottom: 100%;
      border-radius: 0 0 50% 50%;
      transform: scaleY(.5);
    }
  }
}
</style>
