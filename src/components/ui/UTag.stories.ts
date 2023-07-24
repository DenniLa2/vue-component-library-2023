import { StoryObj } from '@storybook/vue3'
import BaseTag from '@/components/ui/UTag.vue'
import { ETagColor } from '@/components/ui/types.ts'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Base/Tag',
  component: BaseTag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [ETagColor.active, ETagColor.attention, ETagColor.warning],
    },
  },
}

type Story = StoryObj<typeof BaseTag>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Attention_Clickable: Story = {
  args: {
    color: ETagColor.attention,
    clickable: true,
    label: 'Attention',
  },
}

export const Warning_NotClickable: Story = {
  args: {
    color: ETagColor.warning,
    clickable: false,
    label: 'Warning',
  },
}
