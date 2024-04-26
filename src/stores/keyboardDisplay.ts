import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { INoteId } from '@/types/notes'
import { EOctave, EOctaveTone } from '@/types/notes'
import type { TIntervals } from '@/types/intervals'
import type { ITonality } from '@/types/tonality'
import { ETonalitySign } from '@/types/tonality'
import { getTonalityTones, shiftOctaveTone, spreadOctaveTones } from '@/helpers/helpers'
import { OCTAVE_TONES } from '@/const/notes'
import { MAJOR_SCALE, MAIN_TONALITY_STEPS } from '@/const/intervals'


export const useKeyboardDisplayStore = defineStore('keyboard-display', () => {

  // --- state ---

  const shownOctaves = ref<EOctave[]>([EOctave.small, EOctave.first, EOctave.second])

  const currentTonality = ref<ITonality>({ tone: EOctaveTone.C, sign: ETonalitySign.major })

  const currentScale = ref<TIntervals>(MAJOR_SCALE)

  // --- computed ---

  const currentTonalityTones = computed<EOctaveTone[]>(() =>
    getTonalityTones(currentTonality.value, currentScale.value)
  )

  const disabledTonalityNotes = computed<INoteId[]>(() => {
    const disabledTones = OCTAVE_TONES.filter(
      (tone) => !currentTonalityTones.value.includes(tone)
    )
    return spreadOctaveTones(disabledTones.map((tone) => ({tone})), shownOctaves.value)
  })

  const mainTonalitySteps = computed(() => {
    const tones = MAIN_TONALITY_STEPS.map((step) => ({
      tone: shiftOctaveTone(currentTonality.value.tone, step.step).newTone,
      ...step,
    }))
    return spreadOctaveTones(tones, shownOctaves.value)
  })

  // --- methods ---

  function setTonality(tone: EOctaveTone, sign: ETonalitySign) {
    currentTonality.value.tone = tone
    currentTonality.value.sign = sign
  }

  function setScale(scale: TIntervals) {
    currentScale.value = scale
  }

  return {
    shownOctaves,
    currentTonality,
    currentTonalityTones,
    disabledTonalityNotes,
    mainTonalitySteps,

    setTonality,
    setScale,
  }
})
