import {StyleSheet} from 'react-native';

import {shadowConstants} from '../../../utils/constants/shadowConstants';

import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = (props: any) => {
  const {line, width, fontWeight, fontSize, textColor, backgroundColor} = props;

  const disabledStyles =
    backgroundColor === colorConstants?.transparent ||
    backgroundColor === 'transparent'
      ? null
      : {
          ...shadowConstants,
        };

  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      borderRadius: dimensionConstants?.buttonBorderRadius,
      padding: dimensionConstants?.buttonPadding,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: width,
      backgroundColor: backgroundColor,
      ...disabledStyles,
    },
    disabled: {
      opacity: dimensionConstants?.buttonDisabledOpacity,
    },
    title: {
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: textColor,
      textAlign: 'center',
      paddingHorizontal: line > 0 ? 0 : dimensionConstants?.iconTxtPadding,
      borderBottomWidth: line,
    },
  });
};
