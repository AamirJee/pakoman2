import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  typeContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: dimensionConstants?.cardPadding,
  },
  body: {
    padding: dimensionConstants?.cardPadding,
  },
});
