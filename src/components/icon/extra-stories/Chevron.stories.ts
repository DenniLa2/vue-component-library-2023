import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/ISmChevron.vue'
import { EDirection_x4, EIconColor } from '@/components/icon/types.ts'
import { colors } from '@/components/icon/constants.storybook'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Extra/Chevron',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
      },
      options: [EDirection_x4.left, EDirection_x4.right, EDirection_x4.up, EDirection_x4.down],
    },
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
  },
}

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Chevron: Story = {
  args: {
    direction: EDirection_x4.up,
    color: EIconColor.primary,
  },
}
