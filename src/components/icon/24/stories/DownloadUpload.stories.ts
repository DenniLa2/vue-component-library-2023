import Download from "@/components/icon/24/ISmDownload.vue";
import Upload from "@/components/icon/24/ISmUpload.vue";
import { colors } from "@/components/icon/constants.storybook";
import { EIconColor } from "@/components/icon/types.ts";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Icons/24x24/Download_Upload",
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
      },
      options: colors,
    },
  },
  computed: {
    EIconColor() {
      return EIconColor;
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  render: (args: { color: EIconColor }) => ({
    setup() {
      return arg;
    },
    components: { Download, Upload },
    template: `
      <div class="icon-list">
        <div>
          <Download :color="color"/>
          <span>Download</span>
        </div>
        <div>
          <Upload :color="color"/>
          <span>Upload</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: "primary",
  },
};
