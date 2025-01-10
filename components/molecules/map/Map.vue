<script lang="ts" setup>
import type { PoiInterface } from '@/shared/interfaces'
import 'leaflet/dist/leaflet.css'
import '@/assets/scss/_leaflet.scss'

const props = defineProps<{ poi: PoiInterface }>()
const map = ref(null)

onMounted(async () => {
  try {
    const L = (await import('leaflet')).default

    function generateDivIcon(icon: PoiInterface) {
      return L.divIcon({
        html: `
      <a
      class="flex flex-col items-center font-serif  font-bold text-black-400 no-underline"
      href="${icon.link}">
        <img src="${icon.picture.file.url}" />
        <span class="leading-none block mt-[10px] text-2xl uppercase text-black-400">${icon.title}</span>
      </a>
      `,
        iconSize: [72, 72],
        iconAnchor: [36, 72],
      })
    }

    map.value = L.map('map', {
      zoomControl: false,
      scrollWheelZoom: false,
    }).setView(props.poi.latlng, 16)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value)
    L.marker(props.poi.latlng, {
      icon: generateDivIcon(props.poi),
    }).addTo(map.value)
  }
  catch (error) {
    console.error('Failed to load Leaflet', error)
  }
})
</script>

<template>
  <section role="region" aria-label="carte interactive" class="card w-full overflow-hidden rounded-t-global">
    <h2 id="map-title" class="sr-only">
      Carte interactive
    </h2>
    <div id="map" class="w-full pt-[33.69%]">
      <p class="sr-only">
        Carte non disponible sans JavaScript activé.
      </p>
    </div>
  </section>
</template>
