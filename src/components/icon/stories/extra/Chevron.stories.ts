import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/ISmChevron.vue'
import { EDirection_x4, EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'
import { booleans, colors, sizes, x4Directions } from '@/components/icon/shared/constants.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Extra/Chevron',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: sizes,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      options: booleans,
    },
    direction: {
      control: {
        type: 'select',
      },
      options: x4Directions,
    },
    height: {
      table: {
        disable: true,
      }
    },
    width: {
      table: {
        disable: true,
      }
    },
    type: {
      table: {
        disable: true,
      }
    },
  }
}

type Story = StoryObj<typeof Icon>;

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Chevron: Story = {
  args: {
    color: EIconColor.primary,
    size: EIconSize.sm,
    disabled: false,
    direction: EDirection_x4.up,
  },
}
