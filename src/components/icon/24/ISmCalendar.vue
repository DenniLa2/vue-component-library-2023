<template>
  <svg
    width="24"
    height="24"
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
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M9.5 4V8"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M14.5 4V8"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M5 11.5H19"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { EIconColor } from '../types.ts'
import '@/assets/style/color.scss'
import '@/assets/style/color-classes.scss'

interface Props {
  color?: EIconColor
}

withDefaults(defineProps<Props>(), { color: EIconColor.secondary })
</script>

<style scoped>

</style>
