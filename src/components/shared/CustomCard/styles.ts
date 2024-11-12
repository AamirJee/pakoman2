import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {shadowConstants} from '../../../utils/constants/shadowConstants';

export const styles = (color: string) => {
  return StyleSheet.create({
    container: {
      borderRadius: dimensionConstants?.cardRadius,
      marginVertical: dimensionConstants?.cardMargin,
      backgroundColor: color,
      ...shadowConstants,
    },
  });
};
