import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/SortArrow.vue'
import { EIconColor } from '@/components/icon'
import { ESortDirection } from '@/components/table'
import { colors } from '@/components/icon/constants.storybook'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

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
    direction: {
      control: {
        type: 'select',
      },
      options: [ESortDirection.ASC, ESortDirection.DESC],
    },
  },
}

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: {
    color: EIconColor.secondary,
    direction: ESortDirection.ASC,
  },
}