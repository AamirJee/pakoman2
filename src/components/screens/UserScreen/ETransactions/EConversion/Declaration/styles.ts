import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    padding: dimensionConstants?.paddingXXLarge,
    paddingBottom: dimensionConstants?.paddingXXXLarge,
  },
  textContainer: {
    flexDirection: 'row',
  },
  buttonBottomMargin: {
    marginBottom: dimensionConstants?.paddingXXXLarge,
  },
});
