import { EMoneyDirection } from '@/types/events.types.ts'
import { ESortDirection } from '@/types/table.types.ts'

/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 22.05.2023
 */
export enum EDirection_x4 {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down',
}

export enum EIconSize {
  xxxs = '10',
  xxs = '14',
  xs = '20',
  sm = '24',
  md = '32',
  lg = '36',
  xl = '42',
  mega = '96',
}

export enum ELogoSize {
  s_32_27 = 's_32_27',
  s_42_36 = 's_42_36',
}

export enum EDirectionArrow {
  back = 'back',
  forward = 'forward',
}

export enum EIconColor {
  primary = 'primary',
  secondary = 'secondary',
  allusion = 'allusion',
  contrast = 'contrast',
  warning = 'warning',
  success = 'success',
  hint = 'hint',
  search = 'search',
  tertiary = 'tertiary',
  disabled = 'disabled',
  // todo we need to agree on colors and their names
  selected = 'selected',
}

export enum EXSize {
  s10 = 's10',
  s6 = 's6',
}

export interface IDefaultIconProps {
  color?: EIconColor,
  size?: EIconSize,
  height?: number | string,
  width?: number | string,
  disabled?: boolean,
  direction?: EDirectionArrow | EMoneyDirection | ESortDirection | EDirection_x4,
  type?: EXSize,
}

export interface IDefaultBgIconProps extends IDefaultIconProps{
  badgeColor?: EIconColor,
  bgColor?: EIconColor,
}