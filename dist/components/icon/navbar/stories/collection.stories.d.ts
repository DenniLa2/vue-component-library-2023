import { EIconColor } from '@/components/icon'

declare const _default: {
  computed: {
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
export declare const NavBar: {
  render: (args: {
    color: EIconColor;
  }) => {
    components: {
      CreatePayment: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
      Profile: import('vue').DefineComponent<{
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
      Home: import('vue').DefineComponent<{
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
      Payments: import('vue').DefineComponent<{
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
      Drafts: import('vue').DefineComponent<{
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
      Support: import('vue').DefineComponent<{
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
      Faq: import('vue').DefineComponent<{
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
    };
    setup(): {
      color: EIconColor;
    };
    template: string;
  };
  args: {
    color: EIconColor;
  };
}
