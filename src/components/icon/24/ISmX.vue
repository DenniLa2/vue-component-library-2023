<template>
  <svg
    v-if="type === EXSize.s6"
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 15L15 9"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 15L9 9"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="type === EXSize.s10"
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7"
      :class="`stroke--${computedColor}`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 17L7 7"
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
 * on 21.05.2023
 */
import { EIconColor, EIconSize, EXSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.primary,
    size: EIconSize.sm,
    type: EXSize.s6
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>


<style scoped lang="scss">

</style>
