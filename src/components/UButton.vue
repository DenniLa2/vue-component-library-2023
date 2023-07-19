<template>
  <ElButton :type="'success'">{{ text }}</ElButton>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import 'element-plus/dist/index.css'

defineProps<{ text: string }>()

</script>

<style scoped>
</style>
