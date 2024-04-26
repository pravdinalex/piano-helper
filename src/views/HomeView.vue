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
          :disabled-notes="disabledTonalityNotes"
        />
        <div
          v-if="octave !== shownOctaves[shownOctaves.length - 1]"
          class="octave-divider"
        ></div>
      </template>
    </PianoKeyboard>

    <section>
      <pre>{{ currentTonality }}</pre>

      <button @click="setTonality(prevOctaveTone(currentTonality.tone))"> &lt;- less </button>
      <button @click="setTonality(nextOctaveTone(currentTonality.tone))"> more -&gt; </button>

      <br>

      <button @click="keyboardDisplayStore.setScale(MAJOR_SCALE)">major</button>
      <button @click="keyboardDisplayStore.setScale(MINOR_SCALE)">minor</button>
      <button @click="keyboardDisplayStore.setScale(MAJOR_BLUES_SCALE)">major blues</button>
      <button @click="keyboardDisplayStore.setScale(MINOR_BLUES_SCALE)">minor blues</button>

    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import PianoOctave from '@/components/PianoOctave.vue'
import type { INoteId } from '@/types/notes'
import { EOctaveTone } from '@/types/notes'
import { MAJOR_SCALE, MINOR_SCALE, MAJOR_BLUES_SCALE, MINOR_BLUES_SCALE } from '@/const/intervals'
import { useKeyboardDisplayStore } from '@/stores/keyboardDisplay'
import { storeToRefs } from 'pinia'
import {
  prevOctaveTone,
  nextOctaveTone,
} from '@/helpers/helpers'
import { ETonalitySign } from '@/types/tonality'


const keyboardDisplayStore = useKeyboardDisplayStore()
const {
  shownOctaves,
  currentTonality,
  disabledTonalityNotes,
} = storeToRefs(keyboardDisplayStore)


const isMinorTonality = ref(false)

const markedNotes: INoteId[] = []

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

