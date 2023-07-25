import { StoryObj } from '@storybook/vue3'
import Calendar from '@/components/icon/24/ISmCalendar.vue'
import { colors } from '@/components/icon/constants.storybook.ts'
import '@/assets/style/color.scss'
import '@/assets/style/color-classes.scss'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/24x24/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
  },
}

type Story = StoryObj<typeof Calendar>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: {},
}
