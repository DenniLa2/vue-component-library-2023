/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import IBgAccountReady from '@/components/icon/bg/IBgAccountReady.vue'
import IBgClock from '@/components/icon/bg/IBgClock.vue'
import IBgExclamation from '@/components/icon/bg/IBgExclamation.vue'
import IBgPaymentReady from '@/components/icon/bg/IBgPaymentReady.vue'

import { EMoneyDirection } from '@/components/icon/types/events.types.ts'
import { EIconColor, EIconSize } from '@/components/icon/types/icon.types.ts'
import { defaultBgIconArgs, defaultBgIconArgTypes } from '@/components/icon/shared/common.storybook.ts'

export default {
  title: 'Icons/Bg/[All]',
  tags: ['autodocs'],
  argTypes: defaultBgIconArgTypes
}

export const Collection = {
  render: (
    args: {
      color: EIconColor,
      bgColor: EIconColor,
      badgeColor: EIconColor,
      size: EIconSize,
      disabled: boolean,
    }
  ) => ({
    components: {
      IBgAccountReady,
      IBgClock,
      IBgExclamation,
      IBgPaymentReady
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
          <IBgAccountReady
            :color="color" 
            :bg-color="bgColor" 
            :badge-color="badgeColor" 
            :size="size"
            :disabled="disabled"
          />
          <span>Details</span>
        </div>
        <div>
          <IBgClock
            :color="color"
            :bg-color="bgColor"
            :badge-color="badgeColor"
            :size="size"
            :disabled="disabled"
          />
          <span>Payments</span>
        </div>
        <div>
          <IBgExclamation
            :color="color"
            :bg-color="bgColor"
            :badge-color="badgeColor"
            :size="size"
            :disabled="disabled"
          />
          <span>DirectionArrow | send</span>
        </div>
        <div>
          <IBgPaymentReady
            :color="color"
            :bg-color="bgColor"
            :badge-color="badgeColor"
            :size="size"
            :disabled="disabled"
          />
          <span>DirectionArrow | receive</span>
        </div>
      </div>
    `,
  }),
  args: defaultBgIconArgs
}