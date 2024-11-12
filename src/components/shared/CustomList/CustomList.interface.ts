export default interface CustomListInterface {
  listData: Array<any>;
  renderItemView: Function;
  isHorizontal?: boolean;
  horizontalScrollVisible?: boolean;
  footer?: any;
  header?: any;
  isInverted?: boolean;
  isEmptyIcon?: any;
  emptyCTA?: JSX.Element;
  listLoader: JSX.Element;
  isListLoading: boolean;
  isEmptyHeading?: string;
  contentInset?: any;
  onEndReached?: Function;
}
