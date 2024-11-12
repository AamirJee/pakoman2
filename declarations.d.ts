declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
      fillShadow?: string;
      fillLight?: string;
      fillBody?: string;
    }
  >;
  export default content;
}

declare module '*.png' {
  const value: any;
  export = value;
}
