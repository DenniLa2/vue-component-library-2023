/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 29.06.2023
 */
import { EDirection_x4, EDirectionArrow, EIconColor, EIconSize } from '@/types/icon.types.ts'
import { ESortDirection } from '@/types/table.types.ts'

export const booleans: boolean[] = [
  true,
  false,
]

export const sizes: EIconSize[] = [
  EIconSize.xxxs,
  EIconSize.xxs,
  EIconSize.xs,
  EIconSize.sm,
  EIconSize.md,
  EIconSize.lg,
  EIconSize.xl,
  EIconSize.mega,
]

export const colors: EIconColor[] = [
  EIconColor.primary,
  EIconColor.secondary,
  EIconColor.allusion,
  EIconColor.contrast,
  EIconColor.warning,
  EIconColor.success,
  EIconColor.hint,
  EIconColor.search,
  EIconColor.disabled,
]

export const x4Directions: EDirection_x4[] = [
  EDirection_x4.left,
  EDirection_x4.right,
  EDirection_x4.up,
  EDirection_x4.down,
]

export const arrowDirections: EDirectionArrow[] = [
  EDirectionArrow.back,
  EDirectionArrow.forward,
]

export const sortDirections: ESortDirection[] = [
  ESortDirection.ASC,
  ESortDirection.DESC,
]