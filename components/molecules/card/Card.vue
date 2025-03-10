<script lang="ts" setup>
import type { StrapiCardComponentInterface } from '@/interfaces'

defineProps<StrapiCardComponentInterface>()
</script>

<template>
  <div v-if="card?.sections" class="card overflow-hidden rounded-t-global bg-black-100 pb-16 pt-10 desktop:py-20">
    <div class="container-xl container mx-auto px-[1.5625rem] desktop:px-0">
      <div
        v-for="section in card.sections"
        :key="`card-section-${section.id}`"
        class="w-full [&:not(:last-child)]:mb-7 laptop:[&:not(:last-child)]:mb-14"
      >
        <div class="lapto:mb-10 mb-5">
          <h2 class="font-serif text-xl font-bold uppercase laptop:text-2xl">
            {{ section.title }}
          </h2>
          <p v-if="section.description">
            {{ section.description }}
          </p>
        </div>
        <ul class="border-y border-ble-200 py-4 laptop:py-8">
          <template
            v-for="cardItem in section.card_items"
            :key="`card-item-${cardItem.documentId}`"
          >
            <li
              v-if="cardItem.visible"
              class="border-ble-200 text-base [&:not(:last-child)]:mb-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-4 laptop:[&:not(:last-child)]:mb-8 laptop:[&:not(:last-child)]:pb-8"
            >
              <div class="flex items-start justify-between">
                <div class="flex flex-col pr-5 laptop:pr-0">
                  <span class="font-bold">
                    {{ cardItem.title }}
                  </span>
                  <span class="italic">
                    {{ cardItem.description }}
                  </span>
                </div>
                <span v-if="cardItem.price > 0" class="text-sm laptop:text-xl">
                  {{ cardItem.price }}€
                </span>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
