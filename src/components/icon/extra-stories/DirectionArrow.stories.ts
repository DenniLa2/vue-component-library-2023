import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/32/DirectionArrow.vue'
import { EDirectionArrow, EIconColor } from '@/components/icon/types.ts'
import { colors } from '@/components/icon/constants.storybook'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Extra/DirectionArrow',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
      },
      options: [EDirectionArrow.Forward, EDirectionArrow.Back],
    },
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
    size: {
      control: {
        type: 'select',
      },
      options: [undefined, 24, 32],
      defaultValue: undefined,
    },
  },
}

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const DirectionArrow_24: Story = {
  args: {
    direction: EDirectionArrow.Back,
    color: EIconColor.secondary,
  },
}
// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const DirectionArrow_32: Story = {
  args: {
    direction: EDirectionArrow.Back,
    color: EIconColor.secondary,
    size: 32,
  },
}
