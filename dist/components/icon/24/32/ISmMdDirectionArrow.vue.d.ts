/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 26.05.2023
 */
import { EDirectionArrow, EIconColor, EIconSize } from '../../types.ts'
interface Props {
  direction: EDirectionArrow;
  color?: EIconColor;
  size?: EIconSize;
}

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
  color: EIconColor;
  size: EIconSize;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
  color: EIconColor;
  size: EIconSize;
}>>>, {
  size: EIconSize;
  color: EIconColor;
}, {}>;
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
