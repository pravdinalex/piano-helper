<template>
  <main>
    <PianoKeyboard>
      <PianoOctave
        :octave="EOctave.small"
        :marked-notes="markedNotes"
        :disabled-notes="disabledNotes"
      />
      <div class="octave-divider"></div>
      <PianoOctave
        :octave="EOctave.first"
        :marked-notes="markedNotes"
        :disabled-notes="disabledNotes"
      />
      <div class="octave-divider"></div>
      <PianoOctave
        :octave="EOctave.second"
        :marked-notes="markedNotes"
        :disabled-notes="disabledNotes"
      />
    </PianoKeyboard>
  </main>
</template>

<script setup lang="ts">
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import PianoOctave from '@/components/PianoOctave.vue'
import type { INoteId } from '@/types/notes'
import { ENote, EOctave } from '@/types/notes'
import { OCTAVES } from '@/const/const'

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
  width: 4px;
  background: var(--ph-black-shadow);
}

</style>

