<template>
  <span class="piano-key-mark">

  </span>
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
  // @include light-shadow(var(--ph-active-secondary));
  margin: var(--ph-padding-s) 0;
}
</style>
