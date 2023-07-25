<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7H18"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 17H14"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 06.06.2023
 */
import { EIconColor } from '../types.ts'

interface Props {
  color: EIconColor
}

defineProps<Props>()
</script>


<style scoped lang="scss">

</style>
