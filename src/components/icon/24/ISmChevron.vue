<template>
  <svg
    :class="`chevron-direction--${direction}`"
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 8L10.5 12L14.5 16"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>


<script setup lang="ts">

import { EDirection_x4, EIconColor, EIconSize, IDefaultIconProps } from '@/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<IDefaultIconProps>(), {
  color: EIconColor.primary,
  size: EIconSize.sm,
  direction: EDirection_x4.left,
})

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>


<style scoped lang="scss">

.chevron-direction--up {
  transform: rotate(90deg);
}

.chevron-direction--down {
  transform: rotate(270deg);
}

.chevron-direction--right {
  transform: rotate(180deg);
}

.chevron-direction--left {
  // transform: rotate(0);
}

</style>
