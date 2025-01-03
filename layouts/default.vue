<template>
  <div class="bg-black-100">
    <VHeader />
    <main class="test h-screen bg-black-100">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-top: 146px;
}
</style>
