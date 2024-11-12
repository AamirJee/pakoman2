export interface CustomInputInterface {
  placeHolder: string;
  value: any;

  error: boolean;
  errorMsg?: string;
  disabled?: boolean;

  handleChange: any;
  onBlur: Function;

  blurOnSubmit: boolean;
  multiline?: boolean;
  numberOfLines?: number; //only Android

  keyboardType?: any; //'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
  autoCapitalize?: any;

  rightIcon?: any;
  rightIconClick?: any;

  leftIcon?: any;
  leftIconClick?: any;

  secureTextEntry?: boolean;
  onEndEditing?: any;
  autoFocus?: boolean;
  ref?: any;
  onFocus?: any;
}
