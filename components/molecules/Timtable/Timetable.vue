<script setup lang="ts">
import type { Timetable } from '@/shared/interfaces'

type KeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6

const props = defineProps<{
  timetable: Timetable
}>()

const dayIndex: KeyType = new Date().getDay() as KeyType
const mappingArray = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
}
const activeItem = mappingArray[dayIndex]
</script>

<template>
  <div class="c-timetable bg-black-400 pb-20 pt-14">
    <h2 class="center mb-14 text-center font-serif text-2xl font-bold uppercase leading-8 text-black-100" v-html="props.timetable.title" />
    <div class="container-xl container mx-auto">
      <ul
        v-if="props.timetable.items.length"
        class="flex justify-between"
      >
        <li
          v-for="(item, key) in props.timetable.items"
          :key="item.id"
          :class="{ 'opacity-30': activeItem !== key }"
          class="border-b-2 border-ble-200 pb-4 hover:cursor-default hover:opacity-100"
        >
          <p class="mb-4 font-semibold uppercase leading-none text-black-200">
            {{ item.title }}
          </p>
          <span
            class="block font-black uppercase leading-none text-black-100"
          >
            {{ item.timeSlots1 }}
          </span>
          <span
            v-if="item.timeSlots2"
            class="block font-black uppercase leading-none text-black-100"
          >
            {{ item.timeSlots2 }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-timetable {
  ul {
    li {
      transition: var(--transition-default);
      width: 100%;
      max-width: 6.25rem;
    }
  }
}
</style>
