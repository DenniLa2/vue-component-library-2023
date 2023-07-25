import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/ISmDrafts.vue'
import { EIconColor } from '@/components/icon/types.ts'
import { colors } from '@/components/icon/constants.storybook.ts'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Navbar/Drafts',
  component: Icon,
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

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: {
    color: EIconColor.secondary,
  },
}
