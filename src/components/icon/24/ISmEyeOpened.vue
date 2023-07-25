<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 11.5C21 11.5 17.1429 7 12 7C6.85714 7 3 11.5 3 11.5"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="14"
      r="3"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">

import { EIconColor } from '../types.ts'

interface Props {
  color?: EIconColor
}

withDefaults(defineProps<Props>(), {
  color: EIconColor.primary,
})

</script>

