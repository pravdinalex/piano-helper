<template>
  <div class="piano-octave">
    <PianoKey
        v-for="note in octaveNotes"
        :key="note.note"
        :note="note"
        :is-disabled="octaveDisabledNotes.includes(note.note)"
    >
      <PianoKeyMark v-if="octaveMarkedNotes.includes(note.note)" />
    </PianoKey>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EOctave, ENote, INoteId } from '@/types/notes'
import { KEYS } from '@/const/const'
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
  KEYS.map((note) => ({note, octave: props.octave}))
)

const octaveMarkedNotes = computed<ENote[]>(() =>
    props.markedNotes
        .filter((note) => note.octave === props.octave)
        .map((note) => note.note)
)

const octaveDisabledNotes = computed<ENote[]>(() =>
  props.disabledNotes
    .filter((note) => note.octave === props.octave)
    .map((note) => note.note)
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
