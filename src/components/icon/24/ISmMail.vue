<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="3"
      class="stroke"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 9L12 11L17 9"
      class="stroke"
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
 * on 01.06.2023
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
