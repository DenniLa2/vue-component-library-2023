import UButton from '@/components/ui/UButton.vue'
import ISmPrinter from '@/components/icon/24/ISmPrinter.vue'
import { EButtonDesign, EButtonSize, EIconLocation } from '@/components/ui/types/ui.types.ts'
// import '@/components/assets/style/base/baseButton.scss'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'UI/Button',
}

interface Props {
  design?: EButtonDesign
  label?: string
  disabled?: boolean
  iconLocation?: EIconLocation
  // NB! only for EButtonDesign.Rounded{*}
  size?: undefined | EButtonSize
}

const options: Props[] = [
  {
    title: 'Rounded Tag',
    design: EButtonDesign.TagProblem,
    label: 'Restore to default',
  },
  {
    design: EButtonDesign.TagProcess,
    label: 'Restore to default',
  },
  {
    design: EButtonDesign.TagRequired,
    label: 'Restore to default',
  },
  {
    design: EButtonDesign.TagProcess,
    label: 'Restore to default',
  },
  {
    design: EButtonDesign.TagDefault,
    label: 'Restore to default',
  },
  {
    design: EButtonDesign.TagProcess,
    label: 'Restore to default',
    disabled: true,
  },
]
  .map(({
    title,
    label,
    design,
    disabled
  }) => ({
    name: `${label}`,
    title,
    label,
    design,
    disabled,
  }))

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args

export const Tag = {
  render: (args: { sets: Props[] }) => ({
    components: {
      UButton,
      ISmPrinter,
    },
    setup() {
      return args
    },
    template: `
      <div>
        <div
          v-for="(d, idx) in sets"
          :key="idx + '-' + d.label"
        >
          <h2 v-if="d.title">
            {{ d.title }}
          </h2>

          <UButton
            :label="d.label"
            :design="d.design"
            :size="d.size"
            :disabled="d.disabled"
            :icon-location="d.iconLocation"
          >
          </UButton>

          <div style="padding: 8px;"/>
        </div>
      </div>
    `,
  }),
  args: {
    sets: options,
  },
}

