<template>
 <span
   class="base-tag"
   :class="`base-tag${color}`"
   v-text="label"
 />
</template>

<script setup lang="ts">
import { ETagColor } from '@/components/ui/types'

interface Props {
  color: ETagColor
  label: string
}

defineProps<Props>()
</script>

<style lang="scss">
.base-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 28px;
  text-transform: capitalize;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-primary);
  border: none;

  &--ui-active {
    background: var(--bg-active);
  }

  &--ui-attention {
    background: var(--bg-attention);
  }

  &--ui-warning {
    background: var(--bg-ui-warning);
  }

  &--ui-success {
    background: var(--bg-ui-success);
  }

  &--ui-tretiary {
    background: var(--bg-tretiary);
  }
}
</style>
