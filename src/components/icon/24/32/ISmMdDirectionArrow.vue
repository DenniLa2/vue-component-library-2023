<template>

  <div
    class="direction-arrow__wrapper"
    :class="[
      (direction ?? '').toLowerCase(),
      `direction-arrow__wrapper_size-${size}`
    ]"
    :style="{width: width ?? size + 'px', height: height ?? size + 'px'}"
  >
    <svg
      v-if="Number(size) <= Number(EIconSize.sm)"
      :width="width ?? size"
      :height="height ?? size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12L5 12"
        :class="`stroke--${computedColor}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 15L5 12L8 9"
        :class="`stroke--${computedColor}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else-if="Number(size) >= Number(EIconSize.md)"
      :width="width ?? size"
      :height="height ?? size"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1668 16.0002L9.8335 16.0002"
        :class="`stroke--${computedColor}`"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.8335 12L9.8335 16L13.8335 20"
        :class="`stroke--${computedColor}`"
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
import { EDirectionArrow, EIconColor, EIconSize, IDefaultIconProps } from '@/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<IDefaultIconProps>(), {
  direction: EDirectionArrow.forward,
  color: EIconColor.secondary,
  size: EIconSize.sm,
})

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

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
