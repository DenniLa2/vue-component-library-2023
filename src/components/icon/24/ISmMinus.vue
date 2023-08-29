<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 12H16H8Z"
      :class="`fill--${computedColor}`"
    />

    <path
      d="M8 12H16"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">

import { EIconColor, EIconSize, IDefaultIconProps } from '@/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.primary,
    size: EIconSize.xxs,
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>

<style scoped lang="scss">

</style>
