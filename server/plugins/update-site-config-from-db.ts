import { defineNitroPlugin } from 'nitropack/runtime'
import qs from 'qs'

export default defineNitroPlugin(async (nitroApp) => {
  const query = qs.stringify({
    populate: '*',
  })
  const siteParams = {
    url: 'http://localhost:3000',
    env: 'developmentttttt',
    indexable: false,
    name: 'arvipateDev',
  }
  try {
    const response: {
      data: {
        url: string
        env: string
        indexable: boolean
        name: string
      }
    } = await $fetch(`${process.env.NUXT_PUBLIC_API_BASE_URL}/api/site-config?${query}`)

    siteParams.url = response.data.url
    siteParams.env = response.data.env
    siteParams.indexable = response.data.indexable
    siteParams.name = response.data.name
  }
  catch (err) {
    console.log('error site config init', err)
  }

  nitroApp.hooks.hook('site-config:init', (ctx) => {
    ctx.siteConfig.push(siteParams)
  })
})
