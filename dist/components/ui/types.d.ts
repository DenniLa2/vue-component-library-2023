/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 05.06.2023
 */
export interface IRadio {
    label: string;
    value: string;
    border: boolean;
}
export interface Option {
    value: number | string;
    label: string;
}
export declare enum ETagStatus {
  kyb = 'kyb',
  declined = 'declined',
  completed = 'completed',
  process = 'process',
  draft = 'draft',
  border = 'border'
}

export declare enum ETagColor {
  active = '--ui-active',
  attention = '--ui-attention',
  warning = '--ui-warning',
  success = '--ui-success',
  tretiary = '--ui-tretiary'
}

export declare enum EVerificationTagStatus {
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
  wrong = 'wrong'
}

export declare enum EInputType {
  email = 'email',
  password = 'password',
  tel = 'tel',
  text = 'text',
  textarea = 'textarea',
  number = 'number'
}

export declare enum EValidationState {
  success = 'success',
  error = 'error',
  none = 'none'
}

export declare enum EButtonDesign {
  RoundedMain = 'btn-rounded-main',
  RoundedIconOnly = 'btn-rounded-icon-only',
  RoundedSecondary = 'btn-rounded-secondary',
  RoundedWarning = 'btn-rounded-warning',
  TextDefault = 'btn-text-default'
}

export declare enum EIconLocation {
  leftAround = 'btn--left-around',
  leftBetween = 'btn--left-between',
  rightAround = 'btn--right-around',
  rightBetween = 'btn--right-between'
}

export declare enum EButtonSize {
  large = 'btn-rounded--large',
  medium = 'btn-rounded--medium',
  mini = 'btn-rounded--mini'
}

export declare enum EVariant {
  Main = 'Main',
  Secondary = 'Secondary',
  Warning = 'Warning',
  Default = 'Default'
}
