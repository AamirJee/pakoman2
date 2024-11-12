import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  extraStyles: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  icon: {
    marginBottom: dimensionConstants?.marginSmall,
  },
});
