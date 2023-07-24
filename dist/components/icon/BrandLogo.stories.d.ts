import { StoryObj } from '@storybook/vue3'
import Icon from '@/components/icon/BrandLogo.vue'
import { ELogoSize } from '@/components/icon/index'

declare const _default: {
  title: string;
  component: import('vue').DefineComponent<{
    size: {
      type: import('vue').PropType<ELogoSize>;
      default: ELogoSize;
    };
  }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
      type: import('vue').PropType<ELogoSize>;
      default: ELogoSize;
    };
  }>>, {
    size: ELogoSize;
  }, {}>;
  tags: string[];
  argTypes: {
    size: {
      control: {
        type: string;
      };
      options: ELogoSize[];
    };
  };
}
export default _default
type Story = StoryObj<typeof Icon>;
export declare const BrandLogo: Story
