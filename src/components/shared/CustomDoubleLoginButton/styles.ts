import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  button: {
    marginTop: dimensionConstants?.marginSmall,
  },
  buttonTransparent: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: colorConstants?.transparent,
  },
});
