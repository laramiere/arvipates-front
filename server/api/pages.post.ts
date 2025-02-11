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
        },
      },
    },
  }, {
    encodeValuesOnly: true,
  })
}
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const queryString = getPagesQueryString(body.path)
    const response = await fetch(`http://localhost:1337/api/pages?${queryString}`)
    const data = await response.json()

    if (!data.data.length) {
      throw new Error('Page non trouver')
    }
    return data
  }
  catch (err) {
    return err
  }
})
