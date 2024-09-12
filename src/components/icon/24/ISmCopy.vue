<template>
  <svg
    :width="width ?? size"
    :height="height ?? size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4.16602"
      y="6.66675"
      width="8.33333"
      height="10"
      rx="1.66667"
      :class="`stroke--${computedColor}`"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M7.5 6.41017V4.99992C7.5 4.07945 8.24619 3.33325 9.16667 3.33325H14.1667C15.0871 3.33325 15.8333 4.07944 15.8333 4.99992V11.6666C15.8333 12.5871 15.0871 13.3333 14.1667 13.3333H12.5"
      :class="`stroke--${computedColor}`"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

</template>
<script setup lang="ts">

import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<IDefaultIconProps>(), {
  color: EIconColor.primary,
  size: EIconSize.sm,
})

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>

<style scoped lang="scss">
</style>
