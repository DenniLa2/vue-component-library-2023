<template>
  <div
    class="sort-icon__wrapper"
    :class="`arrow-direction--${direction}`"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7L12 17"
        :class="`stroke--${color}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 14L12 17L9 14"
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
 * on 05.06.2023
 */
import { EIconColor } from '../types.ts'
import { ESortDirection } from '@/components/table'

interface Props {
  direction: ESortDirection
  color: EIconColor
}


defineProps<Props>()

</script>


<style scoped lang="scss">

.sort-icon__wrapper {
  width: 24px;
  height: 24px;
}

.arrow-direction--ASC {
  transform: rotate(0);
}

.arrow-direction--DESC {
  transform: rotate(180deg);
}

</style>
