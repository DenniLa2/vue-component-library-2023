<template>
  <MoneyDirection
    :size="size"
    :disabled="disabled"
    :direction="EMoneyDirection.send"
  />
</template>


<script setup lang="ts">

/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 07.06.2023
 */
import MoneyDirection from './ISmMdMoneyDirection.vue'
import { EMoneyDirection } from '@/components/icon/types'
import { EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'

withDefaults(defineProps<IDefaultIconProps>(), {
  size: EIconSize.md,
})

</script>


<style scoped lang="scss">

</style>
