import { StoryObj } from '@storybook/vue3'
import Calendar from '@/components/icon/24/ISmCalendar.vue'
declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    color: {
      type: import('vue').PropType<import('../../types').EIconColor>;
      default: import('../../types').EIconColor;
    };
  }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    color: {
      type: import('vue').PropType<import('../../types').EIconColor>;
      default: import('../../types').EIconColor;
    };
  }>>, {
    color: import('../../types').EIconColor;
  }, {}>;
  tags: string[];
  argTypes: {
    color: {
      control: {
        type: string;
      };
      options: import('../../types').EIconColor[];
    };
  };
};
export default _default
type Story = StoryObj<typeof Calendar>;
export declare const Default: Story
