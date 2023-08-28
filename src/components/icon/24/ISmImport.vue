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
      d="M6 14V16C6 17.6569 7.34315 19 9 19H15C16.6569 19 18 17.6569 18 16V14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      :class="`stroke--${color}`"
      d="M12 3.99994V12.9999"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      :class="`stroke--${color}`"
      d="M9.17139 11.5857L11.9998 14.4141L14.8282 11.5856"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts" setup>
import { EIconColor } from "../types.ts";

interface Props {
  color?: EIconColor;
}

withDefaults(defineProps<Props>(), { color: EIconColor.primary });
</script>
