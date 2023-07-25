<template>
  <div class="size-24">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11V16C7 17.1046 7.89543 18 9 18H15C16.1046 18 17 17.1046 17 16V11"
        :class="`stroke--${color}`"
        stroke="#D86462"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 8H7V6H17V8H19"
        :class="`stroke--${color}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 11V14"
        :class="`stroke--${color}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
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

withDefaults(defineProps<Props>(), { color: EIconColor.warning })

</script>


<style scoped lang="scss">

.stroke--circle {
  stroke: var(--icon-info);
}

</style>
