<script setup lang="ts">
import type { TimetableInterface } from '@/interfaces'
import { onMounted, ref } from 'vue'

type KeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6
defineProps<TimetableInterface>()
const timetableList = ref<HTMLElement | null>(null)
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
onMounted(async () => {
  await nextTick()
  if (!timetableList.value) {
    return
  }
  const activeItem = timetableList.value.querySelector('.actif') as HTMLElement | null
  const activeItemPositionX = activeItem?.getBoundingClientRect().x

  if (activeItemPositionX) {
    timetableList.value.scrollTo({
      left: timetableList.value.scrollLeft + activeItemPositionX - 32,
      behavior: 'smooth',
    })
  }
})
</script>

<template>
  <div class="c-timetable bg-black-400 pb-[7.1875rem] pt-14">
    <h2
      class="center mb-14 text-center font-serif text-2xl font-bold uppercase leading-8 text-black-100"
    >
      {{ title }}
    </h2>
    <div
      v-if="times.length"
      class="container-xl container mx-auto px-[1.5625rem] desktop:px-0"
    >
      <ul
        ref="timetableList"
        class="flex flex-nowrap overflow-x-auto desktop:justify-between"
      >
        <li
          v-for="(item, key) in times"
          :key="item.id"
          :class="{ 'opacity-30': activeItem !== key, 'actif': activeItem === key }"
          class="w-[100px] shrink-0 grow border-b-2 border-ble-200 pb-4 hover:cursor-default hover:opacity-100 tablet:w-auto [&:not(:last-child)]:mr-8 desktop:[&:not(:last-child)]:mr-0"
        >
          <p class="mb-4 font-semibold uppercase leading-none text-black-200">
            {{ item.title }}
          </p>
          <span
            class="block font-black uppercase leading-none text-black-100"
          >
            {{ item.timeslot1 }}
          </span>
          <span
            v-if="item.timeslot2"
            class="block font-black uppercase leading-none text-black-100"
          >
            {{ item.timeslot2 }}
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
      max-width: 6.75rem;
    }
  }
}
</style>
