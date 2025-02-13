import qs from 'qs'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
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
  ],
  fonts: {
    provider: 'google',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  sitemap: {
    urls: async (): Promise<string[]> => {
      const query = qs.stringify({
        populate: {
          navigation_items: {
            populate: '*',
          },
        },
      }, {
        encodeValuesOnly: true,
      })
      const response = await fetch(`${process.env.NUXT_PUBLIC_API_BASE_URL}/api/sitemap?${query}`)
      if (!response) {
        return ['/']
      }
      const data = await response.json()
      if (!data?.data?.navigation_items) {
        return ['/']
      }
      const urls = data.data.navigation_items.reduce((acc, item) => {
        acc.push(item.pageLink)
        return acc
      }, [])
      return urls
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
  site: {
    url: process.env.NUXT_PUBLIC_SEO_SITE_URL || 'https://arvipates.fr',
    name: process.env.NUXT_PUBLIC_SEO_NAME || 'Arvipâtes',
  },
})
