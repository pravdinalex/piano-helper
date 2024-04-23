<template>
  <main>
    <PianoKeyboard>
      <template
        v-for="octave in shownOctaves"
        :key="octave"
      >
        <PianoOctave
          :octave="octave"
          :marked-notes="markedNotes"
          :disabled-notes="disabledNotes"
        />
        <div
          v-if="octave !== shownOctaves[shownOctaves.length - 1]"
          class="octave-divider"
        ></div>
      </template>
    </PianoKeyboard>

    <section>
      <label>
        <input type="checkbox" v-model="isMinorTonality" />
        {{ TONALITY_SUFFIX[ETonalitySign.minor] }}
      </label>
      <button
        v-for="key in OCTAVE_TONES"
        :key="key"
        @click="setTonality(key)"
      >{{ tonalityTitle({ tone:  key, sign: selectedTonalitySign }) }}</button>
      <button @click="keyboardDisplayStore.resetTonality()">reset</button>


    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import PianoOctave from '@/components/PianoOctave.vue'
import type { INoteId } from '@/types/notes'
import { EOctaveTone, EOctave } from '@/types/notes'
import { OCTAVES, OCTAVE_TONES } from '@/const/notes'
import { TONALITY_SUFFIX } from '@/const/notes'
import { useKeyboardDisplayStore } from '@/stores/keyboardDisplay'
import { storeToRefs } from 'pinia'
import { tonalityTitle } from '@/helpers/helpers'
import { ETonalitySign } from '@/types/tonality'


const keyboardDisplayStore = useKeyboardDisplayStore()
const { currentTonality } = storeToRefs(keyboardDisplayStore)

const shownOctaves = [EOctave.small, EOctave.first, EOctave.second]

const isMinorTonality = ref(false)



const markedNotes: INoteId[] = [
  { octave: EOctave.first, tone: EOctaveTone.D },
  { octave: EOctave.first, tone: EOctaveTone.Fs },
  { octave: EOctave.first, tone: EOctaveTone.A },
]

const disabledNotes: INoteId[] = OCTAVES.reduce((acc, octave) => {
  return acc.concat(
    [EOctaveTone.Cs, EOctaveTone.G, EOctaveTone.B].map((note) => ({ octave, note }))
  )
}, [])

const selectedTonalitySign = computed<ETonalitySign>(() =>
  isMinorTonality.value ? ETonalitySign.minor : ETonalitySign.major
)

function setTonality(tone: EOctaveTone) {
  keyboardDisplayStore.setTonality(tone, selectedTonalitySign.value)
}

</script>

<style scoped lang="scss">
.octave-divider {
  width: var(--ph-padding-xs);
  background: var(--ph-key-disabled);
}
</style>

