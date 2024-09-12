<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7H13"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 17H14"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      :class="disabled ? `fill--${computedColor}` : `fill--${EIconColor.warning}`"
      cx="18.5"
      cy="5.5"
      r="2.5"
    />
  </svg>

</template>


<script setup lang="ts">

/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 08.06.2023
 */
import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.primary,
    size: EIconSize.sm,
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>


<style scoped lang="scss">

</style>
