import { StoryObj } from '@storybook/vue3'
import UButton from './../UButton.vue'
import { EButtonDesign, EButtonSize, EIconLocation } from './../types.ts'
// import '../../../assets/style/base/baseButton.scss'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Base/Button',
  component: UButton,
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'select',
      options: [EButtonDesign.RoundedMain, EButtonDesign.RoundedSecondary, EButtonDesign.RoundedWarning, EButtonDesign.TextDefault],
      defaultValue: EButtonDesign.RoundedMain,
    },

    iconLocation: {
      control: 'select',
      options: [undefined, EIconLocation.leftAround, EIconLocation.leftBetween, EIconLocation.rightAround, EIconLocation.rightBetween],
    },

    size: {
      control: 'select',
      options: [undefined, EButtonSize.large, EButtonSize.medium, EButtonSize.mini],
    },
    fullWidth: {
      control: 'select',
      options: [true, false],
      defaultValue: false,
    },
  },
}

type Story = StoryObj<typeof UButton>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const DefaultButton: Story = {
  args: {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Default',
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(icon)/g,
    },
  },
}

export const DefaultButton_FullWidth: Story = {
  args: {
    design: EButtonDesign.RoundedMain,
    size: EButtonSize.large,
    label: 'Default',
    fullWidth: true,
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(icon)/g,
    },
  },
}
