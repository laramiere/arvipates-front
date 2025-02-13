module.exports = {
  apps: [
    {
      name: 'arvipates-front',
      port: '3002',
      exec_mode: 'cluster',
      instances: '1',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        NUXT_SITE_ENV: 'production',
        NUXT_PUBLIC_SEO_SITE_URL: 'https://arvipates.fr',
        NUXT_PUBLIC_SEO_NAME: 'arvipates',
        NUXT_PUBLIC_API_BASE_URL: 'https://api.arvipates.fr',

      },
    },
  ],
}
