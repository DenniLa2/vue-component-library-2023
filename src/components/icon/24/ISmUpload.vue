<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="`stroke--${computedColor}`"
      d="M6 14V16C6 17.6569 7.34315 19 9 19H15C16.6569 19 18 17.6569 18 16V14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M12 14V4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M9.17151 6.41408L11.9999 3.58569L14.8284 6.41412"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts" setup>

import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.primary,
    size: EIconSize.sm,
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>
