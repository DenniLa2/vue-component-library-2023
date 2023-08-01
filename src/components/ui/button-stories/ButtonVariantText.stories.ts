import UButton from './../UButton.vue'
import ISmX from './../../icon/24/ISmX.vue'
import ISmMdDirectionArrow from './../../icon/24/32/ISmMdDirectionArrow.vue'
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
    title: 'Text Default',
    design: EButtonDesign.TextDefault,
    label: 'Label',
  },
  {
    design: EButtonDesign.TextDefault,
    label: 'Label',
    disabled: true,
  },
  {
    title: 'Text + Icon',
    design: EButtonDesign.TextDefault,
    label: 'Label',
    iconLocation: EIconLocation.leftBetween,
  },
  {
    design: EButtonDesign.TextDefault,
    label: 'Label',
    iconLocation: EIconLocation.leftBetween,
    disabled: true,
  },
  {
    design: EButtonDesign.TextDefault,
    label: 'Skip',
    iconLocation: EIconLocation.rightBetween,
  },
  {
    title: 'IconOnly',
    design: EButtonDesign.RoundedIconOnly,
  },
  {
    design: EButtonDesign.RoundedIconOnly,
    disabled: true,
  },
]
  .map(({ title, label, design, disabled, iconLocation }) => ({
    name: `${label}`,
    title,
    label,
    design,
    // size,
    disabled,
    iconLocation,
  }))


export default {
  title: 'Base/Button',
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const Text = {
  render: (args: { sets: Props[] }) => ({
    components: {
      UButton,
      ISmMdDirectionArrow,
      ISmX,
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
          :disabled="d.disabled"
          :icon-location="d.iconLocation"
        >
          <template v-if="d.iconLocation" #icon>
            <ISmX v-if="d.label === 'Skip'" :color="'primary'"/>
            <ISmMdDirectionArrow v-else :color="'primary'"/>
          </template>

          <template v-if="!d.label" #icon>
            <ISmMdDirectionArrow :color="'primary'"/>
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

