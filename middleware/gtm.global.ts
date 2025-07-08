export default defineNuxtRouteMiddleware(() => {
  const { proxy } = useScriptGoogleTagManager()
  let pageViewSended = false
  useScriptEventPage(({ title, path }) => {
    if (!pageViewSended) {
      pageViewSended = true
      proxy.dataLayer.push({
        event: 'pageView',
        title,
        path,
      })
    }
  })
})
