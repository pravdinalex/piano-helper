<template>
  <div class="piano-key-tone-mark">
    <div class="text-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.piano-key-tone-mark {
  display: inline-flex;
  align-items: end;
  justify-content: center;

  width: var(--ph-key-mark-size);
  height: var(--ph-key-mark-size);
  overflow: visible;
  font-size: var(--ph-font-s);
  position: relative;
  color: var(--ph-text-on-color);
  text-align: center;

  &::before {
    content: '';
    border-radius: 12px 0 12px 16px;
    position: absolute;
    top: 0;
    left: 0;
    width: var(--ph-key-mark-size);
    height: var(--ph-key-mark-size);
    transform: rotate(-45deg);
    background: var(--ph-info-secondary);
  }

  .text-container {
    position: relative;
    padding-bottom: var(--ph-padding-xxs);
  }
}
</style>
