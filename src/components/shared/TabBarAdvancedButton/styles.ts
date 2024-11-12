import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  button: {
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstants?.gold,
    width: dimensionConstants.bottomNavSize,
    height: dimensionConstants.bottomNavSize,
    borderRadius: dimensionConstants?.bottomNavBorderRadius,
  },
  buttonIcon: {
    fontSize: 30,
    color: colorConstants?.white,
  },
});
