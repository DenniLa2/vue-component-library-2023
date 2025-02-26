import 'element-plus/dist/index.css'
import { EButtonDesign, EButtonSize, EIconLocation } from './types.ts'
interface Props {
  design?: EButtonDesign;
  label?: string;
  disabled?: boolean;
  iconLocation?: EIconLocation;
  size?: undefined | EButtonSize;
  fullWidth?: boolean;
}

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
  disabled: boolean;
  design: EButtonDesign;
  size: (rawProps: any) => EButtonSize | undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
  disabled: boolean;
  design: EButtonDesign;
  size: (rawProps: any) => EButtonSize | undefined;
}>>>, {
  size: EButtonSize;
  design: EButtonDesign;
  disabled: boolean;
}, {}>, {
  icon?(_: {}): any;
}>;
export default _default
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? {
    type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
  } : {
    type: import('vue').PropType<T[K]>;
    required: true;
  };
};
type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
    default: D[K];
  }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
  new(): {
    $slots: S;
  };
};
type __VLS_Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
