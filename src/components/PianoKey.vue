<template>
  <div
      class="piano-key"
      :class="elementClasses"
  >
    <div
      class="piano-key-bar"
      @click="onClickKey"
    >
      <div class="slot-container">
        <slot></slot>
      </div>
    </div>
    <div
      v-if="!isBlackKey(props.note.tone)"
      class="piano-key-note"
    >
      {{ KEY_TITLES[note.tone] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INoteId } from '@/types/notes'
import { computed } from 'vue'
import { isBlackKey } from '@/helpers/helpers'
import { KEY_TITLES } from '@/const/keys'

const props = withDefaults(defineProps<{
  note: INoteId,
  isInteractive?: boolean,
  isDisabled?: boolean,
}>(), {
  isInteractive: true,
  isDisabled: false,
})

const emit = defineEmits<{
  (e: 'click-note', note: INoteId): void,
}>()

const elementClasses = computed<Record<string, boolean>>(() => ({
  'is-black': isBlackKey(props.note.tone),
  'is-interactive': props.isInteractive && !props.isDisabled,
  'is-disabled': props.isDisabled,
}))

function onClickKey() {
  if (props.isInteractive && !props.isDisabled) {
    emit('click-note', props.note)
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.piano-key {
  position: relative;
  // pointer-events: none;

  .piano-key-bar {
    // pointer-events: all;
    position: relative;
    background: var(--ph-white);
    @include light-shadow(var(--ph-white-shadow));
    width: var(--ph-key-width);
    height: var(--ph-keyboard-height);
    border: 1px solid var(--ph-key-border);
    border-top: none;
    border-radius: 0 0 6px 6px;
  }

  &.is-black {
    width: 0;
    overflow: visible;

    > * {
      transform: translateX(-50%);
      z-index: 1;
    }

    .piano-key-bar {
      width: var(--ph-black-key-width);
      background: var(--ph-black);
      @include light-shadow(var(--ph-black-shadow));
      height: var(--ph-black-key-height);
    }
  }

  &:not(.is-black) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.is-interactive {
    .piano-key-bar {
      cursor: pointer;

      &:hover {
        $active: var(--ph-active-primary);
        border-color: $active;
        @include light-shadow($active);
      }
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
    gap: var(--ph-padding-s);
    padding: var(--ph-padding-s) 0;
  }

  .piano-key-note {
    height: 30px;
    align-content: center;
  }

  &.is-disabled {
    .piano-key-bar {
      background: var(--ph-key-disabled);
      opacity: 0.65;
    }
  }
}

</style>
