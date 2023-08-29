import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/32/ISmMdDirectionArrow.vue'
import { EDirectionArrow, EIconColor, EIconSize } from '@/types/icon.types.ts'
import { arrowDirections, booleans, colors, sizes } from '@/shared/constants.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Extra/DirectionArrow',
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
      options: arrowDirections,
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
export const DirectionArrow_24: Story = {
  args: {
    color: EIconColor.primary,
    size: EIconSize.sm,
    disabled: false,
    direction: EDirectionArrow.back,
  },
}
// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const DirectionArrow_32: Story = {
  args: {
    color: EIconColor.primary,
    size: EIconSize.md,
    disabled: false,
    direction: EDirectionArrow.back,
  },
}
