<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
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
});

const computedColor = computed(() =>
  props.disabled ? EIconColor.disabled : props.color
);

const dynamicComponent = computed(() =>
  defineAsyncComponent(async () => await import(`../../assets/svg/icons/${props.name}.svg?raw`))
);

// const dynamicComponent = defineAsyncComponent(async () => await import(`../../assets/svg/icons/${props.name}.svg?raw`));

/*const getSvgIcon = async (name) => {
  const module = await import(`../../assets/svg/icons/${name}.svg?raw`)
  console.log(module)
  return module.default
}*/

// const getSvgIcons = await fetch(`@/assets/svg/icons/${props.name}.svg?raw`)

/*const svgIcon = computed(() => {
  try {
    return getSvgIcons.data.value
  } catch (error: any) {
    throw new Error(error)
  }
})*/

// computed(async () => svg.value = await getSvgIcon(props.name));

// const dynamicComponent = computed(async () => await import(`../../assets/svg/icons/${props.name}.svg?raw`));
</script>

<template>
  <Component
    class="icon"
    :is="dynamicComponent"
    :width="width ?? size"
    :height="height ?? size"
    :class="`text--${computedColor} direction--${direction} color-first--${computedColor} color-second--${computedColor}`"
  />
  {{ dynamicComponent }}
  <i
    v-html="dynamicComponent"
    class="icon"
    :width="width ?? size"
    :height="height ?? size"
    :class="`text--${computedColor} direction--${direction} color-first--${computedColor} color-second--${computedColor}`"
  ></i>
</template>

<style lang="scss">
// todo when confirming, move all styles to assets
.icon {
  display: inline-block;
}

.direction--back {
  // transform: rotate(0);
}

.direction--forward {
  transform: rotate(180deg);
}

// Directions
.direction--up {
  transform: rotate(90deg);
}

.direction--down {
  transform: rotate(270deg);
}

.direction--right {
  transform: rotate(180deg);
}

.direction--left {
  // transform: rotate(0);
}

.direction--ASC {
  // transform: rotate(0);
}

.direction--DESC {
  transform: rotate(180deg);
}
</style>