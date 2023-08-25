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
      d="M9.33337 7.99998H22.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${color}`"
      d="M9.33337 13.3334H18.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${color}`"
      d="M9.33337 18.6667H22.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${color}`"
      d="M9.33337 24H22.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
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
