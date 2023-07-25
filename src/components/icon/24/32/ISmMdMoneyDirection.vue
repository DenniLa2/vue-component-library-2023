<template>
  <svg
    :width="s"
    :height="s"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 18.6667V21.3333C8 23.5425 9.79086 25.3333 12 25.3333H20C22.2091 25.3333 24 23.5425 24 21.3333V18.6667"
      class="stroke--primary"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g
      :class="[
        direction === EMoneyDirection.receive ? 'stroke--success' : 'stroke--warning',
        { 'group-send': direction === EMoneyDirection.send }
      ]"
    >
      <path
        d="M16 5.33334V17.3333"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2287 15.4476L15.9999 19.2188L19.7712 15.4475"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 23.05.2023
 */
import { computed } from 'vue'
import { EMoneyDirection } from '@/types'
import { EIconSize } from '../../types.ts'

interface Props {
  direction: EMoneyDirection
  size?: EIconSize
}

const props = withDefaults(defineProps<Props>(), { size: EIconSize.s24 })

const s = computed<number>(() => {
  switch (props.size) {
    case EIconSize.s24:
      return 24

    case EIconSize.s32:
      return 32

    default:
      return 32
  }
})

</script>


<style scoped lang="scss">

.group-send {
  transform: rotate(180deg) translateX(-32px) translateY(-24px);
}

</style>
