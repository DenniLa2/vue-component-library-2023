import { StoryObj } from '@storybook/vue3'
import BaseTag from '@/components/ui/UTag.vue'
import { ETagColor } from '@/types/ui.types.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'UI/Tag',
  component: BaseTag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [
        ETagColor.active,
        ETagColor.attention,
        ETagColor.warning
      ],
    },
  },
}

type Story = StoryObj<typeof BaseTag>;

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Attention: Story = {
  args: {
    color: ETagColor.attention,
    label: 'Attention',
  },
}

export const Warning: Story = {
  args: {
    color: ETagColor.warning,
    label: 'Warning',
  },
}
