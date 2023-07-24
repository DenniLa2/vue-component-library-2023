<template>
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      class="bg-fill"
      width="96"
      height="96"
      rx="20"
    />
    <circle
      cx="48"
      cy="48"
      r="18"
      class="icon-stroke"
      stroke-width="4"
    />
    <path
      d="M48 38V50"
      class="icon-stroke"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 56V58"
      class="icon-stroke"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 23.05.2023
 */

</script>


<style scoped lang="scss">

.bg-fill {
  fill: var(--ui-selected)
}

.icon-stroke {
  stroke: var(--ui-warning)
}

</style>
