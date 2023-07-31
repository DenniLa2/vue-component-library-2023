<template>
  <div
    class="direction-arrow__wrapper"
    :class="[
      (direction ?? '').toLowerCase(),
      `direction-arrow__wrapper_size-${iconSize}`
    ]"
  >
    <svg
      v-if="size === EIconSize.s24"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12L5 12"
        :class="`stroke--${color}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 15L5 12L8 9"
        :class="`stroke--${color}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else-if="size === EIconSize.s32"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1668 16.0002L9.8335 16.0002"
        :class="`stroke--${color}`"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.8335 12L9.8335 16L13.8335 20"
        :class="`stroke--${color}`"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 26.05.2023
 */
import { EDirectionArrow, EIconColor, EIconSize } from '../../types.ts'
import { computed } from 'vue'

interface Props {
  direction: EDirectionArrow
  color?: EIconColor
  size?: EIconSize
}

const props = withDefaults(
  defineProps<Props>(),
  {
    color: EIconColor.secondary,
    size: EIconSize.s24,
  },
)

const iconSize = computed<string>(() => props.size.split('s')[1])

</script>

<style scoped lang="scss">

.direction-arrow__wrapper {
  &_size-24 {
    width: 24px;
    height: 24px;
  }

  &_size-32 {
    width: 32px;
    height: 32px;
  }

  &.forward {
    transform: rotate(180deg);
  }
}

</style>
