export interface CustomDoubleLoginButtonInterface {
  primaryButtonText: string;
  secondaryButtonText: string;
  handlePrimaryOnPress: Function;
  handleSecondaryOnPress: Function;
  isDisabledPrimary?: boolean;
  isDisabledSecondary?: boolean;
  secondaryExtraStyles?: any;
  primaryExtraStyles?: any;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  isLogin?: boolean;
}
