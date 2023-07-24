<template>
  <svg
    :width="s.width"
    :height="s.height"
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.1436 17.023C16.3059 17.9725 15.08 18.5715 13.7142 18.5715C11.1895 18.5715 9.14282 16.5248 9.14282 14V0.285767L4.5714 4.13539L-3.05176e-05 0.285767V14C-3.05176e-05 21.5742 6.14006 27.7143 13.7142 27.7143C16.7015 27.7143 19.4658 26.7592 21.7182 25.1377C19.4247 23.0194 17.7869 20.2015 17.1436 17.023ZM27.4285 14V4.13539H27.4285V14L27.4285 14.0156L27.4285 14Z"
      fill="url(#paint0_angular_1275_2312)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.2857 14V4.13539L22.8571 0.285767L27.4286 4.13539V14C27.4286 16.5248 29.4753 18.5715 32 18.5715V27.7143C24.4258 27.7143 18.2857 21.5742 18.2857 14Z"
      fill="url(#paint1_linear_1275_2312)"
    />
    <defs>
      <radialGradient
        id="paint0_angular_1275_2312"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(13.7142 14) rotate(-90.2832) scale(18.4699 19.455)"
      >
        <stop stop-color="#6CA2F2"/>
        <stop
          offset="1"
          stop-color="#2CBC9A"
        />
      </radialGradient>
      <linearGradient
        id="paint1_linear_1275_2312"
        x1="25.1428"
        y1="0.285767"
        x2="25.1428"
        y2="27.7143"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3499B9"/>
        <stop
          offset="1"
          stop-color="#3451B9"
        />
      </linearGradient>
    </defs>
  </svg>
</template>


<script setup lang="ts">
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 23.05.2023
 */
import { ComputedRef, computed } from 'vue'
import { ELogoSize } from './types.ts'

interface Props {
  size?: ELogoSize
}

const props = withDefaults(defineProps<Props>(), {
  size: ELogoSize.s_32_27,
})

const s: ComputedRef<{ width: number; height: number }> = computed(() => {
  const p = props.size.split('_')
  return {
    width: parseInt(p[1]),
    height: parseInt(p[2]),
  }
})

// todo remove const size = computed(() => ({ width: s.value.width, height: s.value.height }))

</script>


<style scoped lang="scss">

</style>
