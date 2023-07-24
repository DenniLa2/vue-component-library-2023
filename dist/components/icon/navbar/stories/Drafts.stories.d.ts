import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/navbar/Drafts.vue'
import { EIconColor } from '@/components/icon'

declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
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
type Story = StoryObj<typeof Icon>;
export declare const Default: Story
