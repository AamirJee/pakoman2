import {StyleSheet} from 'react-native';

import {shadowConstants} from '../../../utils/constants/shadowConstants';

import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = ({error, multiline}: any) => {
  const errorStyles = error
    ? {
        borderColor: colorConstants?.red,
      }
    : {
        borderColor: colorConstants?.lightGray,
      };
  const multilineStyle = multiline && {
    height: dimensionConstants?.multiLineHeight,
  };
  return StyleSheet.create({
    shadowContainer: {
      marginBottom: dimensionConstants?.margin,
      ...shadowConstants,
    },
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: colorConstants?.white,
      alignItems: 'center',
      paddingHorizontal: dimensionConstants?.paddingLarge,
      borderWidth: dimensionConstants?.errorBorderWidth,
      borderRadius: dimensionConstants?.borderRadiusXXLarge,
      ...shadowConstants,
      ...errorStyles,
    },
    input: {
      flex: 1,
      color: colorConstants?.black,
      paddingHorizontal: dimensionConstants?.padding,
      paddingVertical: dimensionConstants?.paddingSmall,
      ...multilineStyle,
    },
  });
};
