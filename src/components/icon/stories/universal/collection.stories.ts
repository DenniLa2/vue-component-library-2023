/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import Icon from '@/components/icon/Icon.vue'

import { EMoneyDirection } from '@/components/icon/types/events.types.ts'
import { EDirection_x4, EDirectionArrow, EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'
import { booleans, colors, sizes, x4Directions } from '@/components/icon/shared/constants.storybook.ts'
import { ESortDirection } from '@/components/table/types'

export default {
  components: { Icon },
  title: 'Icons/Universal/[All]',
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: sizes,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      options: booleans,
    },
    direction: {
      control: {
        type: 'select',
      },
      options: [
        ...x4Directions,
        ...Object.values(EMoneyDirection),
        ...Object.values(EDirectionArrow),
        ...Object.values(ESortDirection),
      ],
    },
    height: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
}

export const Collection = {
  render: (
    args: {
      size: EIconSize,
      color: EIconColor,
      disabled: boolean,
      // todo need correct type
      direction: string,
    },
  ) => ({
    components: {
      Icon,
    },
    data() {
      return { EMoneyDirection }
    },
    setup() {
      return args
    },
    template: `
      <div class="icon-list">
        <div>
          <Icon
            name="details"
            :color="color" 
            :size="size"
            :disabled="disabled"
            :direction="direction"
          />
          <span>Details</span>
        </div>
        <div>
          <Icon
            name="filter"
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="direction"
          />
          <span>Filter</span>
        </div>
        <div>
          <Icon
            name="payments"
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="direction"
          />
          <span>Paymentss</span>
        </div>
        <div>
          <Icon
            name="search"
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="direction"
          />
          <span>Search</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: EIconColor.primary,
    size: EIconSize.sm,
    disabled: false,
    direction: EDirection_x4.left,
  },
}