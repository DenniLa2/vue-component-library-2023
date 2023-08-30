<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="23"
      height="23"
      rx="11.5"
      stroke="#071832"
      stroke-opacity="0.1"
    />
  </svg>
</template>


<script setup lang="ts">

import { EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'

withDefaults(defineProps<IDefaultIconProps>(), {
  size: EIconSize.sm,
})

</script>


<style scoped lang="scss">

</style>
