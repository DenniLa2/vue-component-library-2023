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
      d="M6.66671 17.3334L17.3334 6.66669"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M12 6.66663L17.3333 6.66667L17.3333 12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M25.3333 14.6666L14.6666 25.3333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.66667"
    />
    <path
      :class="`stroke--${computedColor}`"
      d="M20 25.3334L14.6667 25.3333L14.6667 20"
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
