import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: dimensionConstants.paddingLarge,
    marginTop: 100,
  },
  logo: {
    width: 80,
    height: 90,
    marginBottom: dimensionConstants.margin,
  },
  error: {
    fontWeight: '500',
    fontSize: fontConstants.header,
    paddingVertical: dimensionConstants?.errorTxtPadding,
  },
});
