export interface CustomInfoPageInterface {
  item: CustomInfoPageItem;
}

interface CustomInfoPageItem {
  title?: string;
  subtitle?: string;
  rightImage?: string;
  description?: string;
  bgImage?: string;
  borderColor?: string;
  textColor?: string;
  textAlign?: string;
  textBg?: string;
  listObject?: any;
  slider?: string;
  disclaimer?: string;
  pdf_url?: string;
}
