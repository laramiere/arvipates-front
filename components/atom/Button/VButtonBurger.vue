<script lang="ts" setup>
import { defineEmits, defineProps, ref } from 'vue'

const props = defineProps<{
  label: string
}>()
const emit = defineEmits<{
  (event: 'click'): void
}>()
const isActive = ref<boolean>(false)
function handleClick() {
  isActive.value = !isActive.value
  emit('click')
}
</script>

<template>
  <button
    class="relative size-12 rounded-full border border-ble-200 bg-ble-100"
    :class="{ active: isActive }"
    :aria-label="props.label"
    @click="handleClick"
  >
    <div class="absolute left-1/2 top-1/2 h-4 w-6 -translate-x-1/2 -translate-y-1/2">
      <span
        v-for="(item, key) in 3"
        :key="`burgger-${key}`"
        class="absolute left-0 block h-[2px] w-6  rounded-global bg-ble-200 opacity-100"
      />
    </div>
  </button>
</template>

<style lang="scss" scoped>
button {
  transition: var(--animation-bounce);

  &.active {
    transform: rotate(90deg);

    span {
      &:nth-child(1) {
        transform: rotate(45deg);
        left: 4px;
        top: -2px;
      }

      &:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 15px;
        left: 4px;
      }
    }
  }

  span {
    transform-origin: left center;
    transition: var(--animation-bounce);

    &:nth-child(1) {
        top: 0;
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(3) {
      top: 100%;
      transform: translateY(-100%);
    }
  }
}
</style>
