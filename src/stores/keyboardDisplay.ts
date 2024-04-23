import { ref } from 'vue'
import { defineStore } from 'pinia'
import { EOctaveTone } from '@/types/notes'
import { ETonalitySign } from '@/types/tonality'
import type { ITonality } from '@/types/tonality'


export const useKeyboardDisplayStore = defineStore('keyboard-display', () => {

  const currentTonality = ref<ITonality | null>(null)

  function setTonality(tone: EOctaveTone, sign: ETonalitySign) {
    currentTonality.value = {
      tone,
      sign,
    }
  }

  function resetTonality() {
    currentTonality.value = null
  }

  return {
    currentTonality,

    setTonality,
    resetTonality,
  }
})
