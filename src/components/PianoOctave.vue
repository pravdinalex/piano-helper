<template>
  <div class="piano-octave">
    <PianoKey
        v-for="note in octaveNotes"
        :key="note.note"
        :note="note"
    >

    </PianoKey>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EOctave, INoteId } from '@/types/notes'
import { KEYS } from '@/const/const'
import PianoKey from '@/components/PianoKey.vue'



const props = defineProps<{
  octave: EOctave
}>()

const octaveNotes = computed<INoteId[]>(() =>
  KEYS.map((note) => ({note, octave: props.octave}))
)

</script>

<style scoped>
.piano-octave {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: var(--ph-keyboard-height);
  position: relative;
}
</style>
