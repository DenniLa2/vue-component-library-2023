<template>
  <svg
    :class="`chevron-direction--${direction}`"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 8L10.5 12L14.5 16"
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
import { EDirection_x4, EIconColor } from '../types.ts'

interface Props {
  direction?: EDirection_x4
  color: EIconColor
}

withDefaults(defineProps<Props>(), {
  direction: EDirection_x4.left,
})

</script>


<style scoped lang="scss">

.chevron-direction--up {
  transform: rotate(90deg);
}

.chevron-direction--down {
  transform: rotate(270deg);
}

.chevron-direction--right {
  transform: rotate(180deg);
}

.chevron-direction--left {
  // transform: rotate(0);
}

</style>
