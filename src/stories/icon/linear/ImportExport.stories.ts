import Import from '@/components/icon/24/ISmImport.vue'
import Export from '@/components/icon/24/ISmExport.vue'
import { EIconColor, EIconSize } from '@/types/icon.types.ts'
import { defaultIconArgs, defaultIconArgTypes } from '@/shared/common.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Icons/Linear/Import & Export',
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
      Import,
      Export
    },
    template: `
      <div class="icon-list">
        <div>
          <Import
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Import</span>
        </div>
        <div>
          <Export
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Export</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
