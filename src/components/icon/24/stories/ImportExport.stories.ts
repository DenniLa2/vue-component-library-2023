import Import from '@/components/icon/24/ISmImport.vue'
import Export from '@/components/icon/24/ISmExport.vue'
import { colors } from '@/components/icon/constants.storybook'
import { EIconColor } from '@/components/icon/types.ts'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Icons/24x24/Import_Export',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: colors,
    },
  },
  computed: {
    EIconColor() {
      return EIconColor
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  render: (args: { color: EIconColor }) => ({
    setup() {
      return args
    },
    components: { Import, Export },
    template: `
      <div class="icon-list">
        <div>
          <Import :color="color"/>
          <span>Import</span>
        </div>
        <div>
          <Export :color="color"/>
          <span>Export</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: EIconColor.primary,
  },
}
