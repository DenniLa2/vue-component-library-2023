import { EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'
import Filter from '@/components/icon/24/ISmFilter.vue'
import FilterActive from '@/components/icon/24/ISmFilterActive.vue'
import FilterClear from '@/components/icon/24/ISmFilterClear.vue'
import { defaultIconArgs, defaultIconArgTypes } from '@/components/icon/shared/common.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Icons/Linear/Filter',
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

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
      Filter,
      FilterActive,
      FilterClear
    },
    template: `
      <div class="icon-list">
        <div>
          <Filter
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Filter</span>
        </div>
        <div>
          <FilterActive
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Filter Active</span>
        </div>
        <div>
          <FilterClear
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Filter Clear</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
