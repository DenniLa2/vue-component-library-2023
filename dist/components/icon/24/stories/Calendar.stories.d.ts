import { StoryObj } from '@storybook/vue3'
import Calendar from '@/components/icon/24/Calendar.vue'
import '@/assets/style/color.scss'
import '@/assets/style/color-classes.scss'

declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    color: {
      type: import('vue').PropType<import('../..').EIconColor>;
      default: import('../..').EIconColor;
    };
  }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    color: {
      type: import('vue').PropType<import('../..').EIconColor>;
      default: import('../..').EIconColor;
    };
  }>>, {
    color: import('../..').EIconColor;
  }, {}>;
  tags: string[];
  argTypes: {
    color: {
      control: {
        type: string;
      };
      options: import('../..').EIconColor[];
    };
  };
}
export default _default
type Story = StoryObj<typeof Calendar>;
export declare const Default: Story