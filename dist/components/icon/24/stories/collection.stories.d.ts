/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import { EDirectionArrow, EIconColor } from '@/components/icon/types.ts'
import { EMoneyDirection } from '@/types'

declare const _default: {
  computed: {
    EMoneyDirection(): typeof EMoneyDirection;
    EDirectionArrow(): typeof EDirectionArrow;
    EIconColor(): typeof EIconColor;
  };
  title: string;
  tags: string[];
  argTypes: {
    color: {
      control: {
        type: string;
      };
      options: EIconColor[];
    };
  };
}
export default _default
export declare const Collection: {
  render: (args: {
    color: EIconColor;
  }) => {
    components: {
      Calendar: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      DirectionArrow: import('vue').DefineComponent<{
        size: {
          type: import('vue').PropType<24 | 32>;
          default: number;
        };
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
        direction: {
          type: import('vue').PropType<EDirectionArrow>;
          required: true;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        size: {
          type: import('vue').PropType<24 | 32>;
          default: number;
        };
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
        direction: {
          type: import('vue').PropType<EDirectionArrow>;
          required: true;
        };
      }>>, {
        size: 24 | 32;
        color: EIconColor;
      }, {}>;
      Download: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      EyeClosed: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      EyeOpened: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Exclamation: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      File: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Filter: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }>>, {}, {}>;
      FilterActive: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }>>, {}, {}>;
      HintSuccess: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      TransactionReceive: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
      TransactionSend: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
      Info: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      List: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Mail: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Minus: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      MoneyDirection: import('vue').DefineComponent<{
        size: {
          type: import('vue').PropType<import('@/components/icon/types.ts').EMoneyDirectionSize>;
          default: import('@/components/icon/types.ts').EMoneyDirectionSize;
        };
        direction: {
          type: import('vue').PropType<EMoneyDirection>;
          required: true;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        size: {
          type: import('vue').PropType<import('@/components/icon/types.ts').EMoneyDirectionSize>;
          default: import('@/components/icon/types.ts').EMoneyDirectionSize;
        };
        direction: {
          type: import('vue').PropType<EMoneyDirection>;
          required: true;
        };
      }>>, {
        size: import('@/components/icon/types.ts').EMoneyDirectionSize;
      }, {}>;
      Plus: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Printer: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Refresh: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Search: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      SortArrow: import('vue').DefineComponent<{
        direction: {
          type: import('vue').PropType<import('../../../table').ESortDirection>;
          required: true;
        };
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        direction: {
          type: import('vue').PropType<import('../../../table').ESortDirection>;
          required: true;
        };
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }>>, {}, {}>;
      Trash: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      Triplet: import('vue').DefineComponent<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
          type: import('vue').PropType<EIconColor>;
          default: EIconColor;
        };
      }>>, {
        color: EIconColor;
      }, {}>;
      X: import('vue').DefineComponent<{
        size: {
          type: import('vue').PropType<import('@/components/icon/types.ts').EXSize>;
          required: true;
          default: import('@/components/icon/types.ts').EXSize;
        };
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        size: {
          type: import('vue').PropType<import('@/components/icon/types.ts').EXSize>;
          required: true;
          default: import('@/components/icon/types.ts').EXSize;
        };
        color: {
          type: import('vue').PropType<EIconColor>;
          required: true;
        };
      }>>, {
        size: import('@/components/icon/types.ts').EXSize;
      }, {}>;
    };
    setup(): {
      color: EIconColor;
    };
    template: string;
  };
  args: {
    color: undefined;
  };
}
