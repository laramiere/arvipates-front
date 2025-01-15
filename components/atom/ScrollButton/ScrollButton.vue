<template>
  <button
    class="c-scroll flex flex-col items-center text-ble-300"
    aria-label="scroll down button"
    @click="$emit('clickOnScrollBtn')"
  >
    <span class="relative mb-2 block rounded-2xl border border-ble-300">
      <span class="absolute left-1/2 top-2 block -translate-x-1/2 rounded-full bg-ble-300" />
    </span>
    Défiler vers le bas
  </button>
</template>

<style lang="scss" scoped>
.c-scroll {
  span {
    width: 24px;
    height: 40px;

    > span {
      width: 8px;
      height: 8px;
    }
  }
}
</style>
