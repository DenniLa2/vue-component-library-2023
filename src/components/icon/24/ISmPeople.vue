<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="`stroke--${color}`"
      d="M9.84209 14.3243C7.51809 15.0423 5.69009 16.8903 5.00009 19.2273"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      :class="`stroke--${color}`"
      d="M18.9998 19.2306C18.3378 16.9856 16.6258 15.1906 14.4328 14.4156"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      :class="`stroke--${color}`"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2142 15.0001C14.6992 15.0001 16.7142 12.9851 16.7142 10.5001C16.7142 8.01512 14.6992 6.00012 12.2142 6.00012C9.7292 6.00012 7.7142 8.01512 7.7142 10.5001C7.7142 12.9851 9.7292 15.0001 12.2142 15.0001Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>


<script setup lang="ts">
/**
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
