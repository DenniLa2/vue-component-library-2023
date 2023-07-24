<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 16V9.66274C20 8.62837 19.4671 7.66696 18.59 7.11875L13.59 3.99375C12.6172 3.38574 11.3828 3.38574 10.41 3.99375L5.41 7.11875C4.53286 7.66696 4 8.62837 4 9.66274V16C4 17.6569 5.34315 19 7 19H9H12H17C18.6569 19 20 17.6569 20 16Z"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 15V12C9 10.8954 9.89543 10 11 10H13C14.1046 10 15 10.8954 15 12V15"
      :class="`stroke--${color}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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
