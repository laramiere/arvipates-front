import type {
  FooterInterface,
  HeaderInterface,
} from '@/interfaces'

import qs from 'qs'

const headerQueryString = qs.stringify({
  populate: {
    topBar: {
      populate: {
        SocialLink: {
          populate: '*',
        },
        address: {
          populate: '*',
        },
      },
    },
    navLeft: {
      populate: '*',
    },
    navRight: {
      populate: '*',
    },
    bookCta: {
      populate: '*',
    },
  },
})
const footerQueryString = qs.stringify({
  populate: {
    SocialLink: {
      populate: '*',
    },
    navigation_items: {
      populate: '*',
    },
  },
})

export default defineEventHandler(async (): Promise<{
  header: HeaderInterface | null
  footer: FooterInterface | null
  error?: string
}> => {
  const config = useRuntimeConfig()
  try {
    const [header, footer]: [HeaderInterface, FooterInterface] = await Promise.all([
      fetch(`${config.public.apiBaseUrl}/api/header?${headerQueryString}`).then(response => response.json()),
      fetch(`${config.public.apiBaseUrl}/api/footer?${footerQueryString}`).then(response => response.json()),
    ])

    return {
      header,
      footer,
    }
  }
  catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    return {
      header: null,
      footer: null,
      error: (error as Error).message,
    }
  }
})
