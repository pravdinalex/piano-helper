<template>
  <main>
    <PianoKeyboard>
      <PianoOctave :octave="EOctave.small" />
      <div class="octave-divider"></div>
      <PianoOctave :octave="EOctave.first" />
      <div class="octave-divider"></div>
      <PianoOctave :octave="EOctave.second" />
    </PianoKeyboard>
  </main>
</template>

<script setup lang="ts">
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import PianoOctave from '@/components/PianoOctave.vue'
import { EOctave } from '@/types/notes'

</script>

<style scoped lang="scss">
.octave-divider {
  width: 4px;
  background: var(--ph-black-shadow);
}

</style>

