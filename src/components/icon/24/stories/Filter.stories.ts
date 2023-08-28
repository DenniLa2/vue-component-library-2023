import { colors } from '@/components/icon/constants.storybook'
import { EIconColor } from '@/components/icon/types.ts'
import Filter from '@/components/icon/24/ISmFilter.vue'
import FilterActive from '@/components/icon/24/ISmFilterActive.vue'
import FilterClear from '@/components/icon/24/ISmFilterClear.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Icons/24x24/Filter',
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

export const Default = {
  render: (args: { color: EIconColor }) => ({
    setup() {
      return args
    },
    components: { Filter, FilterActive, FilterClear },
    template: `
      <div class="icon-list">
        <div>
          <Filter :color="color"/>
          <span>Filter</span>
        </div>
        <div>
          <FilterActive :color="color"/>
          <span>Filter Active</span>
        </div>
        <div>
          <FilterClear :color="color"/>
          <span>Filter Clear</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: "primary",
  },
}
