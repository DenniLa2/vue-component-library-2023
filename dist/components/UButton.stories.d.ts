import { StoryObj } from '@storybook/vue3'
import UButton from './UButton.vue'
import { EButtonDesign, EButtonSize, EIconLocation } from './index.ts'

declare const _default: {
  title: string;
  component: {
    new(...args: any[]): {
      $: import('vue').ComponentInternalInstance;
      $data: {};
      $props: {
        design?: EButtonDesign | undefined;
        disabled?: boolean | undefined;
        size?: EButtonSize | undefined;
        readonly label?: string | undefined;
        readonly iconLocation?: EIconLocation | undefined;
        key?: string | number | symbol | undefined;
        ref?: import('vue').VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
          [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
      };
      $attrs: {
        [x: string]: unknown;
      };
      $refs: {
        [x: string]: unknown;
      };
      $slots: Readonly<{
        [name: string]: import('vue').Slot<any> | undefined;
      }>;
      $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
      $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
      $emit: (event: string, ...args: any[]) => void;
      $el: any;
      $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        design: {
          type: import('vue').PropType<EButtonDesign>;
          default: EButtonDesign;
        };
        label: {
          type: import('vue').PropType<string>;
        };
        disabled: {
          type: import('vue').PropType<boolean>;
          default: boolean;
        };
        iconLocation: {
          type: import('vue').PropType<EIconLocation>;
        };
        size: {
          type: import('vue').PropType<EButtonSize>;
          default: (rawProps: any) => EButtonSize | undefined;
        };
      }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        design: EButtonDesign;
        disabled: boolean;
        size: EButtonSize;
      }, {}, string, {}> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
      };
      $forceUpdate: () => void;
      $nextTick: typeof import('vue').nextTick;
      $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Readonly<import('vue').ExtractPropTypes<{
      design: {
        type: import('vue').PropType<EButtonDesign>;
        default: EButtonDesign;
      };
      label: {
        type: import('vue').PropType<string>;
      };
      disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      iconLocation: {
        type: import('vue').PropType<EIconLocation>;
      };
      size: {
        type: import('vue').PropType<EButtonSize>;
        default: (rawProps: any) => EButtonSize | undefined;
      };
    }>> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
  } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    design: {
      type: import('vue').PropType<EButtonDesign>;
      default: EButtonDesign;
    };
    label: {
      type: import('vue').PropType<string>;
    };
    disabled: {
      type: import('vue').PropType<boolean>;
      default: boolean;
    };
    iconLocation: {
      type: import('vue').PropType<EIconLocation>;
    };
    size: {
      type: import('vue').PropType<EButtonSize>;
      default: (rawProps: any) => EButtonSize | undefined;
    };
  }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    design: EButtonDesign;
    disabled: boolean;
    size: EButtonSize;
  }, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
      icon?(_: {}): any;
    };
  });
  tags: string[];
  argTypes: {
    design: {
      control: string;
      options: EButtonDesign[];
      defaultValue: EButtonDesign;
    };
    iconLocation: {
      control: string;
      options: (EIconLocation | undefined)[];
    };
    size: {
      control: string;
      options: (EButtonSize | undefined)[];
    };
  };
}
export default _default
type Story = StoryObj<typeof UButton>;
export declare const DefaultButton: Story
export declare const RoundedSecondary_Large: Story
export declare const RoundedSecondary_Medium: Story
