<template>
  <div class="piano-key-mark">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.piano-key-mark {
  display: inline-block;
  width: var(--ph-key-mark-size);
  height: var(--ph-key-mark-size);
  border-radius: 50%;
  border: 1px solid var(--ph-active-secondary);
  background: var(--ph-active-primary);
  font-size: var(--ph-font-m);
  color: var(--ph-text-on-color);
}
</style>
