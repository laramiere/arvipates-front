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
          'custom.hero-home': {
            populate: '*',
          },
          'custom.slider': {
            populate: '*',
          },
          'timetable.timetable': {
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
