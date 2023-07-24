import CircleEmpty from '../CircleEmpty.vue'
import CircleSuccess from '../CircleSuccess.vue'
import CircleError from '../CircleError.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Icons/24x24/Circle',
  tags: ['autodocs'],
  argTypes: {},
}

// type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Circles = () => ({
  components: { CircleEmpty, CircleSuccess, CircleError },
  template: `
    <div>
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <circle-empty/>
      <span style="margin-left: 8px;"> - CircleEmpty</span>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <circle-success/>
      <span style="margin-left: 8px;"> - CircleSuccess</span>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <circle-error/>
      <span style="margin-left: 8px;"> - CircleError</span>
    </div>
    </div>
  `,
})
