import { ComponentName } from '@/interfaces'
import qs from 'qs'

const getPagesQueryString = function (path: string) {
  return qs.stringify({
    filters: {
      navigation_item: {
        pageLink: {
          $eq: path,
        },
      },
    },
    populate: {
      seo: {
        populate: '*',
      },
      dynamicZone: {
        on: {
          [ComponentName.HeroHome]: {
            populate: '*',
          },
          [ComponentName.Slider]: {
            populate: '*',
          },
          [ComponentName.ImageWithTextBlock]: {
            populate: '*',
          },
          [ComponentName.ContentBlockCardWithBg]: {
            populate: '*',
          },
          [ComponentName.Timetable]: {
            populate: '*',
          },
          [ComponentName.Map]: {
            populate: '*',
          },
          [ComponentName.PictureWall]: {
            populate: '*',
          },
        },
      },
    },
  }, {
    encodeValuesOnly: true,
  })
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  try {
    const body = await readBody(event)
    const queryString = getPagesQueryString(body.path)
    const response = await fetch(`${config.public.apiBaseUrl}/api/pages?${queryString}`)
    const data = await response.json()
    // eslint-disable-next-line no-console
    console.log('data', data)

    if (!data.data.length) {
      throw new Error('Page non trouver')
    }
    return data
  }
  catch (err) {
    return err
  }
})
