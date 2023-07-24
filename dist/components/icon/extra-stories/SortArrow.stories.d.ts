import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/SortArrow.vue'
import { EIconColor } from '@/components/icon/types.ts'
import { ESortDirection } from '@/components/table'

declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    direction: {
      type: import('vue').PropType<ESortDirection>;
      required: true;
    };
    color: {
      type: import('vue').PropType<EIconColor>;
      required: true;
    };
  }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    direction: {
      type: import('vue').PropType<ESortDirection>;
      required: true;
    };
    color: {
      type: import('vue').PropType<EIconColor>;
      required: true;
    };
  }>>, {}, {}>;
  tags: string[];
  argTypes: {
    color: {
      control: {
        type: string;
      };
      options: EIconColor[];
    };
    direction: {
      control: {
        type: string;
      };
      options: ESortDirection[];
    };
  };
}
export default _default
type Story = StoryObj<typeof Icon>;
export declare const Default: Story
