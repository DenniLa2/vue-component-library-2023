import UButton from './../UButton.vue'
import ISmPrinter from './../../icon/24/ISmPrinter.vue'
import { EButtonDesign, EButtonSize, EIconLocation } from './../types.ts'
// import './../../assets/style/base/baseButton.scss'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

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
    title: 'Rounded Secondary Large',
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.large,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.large,
    label: 'Next',
    disabled: true,
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.leftAround,
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.rightAround,
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.leftBetween,
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.rightBetween,
  },
  {
    title: 'Rounded Secondary Medium',
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.medium,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.medium,
    label: 'Next',
    disabled: true,
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.leftAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.rightAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.leftBetween,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.rightBetween,
    label: 'Next',
  },
  {
    title: 'Rounded Secondary Mini',
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
    label: 'Next',
    disabled: true,
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.leftAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.rightAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.leftBetween,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.rightBetween,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedSecondary,
    size: EButtonSize.mini,
  },
]
  .map(({
    title,
    label,
    design,
    size,
    disabled,
    iconLocation
  }) => ({
    name: `${label}`,
    title,
    label,
    design,
    size,
    disabled,
    iconLocation,
  }))

export default {
  title: 'Base/Button',
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const RoundedSecondary = {
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
        <h2 v-if="d.title">{{ d.title }}</h2>

        <UButton
          :label="d.label"
          :design="d.design"
          :size="d.size"
          :disabled="d.disabled"
          :icon-location="d.iconLocation"
        >
          <template v-if="d.iconLocation" #icon>
            <ISmPrinter/>
          </template>

          <template v-else #icon>
            <ISmPrinter/>
          </template>
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

