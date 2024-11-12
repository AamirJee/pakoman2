export interface CustomModalInterface {
  title?: string;
  body: JSX.Element;
  open: boolean;
  onRequestClose: Function;
  bottom?: boolean;
  closeButton?: boolean;
}
