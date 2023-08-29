import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/ISmCreatePayment.vue'
import { defaultIconArgs, defaultIconArgTypes } from '@/shared/common.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Navbar/CreatePayment',
  component: Icon,
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

type Story = StoryObj<typeof Icon>;

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: defaultIconArgs
}
