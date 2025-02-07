import qs from 'qs'

export function populateWrapper(stringToPopulate: object) {
  return qs.stringify(stringToPopulate)
}
