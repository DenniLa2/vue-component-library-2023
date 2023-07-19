<template>
  <span class="u-tag">{{ text }}</span>
</template>

<script setup lang="ts">
import 'element-plus/dist/index.css'


defineProps<{ text: string }>()

</script>

<style scoped>
.u-tag {
  border: 1px dotted red;
  padding: 2px 8px;
  border-radius: 12px;
  color: red;
}

</style>
