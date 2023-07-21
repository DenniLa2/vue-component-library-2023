/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 05.06.2023
 */
// NB! RADIO
export interface IRadio {
  label: string
  value: string
  border: boolean
}

// NB! Option
export interface Option {
  value: number | string
  label: string
}

// NB! TAG
export enum ETagStatus {
  kyb = 'kyb',
  declined = 'declined',
  completed = 'completed',
  process = 'process',
  draft = 'draft',
  border = 'border',
}

export enum ETagColor {
  active = '--ui-active',
  attention = '--ui-attention',
  warning = '--ui-warning',
  success = '--ui-success',
  tretiary = '--ui-tretiary',
}

export enum EVerificationTagStatus {
  notStarted = 'notStarted',

  self_clientInProgress = 'self_clientInProgress',
  self_inCheck = 'self_inCheck',
  self_needInfo = 'self_needInfo',
  self_notConfirmed = 'self_notConfirmed',
  self_confirmed = 'self_confirmed',

  uid_clientInProgress = 'uid_clientInProgress',
  uid_inCheck = 'uid_inCheck',
  uid_notConfirmed = 'uid_notConfirmed',
  uid_confirmed = 'uid_confirmed',

  wrong = 'wrong',
}

// NB! INPUT
export enum EInputType {
  email = 'email',
  password = 'password',
  tel = 'tel',
  text = 'text',
  textarea = 'textarea',
  number = 'number',
}

export enum EValidationState {
  success = 'success',
  error = 'error',
  none = 'none'
}

// NB! BUTTON
export enum EButtonDesign {
  RoundedMain = 'btn-rounded-main',
  RoundedIconOnly = 'btn-rounded-icon-only',
  RoundedSecondary = 'btn-rounded-secondary',
  RoundedWarning = 'btn-rounded-warning',
  TextDefault = 'btn-text-default',
}

export enum EIconLocation {
  leftAround = 'btn--left-around',
  leftBetween = 'btn--left-between',
  rightAround = 'btn--right-around',
  rightBetween = 'btn--right-between',
}

export enum EButtonSize {
  large = 'btn-rounded--large',
  medium = 'btn-rounded--medium',
  mini = 'btn-rounded--mini',
}

export enum EVariant {
  Main = 'Main',
  Secondary = 'Secondary',
  // Accent = 'Accent',
  Warning = 'Warning',
  Default = 'Default',
  // None = 'None',
}
