import CircleEmpty from "../ISmCircleEmpty.vue";
import CircleSuccess from "../ISmCircleSuccess.vue";
import CircleError from "../ISmCircleError.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: "Icons/24x24/Circle",
  tags: "autodocs",
  argTypes: {},
};

// type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Circles = () => ({
  components: { CircleEmpty, CircleSuccess, CircleError },
  template: `
    <div class="icon-list">
      <div>
        <CircleEmpty/>
        <span>CircleEmpty</span>
      </div>
      <div>
        <CircleSuccess/>
        <span>CircleSuccess</span>
      </div>
      <div>
        <CircleError/>
        <span>CircleError</span>
      </div>
    </div>
  `,
});
