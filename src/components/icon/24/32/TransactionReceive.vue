<template>
  <MoneyDirection :direction="EMoneyDirection.receive"/>
</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 07.06.2023
 */
import MoneyDirection from './MoneyDirection.vue'
import { EMoneyDirection } from '@/types'
</script>


<style scoped lang="scss">

</style>
