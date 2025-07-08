export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    let pageViewSended = false
    const cookiebot = window as typeof window & {
      Cookiebot: {
        consent: Record<string, boolean>
      }
    }
    const config = useRuntimeConfig()
    const pageViewObject: Record<string, string | null | undefined> = {
      event: 'pageView',
      title: null,
      path: null,
    }

    const { proxy } = useScriptGoogleTagManager({
      id: config.public.scripts.googleTagManager.id,
    })

    const sendPageViewObject = () => {
      proxy.dataLayer.push(pageViewObject)
    }

    window.addEventListener('CookiebotOnConsentReady', () => {
      if (typeof cookiebot.Cookiebot !== 'undefined' && cookiebot.Cookiebot.consent.marketing && !pageViewSended) {
        pageViewSended = true
        sendPageViewObject()
      }
    })

    useScriptEventPage((context) => {
      const { title, path } = context
      pageViewObject.path = path
      pageViewObject.title = title

      if (!pageViewSended && typeof cookiebot.Cookiebot !== 'undefined' && cookiebot.Cookiebot.consent.marketing) {
        pageViewSended = true
        sendPageViewObject()
      }
    })
  }
})
