/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import { EDirectionArrow, EIconColor } from '@/components/icon/types.ts'
import Calendar from '@/components/icon/24/ISmCalendar.vue'
import Copy from '@/components/icon/24/ISmCopy.vue'
import DirectionArrow from '@/components/icon/24/32/ISmMdDirectionArrow.vue'
import Download from '@/components/icon/24/ISmDownload.vue'
import Upload from '@/components/icon/24/ISmUpload.vue'
import Import from '@/components/icon/24/ISmImport.vue'
import Export from '@/components/icon/24/ISmExport.vue'
import EyeClosed from '@/components/icon/24/ISmEyeClosed.vue'
import EyeOpened from '@/components/icon/24/ISmEyeOpened.vue'
import Exclamation from '@/components/icon/24/ISmExclamation.vue'
import File from '@/components/icon/24/ISmFile.vue'
import Filter from '@/components/icon/24/ISmFilter.vue'
import FilterActive from '@/components/icon/24/ISmFilterActive.vue'
import FilterClear from '@/components/icon/24/ISmFilterClear.vue'
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
import Exit from '@/components/icon/24/ISmExit.vue'

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
  title: 'Icons/24x24/Icons',
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
      Copy,
      DirectionArrow,
      Download,
      Upload,
      Import,
      Export,
      EyeClosed,
      EyeOpened,
      Exclamation,
      File,
      Filter,
      FilterActive,
      FilterClear,
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
      Exit,
    },
    setup() {
      return args
    },
    template: `
      <div class="icon-list">
        <div>
          <Calendar :color="color"/>
          <span>Calendar</span>
        </div>
        <div>
          <Copy :color="color"/>
          <span>Copy</span>
        </div>
        <div>
          <DirectionArrow :color="color" direction="Back"/>
          <span>DirectionArrow | Back | 24</span>
        </div>

        <div>
          <DirectionArrow :color="color" direction="Back"/>
          <span>DirectionArrow | Back | 32</span>
        </div>
        <div>
          <Download :color="color"/>
          <span>Download</span>
        </div>
        <div>
          <Upload :color="color"/>
          <span>Upload</span>
        </div>
        <div>
          <EyeClosed :color="color"/>
          <span>EyeClosed</span>
        </div>
        <div>
          <EyeOpened :color="color"/>
          <span>EyeOpened</span>
        </div>
        <div>
          <Exclamation :color="color"/>
          <span>Exclamation</span>
        </div>
        <div>
          <File :color="color"/>
          <span>File</span>
        </div>
        <div>
          <Filter :color="color"/>
          <span>Filter</span>
        </div>
        <div>
          <FilterActive :color="color"/>
          <span>FilterActive</span>
        </div>
        <div>
          <FilterClear :color="color"/>
          <span>FilterClear</span>
        </div>
        <div>
          <Import :color="color"/>
          <span>Import</span>
        </div>
        <div>
          <Export :color="color"/>
          <span>Export</span>
        </div>
        <div>
          <HintSuccess :color="color"/>
          <span>HintSuccess</span>
        </div>
        <div>
          <TransactionReceive :color="color"/>
          <span>TransactionReceive</span>
        </div>
        <div>
          <TransactionSend :color="color"/>
          <span>TransactionSend</span>
        </div>
        <div>
          <Info :color="color"/>
          <span>Info</span>
        </div>
        <div>
          <List :color="color"/>
          <span>List</span>
        </div>
        <div>
          <Mail :color="color"/>
          <span>Mail</span>
        </div>
        <div>
          <Minus :color="color"/>
          <span>Minus</span>
        </div>

        <div>
          <MoneyDirection :color="color" direction="send"/>
          <span>MoneyDirection | send</span>
        </div>
        <div>
          <MoneyDirection :color="color" direction="receive"/>
          <span>MoneyDirection | receive</span>
        </div>

        <div>
          <Plus :color="color"/>
          <span>Plus</span>
        </div>
        <div>
          <Printer :color="color"/>
          <span>Printer</span>
        </div>
        <div>
          <Refresh :color="color"/>
          <span>Refresh</span>
        </div>
        <div>
          <Search :color="color"/>
          <span>Search</span>
        </div>
        <div>
          <SortArrow :color="color" direction="ASC"/>
          <span>SortArrow | ASC</span>
        </div>
        <div>
          <Trash :color="color"/>
          <span>Trash</span>
        </div>
        <div>
          <Triplet :color="color"/>
          <span>Triplet</span>
        </div>
        <div>
          <X :color="color" size="s6"/>
          <span>X | s6</span>
        </div>
        <div>
          <X :color="color" size="s10"/>
          <span>X | s10</span>
        </div>
        <div>
          <Exit :color="color"/>
          <span>Exit</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: EIconColor.primary,
  },
}
