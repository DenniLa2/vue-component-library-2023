import { StoryObj } from '@storybook/vue3'
import BaseTag from '@/components/ui/UTag.vue'
import { ETagColor } from '@/components/ui/types.ts'
declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    label: {
      type: import('vue').PropType<string>;
      required: true;
    };
    color: {
      type: import('vue').PropType<ETagColor>;
      required: true;
    };
    clickable: {
      type: import('vue').PropType<boolean>;
      default: boolean;
    };
  }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
      type: import('vue').PropType<string>;
      required: true;
    };
    color: {
      type: import('vue').PropType<ETagColor>;
      required: true;
    };
    clickable: {
      type: import('vue').PropType<boolean>;
      default: boolean;
    };
  }>>, {
    clickable: boolean;
  }, {}>;
  tags: string[];
  argTypes: {
    color: {
      control: {
        type: string;
      };
      options: ETagColor[];
    };
  };
};
export default _default
type Story = StoryObj<typeof BaseTag>;
export declare const Attention_Clickable: Story
export declare const Warning_NotClickable: Story
