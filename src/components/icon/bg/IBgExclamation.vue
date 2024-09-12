<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :class="`fill--${bgColor}`"
      width="96"
      height="96"
      rx="20"
    />
    <circle
      cx="48"
      cy="48"
      r="18"
      :class="`stroke--${computedColor}`"
      stroke-width="4"
    />
    <path
      d="M48 38V50"
      :class="`stroke--${computedColor}`"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 56V58"
      :class="`stroke--${computedColor}`"
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
import { EIconColor, EIconSize, IDefaultBgIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<IDefaultBgIconProps>(), {
  color: EIconColor.warning,
  bgColor: EIconColor.selected,
  badgeColor: EIconColor.success,
  size: EIconSize.mega,
})

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>


<style scoped lang="scss">

</style>
