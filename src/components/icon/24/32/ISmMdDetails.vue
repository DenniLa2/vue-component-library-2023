<template>

  <svg
    fill="none"
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="`stroke--${computedColor}`"
      d="M9.33337 7.99998H22.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M9.33337 13.3334H18.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M9.33337 18.6667H22.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M9.33337 24H22.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
  </svg>

</template>


<script lang="ts" setup>

import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.primary,
    size: EIconSize.md,
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>
