<template>
  <svg
    v-if="size === EXSize.s6"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 15L15 9"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 15L9 9"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="size === EXSize.s10"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 17L7 7"
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
 * on 21.05.2023
 */
import { EIconColor, EXSize } from '../types.ts'

interface Props {
  color: EIconColor
  size: EXSize
}

withDefaults(defineProps<Props>(), { size: EXSize.s6 })

</script>


<style scoped lang="scss">

</style>
