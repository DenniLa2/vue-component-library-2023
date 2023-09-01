<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import {
  EIconColor,
  EIconSize,
  IDefaultIconProps,
} from "@/types/icon.types.ts";

interface Props extends IDefaultIconProps {
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: EIconColor.primary,
  size: EIconSize.md,
});

const computedColor = computed(() =>
  props.disabled ? EIconColor.disabled : props.color
);

const dynamicComponent = computed(() =>
  defineAsyncComponent(() => import(`../../assets/svg/${props.name}.svg`))
);
</script>

<template>
  <!-- <Component
    :is="dynamicComponent"
    :width="width ?? size"
    :height="height ?? size"
    :class="`text--${computedColor} second-color--${computedColor}`"
  /> -->

  <svg class="icon icon--color" aria-hidden="true">
    <use href="#icon-coffee" />
  </svg>
  <!--  <object type="image/svg+xml" data="/src/assets/svg/details.svg?color=red"></object>-->

  <!-- <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-coffee" href="#icon-coffee" />
  </svg>

  <svg class="icon icon--fill" aria-hidden="true">
    <use xlink:href="#icon-coffee" href="#icon-coffee" />
  </svg>

  <svg class="icon icon--color" aria-hidden="true">
    <use xlink:href="#icon-coffee" href="#icon-coffee" />
  </svg>

  <svg class="icon icon--color-alt" aria-hidden="true">
    <use xlink:href="#icon-coffee" href="#icon-coffee" />
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
    <symbol id="icon-coffee" viewBox="0 0 20 20">
      <title>icon-coffee</title>
      <path
        fill="var(--handle-color)"
        d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"
      />
      <rect
        fill="var(--cup-color)"
        x="1"
        y="7"
        width="15"
        height="12"
        rx="3"
        ry="3"
      />
      <path
        fill="var(--smoke-color)"
        d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"
      />
      <path
        fill="var(--smoke-color)"
        d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
      />
      <path
        fill="var(--smoke-color)"
        d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
      />
    </symbol>
  </svg> -->
</template>

<style scoped lang="scss">
.text--primary {
  color: green;
}

.second-color--primary #second-color {
  color: red;
  stroke: red;
}

@mixin icon-colors($fallback: black) {
  fill: $fallback;
  @content;
}

.icon {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  &--fill {
    @include icon-colors(grey);
  }
  &--color {
    @include icon-colors(#ef5b49) {
      --handle-color: #c13127;
      --cup-color: #ef5b49;
      --smoke-color: #cacaea;
    }
  }
  &--color-alt {
    @include icon-colors(#2f3fff) {
      --handle-color: #1f2bac;
      --cup-color: #2f3fff;
      --smoke-color: #a5acbd;
    }
  }
}

.hidden {
  display: none;
}
</style>