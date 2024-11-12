import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    justifyContent: 'center',
    bottom: dimensionConstants?.snackBottom,
  },
});
