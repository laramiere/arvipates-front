<script lang="ts" setup>
</script>

<template>
  <div class="c-top-bar bg-black-300 py-2">
    <div class="container-xl container mx-auto flex items-center justify-between text-black-100">
      <div class="c-top-bar__social">
        <nav>
          <ul class="flex items-center">
            <li class="[&:not(:last-child)]:mr-2">
              <a href="#_">
                <Facebook />
              </a>
            </li>
            <li class="[&:not(:last-child)]:mr-2">
              <a href="#_">
                <Instagram />
              </a>
            </li>
            <li class="[&:not(:last-child)]:mr-2">
              <a href="#_">
                <Whatsapp />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="c-top-bar__info">
        <a
          class="text-black-100"
          href="https://www.google.com/maps/place/Rte+des+Hottes,+74440+Verchaix/@46.0920687,6.6682631,17z/data=!3m1!4b1!4m6!3m5!1s0x478c01f50bf3c017:0xe6a09dc2f11a4224!8m2!3d46.092065!4d6.670838!16s%2Fg%2F11ld14t6rv?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
        >
          Les Hottes Ouest - 74440 VERCHAIX
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-top-bar {
  &__social {
    svg {
      fill: currentColor;
      display: block;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}
</style>
