import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/navbar/CreatePayment.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Navbar/CreatePayment',
  component: Icon,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {}
