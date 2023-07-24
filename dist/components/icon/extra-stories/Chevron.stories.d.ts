import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/24/Chevron.vue'
import { EDirection_x4, EIconColor } from '@/components/icon/types.ts'

declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    color: {
      type: import('vue').PropType<EIconColor>;
      required: true;
    };
    direction: {
      type: import('vue').PropType<EDirection_x4>;
      default: EDirection_x4;
    };
  }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    color: {
      type: import('vue').PropType<EIconColor>;
      required: true;
    };
    direction: {
      type: import('vue').PropType<EDirection_x4>;
      default: EDirection_x4;
    };
  }>>, {
    direction: EDirection_x4;
  }, {}>;
  tags: string[];
  argTypes: {
    direction: {
      control: {
        type: string;
      };
      options: EDirection_x4[];
    };
    color: {
      control: {
        type: string;
      };
      options: EIconColor[];
    };
  };
}
export default _default
type Story = StoryObj<typeof Icon>;
export declare const Chevron: Story
