import type { GlobalDataResponse } from '@/interfaces'
import { useGlobalStore } from '@/stores/global.store'

export default defineNuxtRouteMiddleware(async () => {
  const { needToFetchGlobalData, setHeaderData, setFooterData, setError } = useGlobalStore()
  if (needToFetchGlobalData) {
    try {
      const response = await fetch('/api/global')
      if (!response.ok) {
        throw new Error('failed to fetch global data')
      }
      const data: GlobalDataResponse = await response.json()

      if (data.header) {
        setHeaderData(data.header.data)
      }

      if (data.footer) {
        setFooterData(data.footer.data)
      }
    }
    catch (err) {
      setError(err.message)
    }
  }
})
