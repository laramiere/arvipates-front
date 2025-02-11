// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:1337',
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
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
})
