export function useScrollTo(contentRef: Ref<HTMLElement | null>) {
  const handleScrollTo = () => {
    if (!contentRef.value) {
      return
    }
    window.scrollTo({
      top: contentRef.value.scrollHeight,
      behavior: 'smooth',
    })
  }

  return {
    handleScrollTo,
  }
}
