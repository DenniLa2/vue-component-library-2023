<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.99997 13L13 4.99997"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 5L13 5.00003L13 9.00003"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 11L11 19"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 19L11 19L11 15"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>


<script setup lang="ts">

/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 22.05.2023
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
