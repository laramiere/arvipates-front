<script lang="ts" setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="
    c-button
    bg-ble-100
    text-black-300
    py-4
    px-6
    border
    border-ble-200
    rounded-global
    "
    @click="emit('click')"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.c-button {
  position: relative;
  color: var(--color-black-400);
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
    color: var(--color-black-300);

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
