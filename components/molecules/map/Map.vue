<script lang="ts" setup>
import type { MapInterface, StrapiAddressInterface } from '@/interfaces'
import 'leaflet/dist/leaflet.css'
import '@/assets/scss/_leaflet.scss'

const props = defineProps<MapInterface>()
const map = ref(null)

onMounted(async () => {
  if (!props.address) {
    return
  }
  try {
    const L = (await import('leaflet')).default

    function generateDivIcon(address: StrapiAddressInterface) {
      return L.divIcon({
        html: `
      <a
        class="flex flex-col items-center font-serif  font-bold text-black-400 no-underline"
        href="${address.href}"
        target="_blank"
      >
        <img src="images/pin.png" alt="pin map"/>
        <span class="leading-none block mt-[10px] text-2xl uppercase text-black-400">
          ${address.title}
        </span>
      </a>
      `,
        iconSize: [72, 72],
        iconAnchor: [36, 72],
      })
    }

    map.value = L.map('map', {
      zoomControl: false,
      scrollWheelZoom: false,
    }).setView([props.address.lat, props.address.lng], 16)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value)
    L.marker([props.address.lat, props.address.lng], {
      icon: generateDivIcon(props.address),
    }).addTo(map.value)
  }
  catch (error) {
    console.error('Failed to load Leaflet', error)
  }
})
</script>

<template>
  <section
    role="region"
    aria-label="carte interactive"
    class="card relative z-0 w-full overflow-hidden rounded-t-global"
  >
    <h2 id="map-title" class="sr-only">
      {{ props.title }}
    </h2>
    <div id="map" class="w-full pt-[121.555%] tablet:pt-[33.69%]">
      <p class="sr-only">
        Carte non disponible sans JavaScript activé.
      </p>
    </div>
  </section>
</template>
