import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  body: {
    padding: dimensionConstants?.cardPadding,
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: dimensionConstants?.margin,
    padding: dimensionConstants?.paddingSmall,
    borderRadius: dimensionConstants?.borderRadiusSmall,
  },
});
