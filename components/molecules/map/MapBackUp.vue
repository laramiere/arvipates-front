<script>
const L = (await import('leaflet')).default
const icon = L.divIcon({ className: 'custom-pin', html: `<button><span></span></button>` })
map.value = L.map('map').setView([46.090548, 6.674510], 13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map.value)
L.marker([46.090548, 6.674510], { icon }).addTo(map.value)
</script>
