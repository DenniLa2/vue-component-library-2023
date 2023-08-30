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
    title: 'Rounded Main Large',
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Next',
    disabled: true,
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.leftAround,
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.rightAround,
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.leftBetween,
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Next',
    iconLocation: EIconLocation.rightBetween,
  },
  {
    title: 'Rounded Main Medium',
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.medium,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.medium,
    label: 'Next',
    disabled: true,
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.leftAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.rightAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.leftBetween,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.medium,
    iconLocation: EIconLocation.rightBetween,
    label: 'Next',
  },
  {
    title: 'Rounded Main Mini',
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.mini,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.mini,
    label: 'Next',
    disabled: true,
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.leftAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.rightAround,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.leftBetween,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.mini,
    iconLocation: EIconLocation.rightBetween,
    label: 'Next',
  },
  {
    design: EButtonDesign.RoundedMain,
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


// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args

export const RoundedMain = {
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
            <ISmPrinter :color="'allusion'"/>
          </template>

          <template v-else #icon>
            <ISmPrinter :color="'allusion'"/>
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

