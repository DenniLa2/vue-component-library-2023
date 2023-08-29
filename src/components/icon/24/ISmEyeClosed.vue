<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 1C19 1 15.1429 5.5 10 5.5C4.85714 5.5 1 1 1 1"
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


<style scoped lang="scss">
</style>
