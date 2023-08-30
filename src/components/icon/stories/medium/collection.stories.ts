/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import Details from '@/components/icon/24/32/ISmMdDetails.vue'
import DirectionArrow from '@/components/icon/24/32/ISmMdDirectionArrow.vue'
import MoneyDirection from '@/components/icon/24/32/ISmMdMoneyDirection.vue'
import Payments from '@/components/icon/24/32/ISmMdPayments.vue'

import { EMoneyDirection } from '@/components/icon/types/events.types.ts'
import { EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'
import { defaultIconArgs, defaultIconArgTypes } from '@/components/icon/shared/common.storybook.ts'

export default {
  title: 'Icons/Medium [will be deprecated]/[All]',
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

export const Collection = {
  render: (
    args: {
      size: EIconSize,
      color: EIconColor,
      disabled: boolean,
    }
  ) => ({
    components: {
      Details,
      DirectionArrow,
      MoneyDirection,
      Payments,
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
          <Details
            :color="color" 
            :size="size"
            :disabled="disabled"
          />
          <span>Details</span>
        </div>
        <div>
          <Payments
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Payments</span>
        </div>
        <div>
          <DirectionArrow
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="EMoneyDirection.send"
          />
          <span>DirectionArrow | send</span>
        </div>
        <div>
          <DirectionArrow
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="EMoneyDirection.receive"
          />
          <span>DirectionArrow | receive</span>
        </div>
        <div>
          <MoneyDirection
            :size="size"
            :disabled="disabled"
            :direction="EMoneyDirection.send"
          />
          <span>MoneyDirection | send</span>
        </div>
        <div>
          <MoneyDirection
            :size="size"
            :disabled="disabled"
            :direction="EMoneyDirection.receive"
          />
          <span>MoneyDirection | receive</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
