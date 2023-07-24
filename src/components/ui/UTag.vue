<template>
  <component
    :is="clickable ? 'button' : 'span'"
    class="base-tag"
    :class="classes"
    @click="onClick"
  >{{ label }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ETagColor } from '@/components/ui/types'

interface Props {
  color: ETagColor
  label: string
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), { clickable: false })
const classes = computed(() => {
  return [
    props.clickable ? 'base-tag-button' : 'base-tag-span',
    `base-tag${props.color}`,
  ]
})

const emit = defineEmits<{
  tag: []
}>()

const onClick = () => {
  if (props.clickable) emit('tag')
}

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

  &-button {
    border: none;
    cursor: pointer;

    &:hover {
      box-shadow: var(--shadows-border-hover);
    }

    &:active {
      box-shadow: var(--shadows-border-hover);
      background: linear-gradient(0deg, rgb(0 0 0 / 10%), rgb(0 0 0 / 10%)), rgb(216 100 98 / 30%);;
    }
  }

  &-span {
    border: none;
  }
}
</style>
