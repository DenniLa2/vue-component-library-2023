import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/BrandLogo.vue'
import { ELogoSize } from '@/components/icon/types.ts'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/BrandLogo',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: [ELogoSize.s_32_27, ELogoSize.s_42_36],
    },
  },
}

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const BrandLogo: Story = {
  args: {
    size: ELogoSize.s_32_27,
  },
}
