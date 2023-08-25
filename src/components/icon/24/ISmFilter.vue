<template>
  <svg
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="`stroke--${color}`"
      d="M6 7H18"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      :class="`stroke--${color}`"
      d="M8 12H16"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      :class="`stroke--${color}`"
      d="M10 17H14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts" setup>
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 06.06.2023
 */
import { EIconColor } from "../types.ts";

interface Props {
  color: EIconColor;
}

withDefaults(defineProps<Props>(), { color: EIconColor.primary });
</script>

<style lang="scss" scoped></style>
