<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 12H20.5M20.5 12L19 10M20.5 12L19 14M15 16V17C15 18.6569 13.6569 20 12 20H8C6.34315 20 5 18.6569 5 17V7C5 5.34315 6.34315 4 8 4H12C13.6569 4 15 5.34315 15 7V8"
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
// @ts-ignore
withDefaults(defineProps<Props>(), { color: EIconColor.secondary })
</script>

<style scoped>

</style>