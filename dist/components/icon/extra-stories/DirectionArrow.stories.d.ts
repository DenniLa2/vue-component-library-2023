import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/32/ISmMdDirectionArrow.vue'
import { EDirectionArrow, EIconColor, EIconSize } from '@/components/icon/types.ts'
declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    size: {
      type: import('vue').PropType<EIconSize>;
      default: EIconSize;
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
      type: import('vue').PropType<EIconSize>;
      default: EIconSize;
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
    size: EIconSize;
    color: EIconColor;
  }, {}>;
  tags: string[];
  argTypes: {
    direction: {
      control: {
        type: string;
      };
      options: EDirectionArrow[];
    };
    color: {
      control: {
        type: string;
      };
      options: EIconColor[];
    };
    size: {
      control: {
        type: string;
      };
      options: (EIconSize | undefined)[];
      defaultValue: undefined;
    };
  };
};
export default _default
type Story = StoryObj<typeof Icon>;
export declare const DirectionArrow_24: Story
export declare const DirectionArrow_32: Story
