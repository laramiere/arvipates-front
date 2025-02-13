export function useHeightGenerator(contentRef: Ref<HTMLElement | null>, delta: number = 80) {
  const height = ref<number>(0)
  const loaded = ref(false)

  const calculateHeight = () => {
    if (!contentRef.value) {
      return
    }
    const contentRefHeight = contentRef.value?.offsetHeight
    if (contentRefHeight) {
      height.value = contentRefHeight + delta
    }
  }

  const deboucedFn = useDebounceFn(calculateHeight, 400)
  useEventListener(window, 'resize', deboucedFn)

  onMounted(async () => {
    await nextTick()
    calculateHeight()
    setTimeout(() => {
      loaded.value = true
    }, 400)
  })

  return {
    height,
    loaded,
    calculateHeight,
  }
}
