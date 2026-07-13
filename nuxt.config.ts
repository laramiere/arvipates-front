export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  devServer: {
    host: 'dev.arvipates.fr',
    port: 3000,
    https: {
      cert: './certs/dev.arvipates.fr+2.pem',
      key: './certs/dev.arvipates.fr+2-key.pem',
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:1337',
      seoSiteUrl: process.env.NUXT_PUBLIC_SEO_SITE_URL || 'http://localhost:3000',
      scripts: {
        googleTagManager: {
          id: process.env.NUXT_PUBLIC_SCRIPTS_GOOGLE_TAG_MANAGER_ID || 'GTM-54W7RFWV',
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-site-config',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/scripts',
  ],
  fonts: {
    provider: 'google',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon/favicon.ico',
          sizes: '96x96',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          href: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon/favicon.svg',
        },
      ],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Restaurant',
          'name': 'Arvi\'Pâtes',
          'image': 'https://arvipates.fr/arvipates.png',
          'url': 'https://arvipates.fr',
          'telephone': '+33988386940',
          'servesCuisine': ['Savoyarde', 'Italienne'],
          'priceRange': '€€',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '435 Route des Hottes',
            'addressLocality': 'Verchaix',
            'postalCode': '74440',
            'addressRegion': 'Haute-Savoie',
            'addressCountry': 'FR',
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 46.0894,
            'longitude': 6.6967,
          },
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '11:00',
              'closes': '15:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '18:00',
              'closes': '00:00',
            },
          ],
          'acceptsReservations': 'https://arvipates.fr/reserver',
          'hasMenu': 'https://arvipates.fr/la-carte',
          'sameAs': [
            'https://facebook.com/people/ArviP%C3%A2tes/61558847707094/',
            'https://instagram.com/arvi_pates/',
          ],
        }),
      }],
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
  scripts: {
    registry: {
      googleTagManager: true,
    },
  },
})
