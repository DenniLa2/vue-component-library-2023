<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 8.66667C9 8 9.875 6 12.5 6C14.6 6 16 7.66667 16 9.33333C16 12.6923 12 12.3333 12 15C12 15.6667 12 16 12 16"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="19"
      r="1"
      :class="`fill--${color}`"
    />
  </svg>
</template>


<script setup lang="ts">/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 22.05.2023
 */
import { EIconColor } from '../types.ts'

interface Props {
  color: EIconColor
}

defineProps<Props>()

</script>


<style scoped lang="scss">

</style>
