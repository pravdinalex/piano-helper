<template>
  <div
      class="piano-key"
      :class="elementClass"
  >
    <div class="piano-key-bar">
      <div class="slot-container">
        <slot>{{ KEY_TITLES[note.note] }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INoteId } from '@/types/notes'
import { computed } from 'vue'
import { isBlackKey } from '@/helpers/helpers'
import { KEY_TITLES } from '@/const/const'

const props = defineProps<{
  note: INoteId
}>()

const elementClass = computed<Record<string, boolean>>(() => ({
  'is-black': isBlackKey(props.note.note)
}))

</script>

<style scoped lang="scss">
.piano-key {
  position: relative;

  .piano-key-bar {
    position: relative;
    background: var(--ph-white);
    box-shadow: inset -1px -1px 0 2px var(--ph-white-shadow);
    width: var(--ph-key-width);
    height: var(--ph-keyboard-height);
    border: 1px solid var(--ph-key-border);
    border-top: none;
    border-radius: 0 0 6px 6px;

    &:hover {
      border-color: var(--ph-active-border);
    }
  }

  &.is-black {
    width: 0;
    overflow: visible;

    .piano-key-bar {
      width: var(--ph-black-key-width);
      background: var(--ph-black);
      box-shadow: inset -1px -1px 0 2px var(--ph-black-shadow);
      transform: translateX(-50%);
      z-index: 1;
      height: var(--ph-black-key-height);
    }
  }

  .slot-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--ph-key-slot-height);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}

</style>
