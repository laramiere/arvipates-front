<script lang="ts" setup>
import { PictoEnum } from '@/shared/interfaces'
import { computed } from 'vue'

import Facebook from './Facebook.vue'
import Instagram from './Instagram.vue'
import Whatsapp from './Whatsapp.vue'

const props = defineProps<{
  name: string
}>()

const getPicto = computed(() => {
  switch (props.name) {
    case PictoEnum.facebook:
      return Facebook
    case PictoEnum.instagram:
      return Instagram
    case PictoEnum.whatsapp:
      return Whatsapp
    default:
      return Facebook
  }
})
</script>

<template>
  <component :is="getPicto" />
</template>
