import {StyleSheet} from 'react-native';
import {colorConstants} from '../../utils/constants/colorConstants';
import {dimensionConstants} from '../../utils/constants/dimensionConstants';
import {shadowConstants} from '../../utils/constants/shadowConstants';

export const styles = StyleSheet.create({
  navigatorContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: colorConstants.white,
    ...shadowConstants,
  },
  xFillLine: {
    backgroundColor: colorConstants?.iconBg,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});
