<script lang="ts" setup>
import type { StrapiCardComponentInterface } from '@/interfaces'

defineProps<StrapiCardComponentInterface>()
</script>

<template>
  <div class="card overflow-hidden rounded-t-global bg-black-100 pb-16 pt-10 desktop:py-20">
    <div class="container-xl container mx-auto px-[1.5625rem] tablet:flex desktop:px-0">
      <div
        v-for="section in card.sections"
        :key="`card-section-${section.id}`"
        class="w-full"
      >
        <h2 class="mb-10 font-serif text-2xl font-bold uppercase">
          {{ section.title }}
        </h2>
        <ul class="border-y border-ble-200 py-8">
          <template
            v-for="cardItem in section.card_items"
            :key="`card-item-${cardItem.documentId}`"
          >
            <li
              v-if="cardItem.visible"
              class="flex items-center justify-between border-ble-200 text-base [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-8"
            >
              <span>
                {{ cardItem.title }}
              </span>
              <span>
                {{ cardItem.price }}€
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
