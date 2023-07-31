/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 05.06.2023
 */
import { EIconColor } from '../types.ts'
import { ESortDirection } from '@/components/table'
interface Props {
  direction: ESortDirection;
  color: EIconColor;
}

declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>>, {}, {}>
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
