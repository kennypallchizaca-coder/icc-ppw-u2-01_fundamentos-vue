import { onMounted, onUnmounted, ref } from 'vue'

const DEFAULT_START = 0
const TICK_INTERVAL = 1000

export function useCounterStore() {
  const counter = ref<number>(DEFAULT_START)
  const counterSignal = ref<number>(DEFAULT_START)
  let timer: number | undefined

  function clearTimer() {
    if (timer !== undefined) {
      window.clearInterval(timer)
      timer = undefined
    }
  }

  onMounted(() => {
    timer = window.setInterval(() => {
      counterSignal.value = counterSignal.value + 1
    }, TICK_INTERVAL)
  })

  onUnmounted(() => {
    clearTimer()
  })

  function changeBy(delta: number) {
    counter.value += delta
    counterSignal.value += delta
  }

  function reset(value: number = DEFAULT_START) {
    counter.value = value
    counterSignal.value = value
  }

  return {
    counter,
    counterSignal,
    changeBy,
    reset
  }
}
