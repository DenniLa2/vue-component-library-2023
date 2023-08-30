import { StoryObj } from '@storybook/vue3'
import Calendar from '@/components/icon/24/ISmCalendar.vue'
import { defaultIconArgs, defaultIconArgTypes } from '@/components/icon/shared/common.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Linear/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

type Story = StoryObj<typeof Calendar>;

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: defaultIconArgs
}
