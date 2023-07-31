<template>
  <div class="flx flx-align-center">
    <span
      v-if="label"
      class="label__text"
      v-text="label"
    />

    <el-tooltip
      v-if="tooltip"
      popper-class="tooltip"
      effect="light"
      placement="top"
      show-arrow
      :content="tooltip"
      :raw-content="props.asHtml"
    >
      <ISmInfo class="ml-10"/>
    </el-tooltip>
  </div>
</template>


<script setup lang="ts">
import { ElTooltip } from 'element-plus'
/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 23.05.2023
 */
import ISmInfo from '@/components/icon/24/ISmInfo.vue'

interface Props {
  label?: string
  tooltip?: string
  asHtml?: boolean
}

const props = withDefaults(defineProps<Props>(), { asHtml: false })

</script>


<style scoped lang="scss">
.label__text {
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--icon-hint)
}

</style>
