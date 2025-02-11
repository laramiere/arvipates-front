import type { FooterInterface, HeaderInterface } from '@/interfaces'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const header = ref<HeaderInterface | null>(null)
  const footer = ref<FooterInterface | null>(null)
  const error = ref('')
  const setHeaderData = (data: HeaderInterface) => header.value = data
  const setFooterData = (data: FooterInterface) => footer.value = data
  const setError = (data: string) => error.value = data

  const needToFetchGlobalData = computed(() => {
    return header.value === null && footer.value === null
  })
  return {
    header,
    footer,
    needToFetchGlobalData,
    setHeaderData,
    setFooterData,
    setError,
  }
})
