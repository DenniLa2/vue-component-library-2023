<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="6"
      width="14"
      height="13"
      rx="2"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M9.5 4V8"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M14.5 4V8"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M5 11.5H19"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">

import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<IDefaultIconProps>(), {
  color: EIconColor.primary,
  size: EIconSize.sm,
})

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>

<style scoped>

</style>
