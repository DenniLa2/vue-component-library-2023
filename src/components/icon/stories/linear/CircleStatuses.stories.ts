import CircleEmpty from '@/components/icon/24/ISmCircleEmpty.vue'
import CircleSuccess from '@/components/icon/24/ISmCircleSuccess.vue'
import CircleError from '@/components/icon/24/ISmCircleError.vue'
import { defaultIconArgs, defaultIconArgTypes } from '@/components/icon/shared/common.storybook.ts'
import { EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/Linear/Circle Statuses',
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

// type Story = StoryObj<typeof Icon>

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  render: (
    args: {
      color: EIconColor,
      size: EIconSize,
      disabled: boolean,
    }
  ) => ({
    setup() {
      return args
    },
    components: {
      CircleEmpty,
      CircleSuccess,
      CircleError
    },
    template: `
      <div class="icon-list">
        <div>
          <CircleEmpty
            :size="size"
          />
          <span>CircleEmpty</span>
        </div>
        <div>
          <CircleSuccess
            :size="size"
          />
          <span>CircleSuccess</span>
        </div>
        <div>
          <CircleError
            :size="size"
          />
          <span>CircleError</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
