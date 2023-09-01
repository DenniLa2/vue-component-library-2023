<template>
  <i
    v-html="svg"
    :class="`text--${computedColor} direction--${direction} color-first--${computedColor} color-second--${computedColor}`"
    width="24"
    height="24"
  />

  {{ svg }}
</template>

<script setup lang="ts">
import { computed } from 'vue'

import {
  EIconColor,
  EIconSize,
  IDefaultIconProps,
} from '@/components/icon/types/icon.types.ts'

interface Props extends IDefaultIconProps {
  name: string;
}

// todo add processing type property
const props = withDefaults(defineProps<Props>(), {
  color: EIconColor.warning,
  size: EIconSize.mega,
})

const computedColor = computed(() =>
  props.disabled ? EIconColor.disabled : props.color,
)

const path = props.name ?? ''

const file = `${path}icon-${props.icon}`

const modules = import.meta.glob('../../assets/svg/icons/*.svg', {
  as: 'raw',
  eager: true,
})

const svg = computed(() => {
  return modules['../../assets/svg/icons/' + props.name + '.svg'] ?? modules['../../assets/svg/icons/payments.svg']
})

</script>

<style scoped lang="scss">
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
  transition: fill 0.3s, stroke 0.3s;
}
</style>