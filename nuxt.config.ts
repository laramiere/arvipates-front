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
