/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import { EDirectionArrow, EIconColor } from '@/components/icon/types.ts'
import Calendar from '@/components/icon/24/ISmCalendar.vue'
import DirectionArrow from '@/components/icon/24/32/ISmMdDirectionArrow.vue'
import Download from '@/components/icon/24/ISmDownload.vue'
import EyeClosed from '@/components/icon/24/ISmEyeClosed.vue'
import EyeOpened from '@/components/icon/24/ISmEyeOpened.vue'
import Exclamation from '@/components/icon/24/ISmExclamation.vue'
import File from '@/components/icon/24/ISmFile.vue'
import Filter from '@/components/icon/24/ISmFilter.vue'
import FilterActive from '@/components/icon/24/ISmFilterActive.vue'
import HintSuccess from '@/components/icon/24/ISmHintSuccess.vue'
import Info from '@/components/icon/24/ISmInfo.vue'
import List from '@/components/icon/24/ISmList.vue'
import Mail from '@/components/icon/24/ISmList.vue'
import Minus from '@/components/icon/24/ISmMinus.vue'
import MoneyDirection from '@/components/icon/24/32/ISmMdMoneyDirection.vue'
import Plus from '@/components/icon/24/ISmPlus.vue'
import Printer from '@/components/icon/24/ISmPrinter.vue'
import Refresh from '@/components/icon/24/ISmRefresh.vue'
import Search from '@/components/icon/24/ISmSearch.vue'
import SortArrow from '@/components/icon/24/ISmSortArrow.vue'
import TransactionReceive from '@/components/icon/24/32/ISmMdTransactionReceive.vue'
import TransactionSend from '@/components/icon/24/32/ISmMdTransactionSend.vue'
import Trash from '@/components/icon/24/ISmTrash.vue'
import Triplet from '@/components/icon/24/ISmTriplet.vue'
import X from '@/components/icon/24/ISmX.vue'

import { colors } from '@/components/icon/constants.storybook'
import { EMoneyDirection } from '@/types'

export default {
  computed: {
    EMoneyDirection() {
      return EMoneyDirection
    },
    EDirectionArrow() {
      return EDirectionArrow
    },
    EIconColor() {
      return EIconColor
    },
  },
  title: 'Icons/24x24/icons',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
  },
}

export const Collection = {
  render: (args: { color: EIconColor }) => ({
    components: {
      Calendar,
      DirectionArrow,
      Download,
      EyeClosed,
      EyeOpened,
      Exclamation,
      File,
      Filter,
      FilterActive,
      HintSuccess,
      TransactionReceive,
      TransactionSend,
      Info,
      List,
      Mail,
      Minus,
      MoneyDirection,
      Plus,
      Printer,
      Refresh,
      Search,
      SortArrow,
      Trash,
      Triplet,
      X,
    },
    setup() {
      return args
    },
    template: `
      <div>
      <div>
        <div>
          <Calendar :color="color"/>
          - Calendar
        </div>
        <div style="display: flex">
          <DirectionArrow :color="color" direction="Back"/>
          - DirectionArrow | Back | ?24
        </div>

        <div style="display: flex">
          <DirectionArrow :color="color" direction="Back" :size="32"/>
          - DirectionArrow | Back | 32
        </div>
      </div>
      <div>
        <Download :color="color"/>
        - Download
      </div>
      <div>
        <EyeClosed :color="color"/>
        - EyeClosed
      </div>
      <div>
        <EyeOpened :color="color"/>
        - EyeOpened
      </div>
      <div>
        <Exclamation :color="color"/>
        - Exclamation
      </div>
      <div>
        <File :color="color"/>
        - File
      </div>
      <div>
        <Filter :color="color"/>
        - Filter
      </div>
      <div>
        <FilterActive :color="color"/>
        - FilterActive
      </div>
      <div>
        <HintSuccess :color="color"/>
        - HintSuccess
      </div>
      <div>
        <TransactionReceive :color="color"/>
        - TransactionReceive
      </div>
      <div>
        <TransactionSend :color="color"/>
        - TransactionSend
      </div>
      <div>
        <Info :color="color"/>
        - Info
      </div>
      <div>
        <List :color="color"/>
        - List
      </div>
      <div>
        <Mail :color="color"/>
        - Mail
      </div>
      <div>
        <Minus :color="color"/>
        - Minus
      </div>

      <div>
        <div style="display: flex">
          <MoneyDirection :color="color" direction="send"/>
          - MoneyDirection | send
        </div>
        <div style="display: flex">
          <MoneyDirection :color="color" direction="receive"/>
          - MoneyDirection | receive
        </div>
      </div>

      <div>
        <Plus :color="color"/>
        - Plus
      </div>
      <div>
        <Printer :color="color"/>
        - Printer
      </div>
      <div>
        <Refresh :color="color"/>
        - Refresh
      </div>
      <div>
        <Search :color="color"/>
        - Search
      </div>
      <div>
        <div style="display: flex">
          <SortArrow :color="color" direction="ASC"/>
          - SortArrow | ASC
        </div>
      </div>
      <div>
        <Trash :color="color"/>
        - Trash
      </div>
      <div>
        <Triplet :color="color"/>
        - Triplet
      </div>
      <div>
        <X :color="color" size="s6"/>
        - X | s6
      </div>
      <div>
        <X :color="color" size="s10"/>
        - X | s10
      </div>
      </div>
    `,
  }),
  args: {
    color: undefined,
  },
}
