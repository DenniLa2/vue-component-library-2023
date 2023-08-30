/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import Calendar from '@/components/icon/24/ISmCalendar.vue'
import Chevron from '@/components/icon/24/ISmChevron.vue'
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

import { EMoneyDirection } from '@/components/icon/types'
import { EDirectionArrow, EIconColor, EIconSize, EXSize } from '@/components/icon/types/icon.types.ts'
import { ESortDirection } from '@/components/table/types'
import { defaultIconArgs, defaultIconArgTypes } from '@/components/icon/shared/common.storybook.ts'

export default {
  title: 'Icons/Linear/[All]',
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

export const Collection = {
  render: (args: {
      color: EIconColor,
      size: EIconSize,
      disabled: boolean,
    }) => ({
    components: {
      Calendar,
      Chevron,
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
    data() {
      return {
        EDirectionArrow,
        EMoneyDirection,
        ESortDirection,
        EXSize
      }
    },
    setup() {
      return args
    },
    template: `
      <div class="icon-list">
        <div>
          <Calendar
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Calendar</span>
        </div>
        <div>
          <Chevron 
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Chevron</span>
        </div>
        <div>
          <Copy 
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Copy</span>
        </div>
        <div>
          <DirectionArrow
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="EDirectionArrow.forward"
          />
          <span>DirectionArrow | {{ EDirectionArrow.forward }}</span>
        </div>

        <div>
          <DirectionArrow
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="EDirectionArrow.back"
          />
          <span>DirectionArrow | {{ EDirectionArrow.back }}</span>
        </div>
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
        <div>
          <EyeClosed
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>EyeClosed</span>
        </div>
        <div>
          <EyeOpened
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>EyeOpened</span>
        </div>
        <div>
          <Exclamation
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Exclamation</span>
        </div>
        <div>
          <File
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>File</span>
        </div>
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
          <span>FilterActive</span>
        </div>
        <div>
          <FilterClear
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>FilterClear</span>
        </div>
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
        <div>
          <HintSuccess
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>HintSuccess</span>
        </div>
        <div>
          <TransactionReceive
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>TransactionReceive</span>
        </div>
        <div>
          <TransactionSend
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>TransactionSend</span>
        </div>
        <div>
          <Info
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Info</span>
        </div>
        <div>
          <List
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>List</span>
        </div>
        <div>
          <Mail
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Mail</span>
        </div>
        <div>
          <Minus
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Minus</span>
        </div>

        <div>
          <MoneyDirection
            :size="size"
            :disabled="disabled"
            :direction="EMoneyDirection.send"
          />
          <span>MoneyDirection | {{ EMoneyDirection.send }}</span>
        </div>
        <div>
          <MoneyDirection 
            :size="size"
            :disabled="disabled"
            :direction="EMoneyDirection.receive"
          />
          <span>MoneyDirection | {{ EMoneyDirection.receive }}</span>
        </div>

        <div>
          <Plus
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Plus</span>
        </div>
        <div>
          <Printer
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Printer</span>
        </div>
        <div>
          <Refresh
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Refresh</span>
        </div>
        <div>
          <Search
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Search</span>
        </div>
        <div>
          <SortArrow 
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="ESortDirection.ASC"
          />
          <span>SortArrow | {{ ESortDirection.ASC }}</span>
        </div>
        <div>
          <SortArrow 
            :color="color"
            :size="size"
            :disabled="disabled"
            :direction="ESortDirection.DESC"
          />
          <span>SortArrow | {{ ESortDirection.DESC }}</span>
        </div>
        <div>
          <Trash 
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Trash</span>
        </div>
        <div>
          <Triplet
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Triplet</span>
        </div>
        <div>
          <X 
            :color="color"
            :size="size"
            :type="EXSize.s6"
            :disabled="disabled"
          />
          <span>X | {{ EXSize.s6 }}</span>
        </div>
        <div>
          <X
            :color="color"
            :size="size"
            :type="EXSize.s10"
            :disabled="disabled"
          />
          <span>X | {{ EXSize.s10 }}</span>
        </div>
        <div>
          <Exit
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Exit</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
