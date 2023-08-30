<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="`fill--${computedColor}`"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 1V9V1Z"
    />

    <path
      d="M5 1V9"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      :class="`fill--${computedColor}`"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 5H9H1Z"
    />

    <path
      d="M1 5H9"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>


<script setup lang="ts">

import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.success,
    size: EIconSize.xxxs,
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>


<style scoped lang="scss">

</style>
