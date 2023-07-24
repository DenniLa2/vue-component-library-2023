import { EIconColor } from '../'
import '@/assets/style/color.scss'
import '@/assets/style/color-classes.scss'

interface Props {
  color?: EIconColor;
}

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
  color: EIconColor;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
  color: EIconColor;
}>>>, {
  color: EIconColor;
}, {}>
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
type __VLS_Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
