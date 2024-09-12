import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/ISmSortArrow.vue'
import { EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'
import { ESortDirection } from '@/components/table/types'
import { booleans, colors, sizes, sortDirections } from '@/components/icon/shared/constants.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Extra/SortArrow',
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
      options: sortDirections,
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
export const Default: Story = {
  args: {
    color: EIconColor.primary,
    size: EIconSize.sm,
    disabled: false,
    direction: ESortDirection.ASC,
  },
}
