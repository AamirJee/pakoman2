import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimensionConstants?.paddingXLarge,
    paddingBottom: 70,
  },
  photoContainer: {
    alignItems: 'center',
    paddingVertical: dimensionConstants?.paddingLarge,
  },
});
