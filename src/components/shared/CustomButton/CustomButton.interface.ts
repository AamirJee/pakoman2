export interface CustomButtonInterface {
  buttonText?: string;
  textColor: string;
  backgroundColor: string;
  handleOnPress: Function;
  width?: any;
  fontSize?: number;
  fontWeight?: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  line?: Number;
  extraStyles?: any;
}
