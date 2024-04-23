<template>
  <div class="piano-octave">
    <PianoKey
        v-for="note in octaveNotes"
        :key="note.tone"
        :note="note"
        :is-disabled="octaveDisabledNotes.includes(note.tone)"
    >
      <PianoKeyMark v-if="octaveMarkedNotes.includes(note.tone)" />
    </PianoKey>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EOctave, EOctaveTone, INoteId } from '@/types/notes'
import { OCTAVE_TONES } from '@/const/notes'
import PianoKey from '@/components/PianoKey.vue'
import PianoKeyMark from '@/components/PianoKeyMark.vue'


const props = withDefaults(defineProps<{
  octave: EOctave,
  markedNotes?: INoteId[],
  disabledNotes?: INoteId[],
}>(), {
  markedNotes: [],
  disabledNotes: [],
})

const octaveNotes = computed<INoteId[]>(() =>
  OCTAVE_TONES.map((note) => ({tone: note, octave: props.octave}))
)

const octaveMarkedNotes = computed<EOctaveTone[]>(() =>
    props.markedNotes
        .filter((note) => note.octave === props.octave)
        .map((note) => note.tone)
)

const octaveDisabledNotes = computed<EOctaveTone[]>(() =>
  props.disabledNotes
    .filter((note) => note.octave === props.octave)
    .map((note) => note.tone)
)

</script>

<style scoped lang="scss">
.piano-octave {
  display: flex;
  flex-direction: row;
  width: fit-content;
  // height: var(--ph-keyboard-height);
  position: relative;
}
</style>
