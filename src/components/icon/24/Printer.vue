<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18H4C3.44772 18 3 17.5523 3 17V12C3 10.8954 3.89543 10 5 10H19C20.1046 10 21 10.8954 21 12V17C21 17.5523 20.5523 18 20 18H17"
      class="stroke"
      :class="`stroke--${color}`"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 14C7.44772 14 7 14.4477 7 15V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V15C17 14.4477 16.5523 14 16 14H8Z"
      class="stroke"
      :class="`stroke--${color}`"
      stroke-width="2"
    />
    <path
      d="M7 10V5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V10"
      class="stroke"
      :class="`stroke--${color}`"
      stroke-width="2"
    />
  </svg>

</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.06.2023
 */
import { EIconColor } from '../types.ts'

interface Props {
  color?: EIconColor
}

withDefaults(defineProps<Props>(), { color: EIconColor.primary })

</script>


<style scoped lang="scss">

</style>
