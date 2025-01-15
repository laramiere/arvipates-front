<template>
  <div class="c-hero relative pt-32">
    <img class="relative z-10 block h-auto w-full" src="/images/hero_bg.png" alt="">
    <div class="c-hero__media asbolute container-xl container absolute left-1/2 top-0 z-0 flex w-full -translate-x-1/2 justify-between">
      <div>
        <img src="/images/liguine-arvipates-1.png" alt="">
      </div>
      <div>
        <img src="/images/liguine-arvipates-2.png" alt="">
      </div>
    </div>
    <div class="c-hero__cta container-xl container absolute left-1/2 z-20 mx-auto flex -translate-x-1/2 justify-end">
      <ScrollButton />
    </div>
    <div class="c-hearo_content absolute left-1/2 top-32 z-30 flex -translate-x-1/2 flex-col items-center justify-center">
      <h1 class="mb-20 font-serif text-9xl uppercase">
        Arvi'pâtes
      </h1>
      <p class="m-auto mb-10 max-w-96 text-center text-base">
        <strong>Restaurant convivial</strong> et <strong>fabrique de pâtes artisanales</strong> au coeur de la <strong>vallée du Giffre</strong>
      </p>
      <VButton class="w-auto">
        Réserver une table
      </VButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-hero {
  padding-top: 18.75rem;

  &__cta {
    top: 38%;
  }

  &__media {
    > div {
      &:first-child {
        padding-top: 20%;
      }
    }
  }
}
</style>
