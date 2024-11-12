import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = (color: any) =>
  StyleSheet.create({
    error: {
      color: color,
      fontWeight: '500',
      fontSize: dimensionConstants?.errorTxtSize,
      paddingVertical: dimensionConstants?.errorTxtPadding,
    },
  });
