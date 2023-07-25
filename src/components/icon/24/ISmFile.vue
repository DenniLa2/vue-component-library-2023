<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V9C12 10.6569 13.3431 12 15 12H19"
      :class="`stroke--${color}`"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V12L12 5H8Z"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 1.07.2023
 */
import { EIconColor } from '../types.ts'

interface Props {
  color?: EIconColor
}

withDefaults(defineProps<Props>(), { color: EIconColor.primary })


</script>


<style scoped lang="scss">

.stroke--circle {
  stroke: var(--icon-info);
}

</style>
