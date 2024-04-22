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
  </main>
</template>

<script setup lang="ts">
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import PianoOctave from '@/components/PianoOctave.vue'
import type { INoteId } from '@/types/notes'
import { ENote, EOctave } from '@/types/notes'
import { OCTAVES } from '@/const/const'

const shownOctaves = [EOctave.small, EOctave.first, EOctave.second]

const markedNotes: INoteId[] = [
  { octave: EOctave.first, note: ENote.D },
  { octave: EOctave.first, note: ENote.Ds },
  { octave: EOctave.first, note: ENote.Fs },
  { octave: EOctave.first, note: ENote.A },
]

const disabledNotes: INoteId[] = OCTAVES.reduce((acc, octave) => {
  return acc.concat(
    [ENote.Cs, ENote.G, ENote.B].map((note) => ({ octave, note }))
  )
}, [])

console.log('===')
console.log(disabledNotes)

</script>

<style scoped lang="scss">
.octave-divider {
  width: var(--ph-padding-xs);
  background: var(--ph-key-disabled);
}
</style>

