import { ref, onMounted, onUnmounted } from 'vue'

export function useHomePage() {
  const counter = ref<number>(0)      
  const counterSignal = ref<number>(0) 

  let timer: number | undefined

  onMounted(() => {
    console.log('[HomePage] mounted')
    timer = window.setInterval(() => {
      counterSignal.value = counterSignal.value + 1
    }, 1000)
  })

  onUnmounted(() => {
    if (timer !== undefined) window.clearInterval(timer)
  })

  function changeValue(value: number) {
    counter.value += value
    counterSignal.value += value
  }

  function resetValue(value: number) {
    counter.value = value
    counterSignal.value = value
  }

  return { counter, counterSignal, changeValue, resetValue }
}
