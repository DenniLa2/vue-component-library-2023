<template>
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="`fill--${color}`"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 1V9V1Z"
    />

    <path
      d="M5 1V9"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      :class="`fill--${color}`"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 5H9H1Z"
    />

    <path
      d="M1 5H9"
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

withDefaults(defineProps<Props>(), { color: EIconColor.success })
</script>

<style scoped lang="scss">

</style>
