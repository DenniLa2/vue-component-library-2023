import Download from '@/components/icon/24/ISmDownload.vue'
import Upload from '@/components/icon/24/ISmUpload.vue'
import { EIconColor, EIconSize } from '@/types/icon.types.ts'
import { defaultIconArgs, defaultIconArgTypes } from '@/shared/common.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Icons/Linear/Download & Upload',
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

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
      Download,
      Upload
    },
    template: `
      <div class="icon-list">
        <div>
          <Download
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Download</span>
        </div>
        <div>
          <Upload
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Upload</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
