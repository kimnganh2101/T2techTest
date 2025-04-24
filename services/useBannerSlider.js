// services/useBannerSlider.js
import { ref, onMounted } from 'vue'

export function useBannerSlider(delay = 400) {
  const banners = ref([])
  const visibleIndexes = ref([])

  onMounted(async () => {
    const res = await $fetch('/api/banners')
    banners.value = res

    banners.value.forEach((_, index) => {
      setTimeout(() => {
        visibleIndexes.value.push(index)
      }, index * delay)
    })
  })

  return {
    banners,
    visibleIndexes,
  }
}
