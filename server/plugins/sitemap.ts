import { defineNitroPlugin } from 'nitropack/runtime'
import qs from 'qs'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('sitemap:input', async (ctx) => {
    const query = qs.stringify({
      populate: {
        navigation_items: {
          populate: '*',
        },
      },
    }, {
      encodeValuesOnly: true,
    })
    try {
      const response = await fetch(`${process.env.NUXT_PUBLIC_API_BASE_URL}/api/sitemap?${query}`)
      if (!response) {
        ctx.urls.push('/')
        return
      }
      const data = await response.json()
      if (!data?.data?.navigation_items) {
        ctx.urls.push('/')
        return
      }
      const urls = data.data.navigation_items.reduce((acc, item) => {
        acc.push(item.pageLink)
        return acc
      }, [])
      ctx.urls.push(...urls)
    }
    catch (err) {
      console.log('error sitemap:input', err)
    }
  })
})
