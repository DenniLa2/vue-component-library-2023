<template>
  <div
    class="sort-icon__wrapper"
    :class="`arrow-direction--${direction}`"
    :style="{width: width ?? size + 'px', height: height ?? size + 'px'}"
  >
    <svg
      :width="width ?? size"
      :height="height ?? size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7L12 17"
        :class="`stroke--${computedColor}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 14L12 17L9 14"
        :class="`stroke--${computedColor}`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

  </div>
</template>


<script setup lang="ts">
import { ESortDirection } from '@/components/table/types/table.types.ts'

/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 05.06.2023
 */
import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types/icon.types.ts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<IDefaultIconProps>(), {
    color: EIconColor.primary,
    size: EIconSize.sm,
    direction: ESortDirection.ASC,
  }
)

const computedColor = computed(() => props.disabled ? EIconColor.disabled : props.color)

</script>


<style scoped lang="scss">

.arrow-direction--ASC {
  transform: rotate(0);
}

.arrow-direction--DESC {
  transform: rotate(180deg);
}

</style>
