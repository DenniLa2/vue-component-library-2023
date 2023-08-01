<template>
  <ElButton
    class="btn"
    :class="classes"
    :disabled="!!disabled"
    v-bind="$attrs"
  >
    <template
      v-if="label"
      #default
    >
      {{ label }}
    </template>

    <template
      v-if="slots['icon']"
      #icon
    >
      <slot
        name="icon"
        v-if="slots['icon']"
      />
    </template>
  </ElButton>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/dist/index.css'
import { EButtonDesign, EButtonSize, EIconLocation } from './types.ts'

const slots = useSlots()

interface Props {
  design?: EButtonDesign
  label?: string
  disabled?: boolean
  iconLocation?: EIconLocation
  // NB! only for EButtonDesign.Rounded{*}
  size?: undefined | EButtonSize
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  design: EButtonDesign.RoundedMain,
  // @ts-ignore
  size: (rawProps): undefined | EButtonSize => {
    if (rawProps.design === EButtonDesign.TextDefault) return undefined

    return rawProps.size ?? EButtonSize.large
  },
})

const classes = computed<string[]>(() => [
  props.design ?? '',
  props.iconLocation ?? '',
  props.size ?? '',
  props.fullWidth ? 'btn-full-width' : '',
])
</script>

<style scoped>
</style>
